import 'server-only'
import fs from 'fs/promises'
import path from 'path'
import {
  PDFDocument,
  rgb,
  pushGraphicsState,
  popGraphicsState,
  moveTo,
  lineTo,
  closePath,
  clip,
  endPath,
} from 'pdf-lib'

const TEMPLATE_PATH = path.join(process.cwd(), 'public/templates/badge-template.pdf')

// Coordonnées relevées sur badge-template.pdf (page 595.2 x 841.92 pt) :
// Nom1/Prenom1/Fonction1/Match1 sont des champs AcroForm existants (position
// gérée par le PDF lui-même). Photo et pastilles n'ont pas de champ/objet
// adressable : coordonnées extraites manuellement (rect du widget bouton pour
// la photo, bounding box de couleur pour les 3 pastilles).
const PHOTO_RECT = { x: 70.98, y: 237.6, width: 176.62, height: 203.48 }

const ZONE_RECTS = {
  terrain: { x: 37, y: 142.9, width: 259, height: 47 },
  tribune: { x: 310, y: 142.9, width: 259, height: 47 },
  vestiaires: { x: 37, y: 82.9, width: 259, height: 46 },
} as const

export type MediaBadgeParams = {
  firstName: string
  lastName: string
  role: string
  matchName: string
  photoBytes: Uint8Array
  photoContentType: string
  zones: { terrain: boolean; tribune: boolean; vestiaires: boolean }
}

/** Ne throw jamais : renvoie null si le template est introuvable ou si la génération échoue (l'appelant envoie l'email sans pièce jointe). */
export async function generateMediaBadgePdf(params: MediaBadgeParams): Promise<Uint8Array | null> {
  let templateBytes: Buffer
  try {
    templateBytes = await fs.readFile(TEMPLATE_PATH)
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
    form.getTextField('Match1').setText(params.matchName)

    // Le champ photo est un bouton "image field" Acrobat, pas exploitable
    // simplement via pdf-lib : on le retire et on dessine la photo nous-mêmes
    // au même endroit.
    try {
      form.removeField(form.getField('Image1_af_image'))
    } catch {}

    form.flatten()

    const image = params.photoContentType === 'image/png'
      ? await pdf.embedPng(params.photoBytes)
      : await pdf.embedJpg(params.photoBytes)

    // Cover-fit centré dans le rectangle photo, découpé pour ne jamais déborder.
    const scale = Math.max(PHOTO_RECT.width / image.width, PHOTO_RECT.height / image.height)
    const drawWidth = image.width * scale
    const drawHeight = image.height * scale
    const { x: rx, y: ry, width: rw, height: rh } = PHOTO_RECT

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

    // Pastilles non accordées : passées en gris pour matérialiser l'absence d'accès.
    const grayOut = (rect: { x: number; y: number; width: number; height: number }) => {
      page.drawRectangle({ ...rect, color: rgb(0.5, 0.5, 0.5), opacity: 0.88 })
    }
    if (!params.zones.terrain) grayOut(ZONE_RECTS.terrain)
    if (!params.zones.tribune) grayOut(ZONE_RECTS.tribune)
    if (!params.zones.vestiaires) grayOut(ZONE_RECTS.vestiaires)

    return await pdf.save()
  } catch (e) {
    console.error('Erreur génération badge PDF:', e)
    return null
  }
}
