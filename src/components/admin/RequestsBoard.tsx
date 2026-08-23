'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, X, FileText } from 'lucide-react'
import { approveRequest, rejectRequest } from '@/lib/actions/admin-requests'

const NAVY = '#0d1b3e'
const RED = '#DC2626'

export type RequestItem = {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string | null
  organization: string
  functionName: string
  competitionName: string
  matchName: string
  photoUrl: string
  status: string
  responseMessage: string | null
  zoneTerrain: boolean
  zoneTribune: boolean
  zoneVestiaires: boolean
  badgePdfUrl: string | null
  createdAt: string
}

const TABS = [
  { key: 'pending', label: 'En cours' },
  { key: 'approved', label: 'Acceptées' },
  { key: 'rejected', label: 'Refusées' },
] as const

export default function RequestsBoard({ requests }: { requests: RequestItem[] }) {
  const [tab, setTab] = useState<(typeof TABS)[number]['key']>('pending')
  const filtered = requests.filter(r => r.status === tab)

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        {TABS.map(t => {
          const count = requests.filter(r => r.status === t.key).length
          return (
            <button key={t.key} onClick={() => setTab(t.key)} style={{
              background: tab === t.key ? NAVY : '#fff', color: tab === t.key ? '#fff' : NAVY,
              border: '1.5px solid ' + (tab === t.key ? NAVY : '#e0e0e0'), borderRadius: 10,
              padding: '10px 18px', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
            }}>
              {t.label} ({count})
            </button>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <p style={{ color: '#999', fontSize: 14, textAlign: 'center', padding: '48px 0' }}>Aucune demande ici.</p>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {filtered.map(r => <RequestCard key={r.id} request={r} />)}
      </div>
    </div>
  )
}

function RequestCard({ request }: { request: RequestItem }) {
  const router = useRouter()
  const [panel, setPanel] = useState<'accept' | 'reject' | null>(null)
  const [zones, setZones] = useState({ terrain: false, tribune: false, vestiaires: false })
  const [message, setMessage] = useState('')
  const [motif, setMotif] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleApprove() {
    setSubmitting(true)
    setError('')
    try {
      await approveRequest({
        requestId: request.id,
        zoneTerrain: zones.terrain,
        zoneTribune: zones.tribune,
        zoneVestiaires: zones.vestiaires,
        message,
      })
      router.refresh()
      setPanel(null)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Erreur')
    }
    setSubmitting(false)
  }

  async function handleReject() {
    if (!motif.trim()) { setError('Le motif est requis.'); return }
    setSubmitting(true)
    setError('')
    try {
      await rejectRequest({ requestId: request.id, motif })
      router.refresh()
      setPanel(null)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Erreur')
    }
    setSubmitting(false)
  }

  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <img src={request.photoUrl} alt="" style={{ width: 64, height: 64, borderRadius: 10, objectFit: 'cover', background: '#eee', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <p style={{ fontWeight: 800, color: NAVY, fontSize: 16, margin: 0 }}>{request.firstName} {request.lastName}</p>
          <p style={{ color: '#666', fontSize: 13, margin: '2px 0 0' }}>{request.organization} · {request.functionName}</p>
          <p style={{ color: '#666', fontSize: 13, margin: '2px 0 0' }}>{request.competitionName} — {request.matchName}</p>
          <p style={{ color: '#999', fontSize: 12, margin: '2px 0 0' }}>{request.email}{request.phone ? ` · ${request.phone}` : ''}</p>
        </div>

        {request.status === 'pending' && (
          <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
            <button onClick={() => setPanel(panel === 'accept' ? null : 'accept')} style={{
              display: 'flex', alignItems: 'center', gap: 6, background: '#16a34a', color: '#fff', border: 'none',
              borderRadius: 8, padding: '8px 14px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
            }}>
              <Check size={15} /> Accepter
            </button>
            <button onClick={() => setPanel(panel === 'reject' ? null : 'reject')} style={{
              display: 'flex', alignItems: 'center', gap: 6, background: RED, color: '#fff', border: 'none',
              borderRadius: 8, padding: '8px 14px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
            }}>
              <X size={15} /> Refuser
            </button>
          </div>
        )}

        {request.status !== 'pending' && (
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <span style={{
              fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 999,
              background: request.status === 'approved' ? '#dcfce7' : '#fef2f2',
              color: request.status === 'approved' ? '#16a34a' : RED,
            }}>
              {request.status === 'approved' ? 'Acceptée' : 'Refusée'}
            </span>
            {request.badgePdfUrl && (
              <a href={request.badgePdfUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 8, color: NAVY, fontSize: 12, textDecoration: 'none' }}>
                <FileText size={13} /> Badge
              </a>
            )}
          </div>
        )}
      </div>

      {request.status !== 'pending' && request.responseMessage && (
        <p style={{ marginTop: 12, fontSize: 12.5, color: '#888', background: '#f8fafc', borderRadius: 8, padding: '8px 12px' }}>
          {request.responseMessage}
        </p>
      )}

      {panel === 'accept' && (
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #eee' }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: NAVY, marginBottom: 10 }}>Zones accordées</p>
          <div style={{ display: 'flex', gap: 16, marginBottom: 14 }}>
            {(['terrain', 'tribune', 'vestiaires'] as const).map(z => (
              <label key={z} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: NAVY, cursor: 'pointer', textTransform: 'capitalize' }}>
                <input type="checkbox" checked={zones[z]} onChange={e => setZones({ ...zones, [z]: e.target.checked })} />
                {z === 'vestiaires' ? 'Vestiaires joueurs' : z}
              </label>
            ))}
          </div>
          <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Message optionnel au demandeur"
            rows={2} style={{ width: '100%', boxSizing: 'border-box', border: '1.5px solid #e0e0e0', borderRadius: 8, padding: 10, fontSize: 13, fontFamily: 'inherit', marginBottom: 10, resize: 'vertical' }} />
          {error && <p style={{ color: RED, fontSize: 12, marginBottom: 10 }}>{error}</p>}
          <button onClick={handleApprove} disabled={submitting} style={{
            background: submitting ? '#888' : '#16a34a', color: '#fff', border: 'none', borderRadius: 8,
            padding: '10px 18px', fontSize: 13, fontWeight: 700, cursor: submitting ? 'wait' : 'pointer', fontFamily: 'inherit',
          }}>
            {submitting ? 'Génération du badge...' : 'Confirmer l\'acceptation'}
          </button>
        </div>
      )}

      {panel === 'reject' && (
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #eee' }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: NAVY, marginBottom: 10 }}>Motif du refus *</p>
          <textarea value={motif} onChange={e => setMotif(e.target.value)} rows={2}
            style={{ width: '100%', boxSizing: 'border-box', border: '1.5px solid #e0e0e0', borderRadius: 8, padding: 10, fontSize: 13, fontFamily: 'inherit', marginBottom: 10, resize: 'vertical' }} />
          {error && <p style={{ color: RED, fontSize: 12, marginBottom: 10 }}>{error}</p>}
          <button onClick={handleReject} disabled={submitting} style={{
            background: submitting ? '#888' : RED, color: '#fff', border: 'none', borderRadius: 8,
            padding: '10px 18px', fontSize: 13, fontWeight: 700, cursor: submitting ? 'wait' : 'pointer', fontFamily: 'inherit',
          }}>
            {submitting ? 'Envoi...' : 'Confirmer le refus'}
          </button>
        </div>
      )}
    </div>
  )
}
