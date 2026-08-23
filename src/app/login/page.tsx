'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

const FONT = "'Saira Condensed', sans-serif"
const NAVY = '#0d1b3e'
const RED = '#DC2626'

const inputStyle: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box', border: '1.5px solid #e0e0e0', borderRadius: 10,
  padding: '14px 16px', fontSize: 15, fontFamily: FONT, color: NAVY, outline: 'none', background: '#fff',
}

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit() {
    setError('')
    setSubmitting(true)
    const { error: signInErr } = await supabase.auth.signInWithPassword({ email: email.trim(), password })
    if (signInErr) {
      setError('Identifiants invalides.')
      setSubmitting(false)
      return
    }
    router.push('/admin')
    router.refresh()
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT, padding: 24 }}>
      <div style={{ background: '#fff', borderRadius: 16, padding: 40, maxWidth: 380, width: '100%', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
        <h1 style={{ fontSize: 24, fontWeight: 900, color: NAVY, marginBottom: 4 }}>ADMIN ACCRÉDITATIONS</h1>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 28 }}>Ligue Grand Est de Football</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 700, color: NAVY, display: 'block', marginBottom: 6 }}>E-mail</label>
            <input style={inputStyle} type="email" value={email} onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
          </div>
          <div>
            <label style={{ fontSize: 12, fontWeight: 700, color: NAVY, display: 'block', marginBottom: 6 }}>Mot de passe</label>
            <input style={inputStyle} type="password" value={password} onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
          </div>

          {error && (
            <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 8, padding: '10px 14px', color: RED, fontSize: 13 }}>
              {error}
            </div>
          )}

          <button onClick={handleSubmit} disabled={submitting} style={{
            background: submitting ? '#888' : NAVY, color: '#fff', border: 'none', borderRadius: 10,
            padding: '14px 0', fontSize: 15, fontWeight: 800, fontFamily: FONT, cursor: submitting ? 'wait' : 'pointer',
          }}>
            {submitting ? 'Connexion...' : 'SE CONNECTER'}
          </button>
        </div>
      </div>
    </div>
  )
}
