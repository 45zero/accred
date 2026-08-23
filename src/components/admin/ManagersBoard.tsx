'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
import { addManager, removeManager } from '@/lib/actions/admin-managers'

const NAVY = '#0d1b3e'
const RED = '#DC2626'

type Admin = { id: string; email: string; role: 'super_admin' | 'manager' }

export default function ManagersBoard({ admins, currentEmail }: { admins: Admin[]; currentEmail: string }) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [role, setRole] = useState<'manager' | 'super_admin'>('manager')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleAdd() {
    if (!email.trim()) return
    setSubmitting(true)
    setError('')
    const result = await addManager(email, role)
    if (result.error) setError(result.error)
    else setEmail('')
    router.refresh()
    setSubmitting(false)
  }

  async function handleRemove(id: string) {
    const result = await removeManager(id)
    if (result.error) setError(result.error)
    router.refresh()
  }

  return (
    <div style={{ maxWidth: 520 }}>
      <div style={{ background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
        <h3 style={{ fontSize: 15, fontWeight: 900, color: NAVY, margin: '0 0 4px' }}>Gestionnaires accréditations</h3>
        <p style={{ fontSize: 12, color: '#999', margin: '0 0 16px' }}>
          Comptes autorisés à traiter les demandes — mêmes identifiants Supabase que le reste de la plateforme LGEF.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18 }}>
          {admins.map(a => (
            <div key={a.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', background: '#f8fafc', borderRadius: 8 }}>
              <div>
                <span style={{ fontSize: 13.5, color: NAVY, fontWeight: a.email === currentEmail ? 800 : 500 }}>{a.email}</span>
                <span style={{ marginLeft: 8, fontSize: 11, fontWeight: 700, color: a.role === 'super_admin' ? '#b45309' : '#666', textTransform: 'uppercase' }}>
                  {a.role === 'super_admin' ? 'Super admin' : 'Gestionnaire'}
                </span>
              </div>
              <button onClick={() => handleRemove(a.id)} style={{ background: 'transparent', border: 'none', color: RED, cursor: 'pointer', padding: 4 }}>
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email@lgef.fff.fr"
            onKeyDown={e => e.key === 'Enter' && handleAdd()}
            style={{ flex: 1, boxSizing: 'border-box', border: '1.5px solid #e0e0e0', borderRadius: 8, padding: '8px 12px', fontSize: 13, fontFamily: 'inherit' }} />
          <select value={role} onChange={e => setRole(e.target.value as 'manager' | 'super_admin')}
            style={{ border: '1.5px solid #e0e0e0', borderRadius: 8, padding: '8px 10px', fontSize: 13, fontFamily: 'inherit', cursor: 'pointer' }}>
            <option value="manager">Gestionnaire</option>
            <option value="super_admin">Super admin</option>
          </select>
          <button onClick={handleAdd} disabled={submitting} style={{
            background: NAVY, color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px',
            fontSize: 13, fontWeight: 700, cursor: submitting ? 'wait' : 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap',
          }}>
            Ajouter
          </button>
        </div>
        {error && <p style={{ color: RED, fontSize: 12, marginTop: 8 }}>{error}</p>}
      </div>
    </div>
  )
}
