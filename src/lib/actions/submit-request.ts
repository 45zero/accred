'use server'

import { prisma } from '@/lib/prisma'
import { sendResendEmail, emailShell } from '@/lib/email'

export type SubmitAccredRequestInput = {
  firstName: string
  lastName: string
  email: string
  phone: string
  organization: string
  functionId: string
  competitionId: string
  matchName: string
  photoUrl: string
}

export async function submitAccredRequest(input: SubmitAccredRequestInput): Promise<{ id: string } | { error: string }> {
  const firstName = input.firstName.trim()
  const lastName = input.lastName.trim()
  const email = input.email.trim()
  const organization = input.organization.trim()
  const matchName = input.matchName.trim()

  if (!firstName || !lastName || !email || !organization || !input.functionId || !input.competitionId || !matchName || !input.photoUrl) {
    return { error: 'Champs requis manquants.' }
  }

  const request = await prisma.accred_requests.create({
    data: {
      first_name: firstName,
      last_name: lastName,
      email,
      phone: input.phone.trim() || null,
      organization,
      function_id: input.functionId,
      competition_id: input.competitionId,
      match_name: matchName,
      photo_url: input.photoUrl,
    },
  })

  await notifyAdminsOfNewRequest(request.id).catch(e => console.error('Erreur notification admins:', e))

  return { id: request.id }
}

async function notifyAdminsOfNewRequest(requestId: string) {
  const [request, admins] = await Promise.all([
    prisma.accred_requests.findUnique({
      where: { id: requestId },
      include: { competition: true, function: true },
    }),
    prisma.accred_admins.findMany({ select: { email: true } }),
  ])
  if (!request || admins.length === 0) return

  const html = emailShell('Nouvelle demande d\'accréditation', `
    <p style="color:#333;font-size:14px;line-height:1.6;">
      <strong>${request.first_name} ${request.last_name}</strong> (${request.organization}) demande une accréditation
      ${request.function.name.toLowerCase()} pour <strong>${request.competition.name}</strong> — ${request.match_name}.
    </p>
    <p style="color:#666;font-size:13px;">Connectez-vous à l'admin accréditations pour traiter cette demande.</p>
  `)

  await Promise.all(
    admins.map(a => sendResendEmail({ to: a.email, subject: 'Nouvelle demande d\'accréditation média', html }))
  )
}
