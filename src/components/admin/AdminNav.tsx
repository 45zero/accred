'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { LogOut } from 'lucide-react'

const NAVY = '#0d1b3e'

export default function AdminNav({ email, role }: { email: string; role: 'super_admin' | 'manager' }) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  const links = [
    { href: '/admin', label: 'Demandes' },
    { href: '/admin/parametres', label: 'Fonctions & Compétitions' },
    ...(role === 'super_admin' ? [{ href: '/admin/gestionnaires', label: 'Gestionnaires' }] : []),
  ]

  async function handleLogout() {
    await supabase.auth.signOut({ scope: 'local' })
    router.push('/login')
  }

  return (
    <div style={{ background: NAVY, padding: '0 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <span style={{ color: '#fff', fontWeight: 900, fontSize: 16, letterSpacing: 0.5 }}>ACCRÉDITATIONS LGEF</span>
          <nav style={{ display: 'flex', gap: 4 }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                color: pathname === l.href ? '#fff' : 'rgba(255,255,255,0.6)',
                background: pathname === l.href ? 'rgba(255,255,255,0.12)' : 'transparent',
                textDecoration: 'none', fontSize: 14, fontWeight: 700, padding: '8px 14px', borderRadius: 8,
              }}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>{email}</span>
          <button onClick={handleLogout} style={{
            display: 'flex', alignItems: 'center', gap: 6, background: 'transparent', border: 'none',
            color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: 13, fontFamily: 'inherit',
          }}>
            <LogOut size={15} /> Déconnexion
          </button>
        </div>
      </div>
    </div>
  )
}
