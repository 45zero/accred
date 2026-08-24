'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/prisma'
import { createClient } from '@/lib/supabase/server'
import { requireAccredAdmin } from '@/lib/auth/require-accred-admin'
import { generateMediaBadgePdf } from '@/lib/mediaBadgePdf'
import { sendResendEmail, emailShell } from '@/lib/email'

type RequestWithRelations = Awaited<ReturnType<typeof prisma.accred_requests.findUniqueOrThrow<{
  where: { id: string }
  include: { function: true; competition: true }
}>>>

function eventLine(request: RequestWithRelations) {
  return request.accreditation_type === 'permanente'
    ? `${request.competition.name} (accréditation permanente)`
    : `${request.competition.name} — ${request.match_name}`
}

async function notifyOthersHandled(requestId: string, handledByEmail: string, outcome: string) {
  const [request, admins] = await Promise.all([
    prisma.accred_requests.findUnique({ where: { id: requestId }, include: { function: true, competition: true } }),
    prisma.accred_admins.findMany({ where: { email: { not: handledByEmail } }, select: { email: true } }),
  ])
  if (!request || admins.length === 0) return

  const html = emailShell('Demande traitée', `
    <p style="color:#333;font-size:14px;line-height:1.6;">
      La demande de <strong>${request.first_name} ${request.last_name}</strong> (${eventLine(request)})
      a été <strong>${outcome}</strong> par ${handledByEmail}. Aucune action supplémentaire n'est nécessaire.
    </p>
  `)

  await Promise.all(
    admins.map(a => sendResendEmail({ to: a.email, subject: `Demande d'accréditation ${outcome}`, html }))
  )
}

export async function approveRequest(input: {
  requestId: string
  zoneTerrain: boolean
  zoneTribune: boolean
  zoneVestiaires: boolean
  message: string
}) {
  const admin = await requireAccredAdmin()

  const request = await prisma.accred_requests.findUniqueOrThrow({
    where: { id: input.requestId },
    include: { function: true, competition: true },
  })

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? ''
  const verifyUrl = `${siteUrl}/verify/${request.id}`

  let badgeBytes: Uint8Array | null = null
  try {
    const photoRes = await fetch(request.photo_url)
    if (photoRes.ok) {
      const photoBytes = new Uint8Array(await photoRes.arrayBuffer())
      const photoContentType = photoRes.headers.get('content-type') || 'image/jpeg'
      badgeBytes = await generateMediaBadgePdf({
        accreditationType: request.accreditation_type as 'ponctuelle' | 'permanente',
        firstName: request.first_name,
        lastName: request.last_name,
        role: request.function.name,
        matchName: request.match_name ?? undefined,
        photoBytes,
        photoContentType,
        zones: { terrain: input.zoneTerrain, tribune: input.zoneTribune, vestiaires: input.zoneVestiaires },
        verifyUrl,
        fullPage: request.accreditation_type === 'permanente',
      })
    }
  } catch (e) {
    console.error('Erreur génération badge:', e)
  }

  let badgePdfUrl: string | null = null
  if (badgeBytes) {
    const supabase = await createClient()
    const path = `badges/${request.id}.pdf`
    const { error: upErr } = await supabase.storage
      .from('accreditations')
      .upload(path, Buffer.from(badgeBytes), { contentType: 'application/pdf', upsert: true })
    if (!upErr) {
      const { data: pub } = supabase.storage.from('accreditations').getPublicUrl(path)
      badgePdfUrl = pub.publicUrl
    } else {
      console.error('Erreur upload badge:', upErr.message)
    }
  }

  await prisma.accred_requests.update({
    where: { id: request.id },
    data: {
      status: 'approved',
      zone_terrain: input.zoneTerrain,
      zone_tribune: input.zoneTribune,
      zone_vestiaires: input.zoneVestiaires,
      response_message: input.message.trim() || null,
      reviewed_by: admin.userId,
      reviewed_at: new Date(),
      badge_pdf_url: badgePdfUrl,
    },
  })

  const html = emailShell('Accréditation confirmée', `
    <p style="color:#333;font-size:14px;line-height:1.6;">
      Bonjour ${request.first_name},<br /><br />
      Votre demande d'accréditation pour <strong>${eventLine(request)}</strong> est acceptée.
      ${badgeBytes ? "Votre badge est joint à cet e-mail." : "Votre badge vous sera transmis séparément."}
    </p>
    ${input.message.trim() ? `<p style="color:#666;font-size:13px;">${input.message.trim()}</p>` : ''}
  `)
  await sendResendEmail({
    to: request.email,
    subject: 'Votre accréditation média LGEF est confirmée',
    html,
    ...(badgeBytes ? { attachments: [{ filename: 'accreditation.pdf', content: Buffer.from(badgeBytes).toString('base64') }] } : {}),
  })

  await notifyOthersHandled(request.id, admin.email, 'acceptée').catch(e => console.error('Erreur notification:', e))

  revalidatePath('/admin')
}

export async function rejectRequest(input: { requestId: string; motif: string }) {
  const admin = await requireAccredAdmin()

  const request = await prisma.accred_requests.update({
    where: { id: input.requestId },
    data: {
      status: 'rejected',
      response_message: input.motif.trim(),
      reviewed_by: admin.userId,
      reviewed_at: new Date(),
    },
  })

  const html = emailShell('Demande non retenue', `
    <p style="color:#333;font-size:14px;line-height:1.6;">
      Bonjour ${request.first_name},<br /><br />
      Votre demande d'accréditation n'a pas pu être retenue.
    </p>
    <p style="color:#666;font-size:13px;">${input.motif.trim()}</p>
  `)
  await sendResendEmail({ to: request.email, subject: 'Votre demande d\'accréditation média', html })

  await notifyOthersHandled(request.id, admin.email, 'refusée').catch(e => console.error('Erreur notification:', e))

  revalidatePath('/admin')
}
