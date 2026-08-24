import 'server-only'
import fs from 'fs/promises'
import path from 'path'
import QRCode from 'qrcode'
import {
  PDFDocument,
  PDFPage,
  PDFImage,
  rgb,
  pushGraphicsState,
  popGraphicsState,
  moveTo,
  lineTo,
  closePath,
  clip,
  endPath,
} from 'pdf-lib'

type Rect = { x: number; y: number; width: number; height: number }

const TEMPLATE_PATHS = {
  ponctuelle: path.join(process.cwd(), 'public/templates/badge-template.pdf'),
  permanente: path.join(process.cwd(), 'public/templates/badge-template_permanente.pdf'),
} as const

// Coordonnées relevées manuellement sur chaque template (page 595.2 x 841.92 pt) :
// Nom1/Prenom1/Fonction1/Match1 sont des champs AcroForm existants (position
// gérée par le PDF lui-même). Photo, pastilles de zone et QR code n'ont pas de
// champ/objet adressable : coordonnées extraites à la main (rect du widget
// bouton pour la photo, bounding box de couleur pour les pastilles, QR placé
// dans l'espace libre à droite de la pastille Vestiaires).
const LAYOUTS = {
  ponctuelle: {
    hasMatch: true,
    photoRect: { x: 70.98, y: 237.6, width: 176.62, height: 203.48 } as Rect,
    zoneRects: {
      terrain: { x: 37, y: 142.9, width: 259, height: 47 } as Rect,
      tribune: { x: 310, y: 142.9, width: 259, height: 47 } as Rect,
      vestiaires: { x: 37, y: 82.9, width: 259, height: 46 } as Rect,
    },
    qrRect: { x: 314, y: 87, width: 40, height: 40 } as Rect,
  },
  permanente: {
    hasMatch: false,
    photoRect: { x: 41.5184, y: 538.678, width: 89.3436, height: 101.431 } as Rect,
    zoneRects: {
      terrain: { x: 27, y: 487.9, width: 126, height: 22 } as Rect,
      tribune: { x: 160, y: 487.9, width: 127, height: 22 } as Rect,
      vestiaires: { x: 27, y: 459.9, width: 126, height: 22 } as Rect,
    },
    qrRect: { x: 163, y: 461, width: 20, height: 20 } as Rect,
  },
} as const

const PAGE_SIZE: [number, number] = [595.2, 841.92]

export type MediaBadgeParams = {
  accreditationType: 'ponctuelle' | 'permanente'
  firstName: string
  lastName: string
  role: string
  matchName?: string
  photoBytes: Uint8Array
  photoContentType: string
  zones: { terrain: boolean; tribune: boolean; vestiaires: boolean }
  verifyUrl: string
  /** Permanente uniquement : agrandit le badge (quart de page A4) en pleine page — utilisé pour l'envoi par e-mail. Omis/false pour un futur usage impression (4 badges par feuille). */
  fullPage?: boolean
}

/** Ne throw jamais : renvoie null si le template est introuvable ou si la génération échoue (l'appelant envoie l'email sans pièce jointe). */
export async function generateMediaBadgePdf(params: MediaBadgeParams): Promise<Uint8Array | null> {
  const layout = LAYOUTS[params.accreditationType]

  let templateBytes: Buffer
  try {
    templateBytes = await fs.readFile(TEMPLATE_PATHS[params.accreditationType])
  } catch {
    return null
  }

  try {
    const pdf = await PDFDocument.load(templateBytes)
    const form = pdf.getForm()
    const page = pdf.getPages()[0]

    form.getTextField('Nom1').setText(params.lastName)
    form.getTextField('Prenom1').setText(params.firstName)
    form.getTextField('Fonction1').setText(params.role)
    if (layout.hasMatch && params.matchName) {
      form.getTextField('Match1').setText(params.matchName)
    }

    // Le champ photo est un bouton "image field" Acrobat, pas exploitable
    // simplement via pdf-lib : on le retire et on dessine la photo nous-mêmes
    // au même endroit.
    try {
      form.removeField(form.getField('Image1_af_image'))
    } catch {}

    form.flatten()

    const photo = params.photoContentType === 'image/png'
      ? await pdf.embedPng(params.photoBytes)
      : await pdf.embedJpg(params.photoBytes)
    drawImageCover(page, photo, layout.photoRect)

    const grayOut = (rect: Rect) => page.drawRectangle({ ...rect, color: rgb(0.5, 0.5, 0.5), opacity: 0.88 })
    if (!params.zones.terrain) grayOut(layout.zoneRects.terrain)
    if (!params.zones.tribune) grayOut(layout.zoneRects.tribune)
    if (!params.zones.vestiaires) grayOut(layout.zoneRects.vestiaires)

    const qrDataUrl = await QRCode.toDataURL(params.verifyUrl, { margin: 0 })
    const qrImage = await pdf.embedPng(Buffer.from(qrDataUrl.split(',')[1], 'base64'))
    page.drawImage(qrImage, layout.qrRect)

    const filledBytes = await pdf.save()

    if (params.accreditationType === 'permanente' && params.fullPage) {
      // Le template permanente occupe un quart de page A4 (impression par 4 à
      // l'avenir) — pour l'e-mail, on l'agrandit x2 pour remplir une pleine
      // page, au même format visuel que l'accréditation ponctuelle. On repart
      // des bytes déjà sauvegardés (document figé) plutôt que du PDFDocument
      // encore "vivant" : l'embarquer directement produit un PDF corrompu
      // (xref invalides, polices/XObjects introuvables).
      const filledDoc = await PDFDocument.load(filledBytes)
      const outDoc = await PDFDocument.create()
      const [embedded] = await outDoc.embedPdf(filledDoc, [0])
      const outPage = outDoc.addPage(PAGE_SIZE)
      // Le badge occupe le quart supérieur-gauche de la page source (x:[0,297.6],
      // y:[420.96,841.92]) : embedPdf embarque toute la MediaBox (pas de crop),
      // donc à l'échelle x2 il faut redescendre l'origine de -PAGE_SIZE[1] pour
      // ramener ce quart dans les limites de la nouvelle page pleine.
      outPage.drawPage(embedded, { x: 0, y: -PAGE_SIZE[1], xScale: 2, yScale: 2 })
      return await outDoc.save()
    }

    return filledBytes
  } catch (e) {
    console.error('Erreur génération badge PDF:', e)
    return null
  }
}

function drawImageCover(page: PDFPage, image: PDFImage, rect: Rect) {
  const scale = Math.max(rect.width / image.width, rect.height / image.height)
  const drawWidth = image.width * scale
  const drawHeight = image.height * scale
  const { x: rx, y: ry, width: rw, height: rh } = rect

  page.pushOperators(
    pushGraphicsState(),
    moveTo(rx, ry),
    lineTo(rx + rw, ry),
    lineTo(rx + rw, ry + rh),
    lineTo(rx, ry + rh),
    closePath(),
    clip(),
    endPath()
  )
  page.drawImage(image, {
    x: rx - (drawWidth - rw) / 2,
    y: ry - (drawHeight - rh) / 2,
    width: drawWidth,
    height: drawHeight,
  })
  page.pushOperators(popGraphicsState())
}
