import 'server-only'

// Filet de sécurité si NEXT_PUBLIC_SITE_URL n'est pas configurée côté Vercel :
// sans ça, les liens dans les e-mails (ex. bouton "Traiter cette demande")
// deviennent relatifs et ne fonctionnent pas dans un client mail.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://accred-psi.vercel.app'
