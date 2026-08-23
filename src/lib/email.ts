import 'server-only'

const FROM = 'Accréditation LGEF <noreply@lgef.fr>'

export async function sendResendEmail(params: {
  to: string
  subject: string
  html: string
  attachments?: { filename: string; content: string }[] // content en base64
}): Promise<{ id: string } | null> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return null // pas configuré en local : on n'empêche pas l'action pour autant

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: params.to,
        subject: params.subject,
        html: params.html,
        ...(params.attachments ? { attachments: params.attachments } : {}),
      }),
    })
    if (!res.ok) {
      console.error('Erreur Resend:', await res.text())
      return null
    }
    const data = await res.json()
    return typeof data?.id === 'string' ? { id: data.id } : null
  } catch (e) {
    console.error('Erreur envoi email:', e)
    return null
  }
}

export function emailShell(title: string, bodyHtml: string) {
  return `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px;">
      <div style="background: #0d1b3e; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
        <p style="color: #fff; font-size: 15px; font-weight: 700; letter-spacing: 1px; margin: 0;">LIGUE GRAND EST DE FOOTBALL</p>
        <p style="color: #DC2626; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin: 4px 0 0;">Accréditation média</p>
      </div>
      <div style="background: #fff; padding: 32px 24px; border-radius: 0 0 12px 12px; border: 1px solid #eee;">
        <h2 style="color: #0d1b3e; font-size: 18px; margin: 0 0 16px;">${title}</h2>
        ${bodyHtml}
      </div>
    </div>
  `
}

export function emailButton(href: string, label: string) {
  return `
    <div style="text-align: center; margin: 28px 0;">
      <a href="${href}" style="background: #DC2626; color: #fff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 700; font-size: 14px; display: inline-block;">
        ${label}
      </a>
    </div>
  `
}
