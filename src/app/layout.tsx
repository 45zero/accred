import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Accréditation média — LGEF',
  description: 'Demande d\'accréditation média — Ligue Grand Est de Football',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
