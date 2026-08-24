'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, X, FileText, Search, Archive, ArchiveRestore, Trash2 } from 'lucide-react'
import { approveRequest, rejectRequest, setRequestArchived, deleteRequest } from '@/lib/actions/admin-requests'

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
  accreditationType: 'ponctuelle' | 'permanente'
  competitionName: string | null
  matchName: string | null
  message: string | null
  photoUrl: string
  status: string
  archived: boolean
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
  { key: 'archived', label: 'Archivées' },
] as const

const TYPE_FILTERS = [
  { key: 'all', label: 'Toutes' },
  { key: 'ponctuelle', label: 'Ponctuelle' },
  { key: 'permanente', label: 'Permanente' },
] as const

export default function RequestsBoard({ requests }: { requests: RequestItem[] }) {
  const [tab, setTab] = useState<(typeof TABS)[number]['key']>('pending')
  const [typeFilter, setTypeFilter] = useState<(typeof TYPE_FILTERS)[number]['key']>('all')
  const [search, setSearch] = useState('')

  const byTab = tab === 'archived'
    ? requests.filter(r => r.archived)
    : requests.filter(r => r.status === tab && !r.archived)

  const q = search.trim().toLowerCase()
  const filtered = byTab
    .filter(r => typeFilter === 'all' || r.accreditationType === typeFilter)
    .filter(r => !q || `${r.firstName} ${r.lastName} ${r.organization} ${r.email}`.toLowerCase().includes(q))

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        {TABS.map(t => {
          const count = t.key === 'archived' ? requests.filter(r => r.archived).length : requests.filter(r => r.status === t.key && !r.archived).length
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

      <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {TYPE_FILTERS.map(t => (
            <button key={t.key} onClick={() => setTypeFilter(t.key)} style={{
              background: typeFilter === t.key ? '#eef1f8' : '#fff', color: NAVY,
              border: '1.5px solid ' + (typeFilter === t.key ? NAVY : '#e0e0e0'), borderRadius: 8,
              padding: '6px 12px', fontSize: 12.5, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
            }}>
              {t.label}
            </button>
          ))}
        </div>
        <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
          <Search size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
          <input
            value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher (nom, média, e-mail)"
            style={{ width: '100%', boxSizing: 'border-box', border: '1.5px solid #e0e0e0', borderRadius: 8, padding: '8px 12px 8px 34px', fontSize: 13, fontFamily: 'inherit' }}
          />
        </div>
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

  const eventLine = useMemo(() => {
    if (request.accreditationType === 'permanente') return 'Accréditation permanente (toutes compétitions)'
    return `${request.competitionName} — ${request.matchName}`
  }, [request])

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

  async function handleToggleArchive() {
    await setRequestArchived(request.id, !request.archived)
    router.refresh()
  }

  async function handleDelete() {
    if (!confirm(`Supprimer définitivement la demande de ${request.firstName} ${request.lastName} ? Cette action est irréversible.`)) return
    await deleteRequest(request.id)
    router.refresh()
  }

  return (
    <div id={`request-${request.id}`} style={{ background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 2px 10px rgba(0,0,0,0.04)', scrollMarginTop: 20 }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <img src={request.photoUrl} alt="" style={{ width: 64, height: 64, borderRadius: 10, objectFit: 'cover', background: '#eee', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <p style={{ fontWeight: 800, color: NAVY, fontSize: 16, margin: 0 }}>{request.firstName} {request.lastName}</p>
          <p style={{ color: '#666', fontSize: 13, margin: '2px 0 0' }}>{request.organization} · {request.functionName}</p>
          <p style={{ color: '#666', fontSize: 13, margin: '2px 0 0' }}>{eventLine}</p>
          <p style={{ color: '#999', fontSize: 12, margin: '2px 0 0' }}>{request.email}{request.phone ? ` · ${request.phone}` : ''}</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, flexShrink: 0 }}>
          {request.status === 'pending' && (
            <div style={{ display: 'flex', gap: 8 }}>
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
            <span style={{
              fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 999,
              background: request.status === 'approved' ? '#dcfce7' : '#fef2f2',
              color: request.status === 'approved' ? '#16a34a' : RED,
            }}>
              {request.status === 'approved' ? 'Acceptée' : 'Refusée'}
            </span>
          )}

          {request.badgePdfUrl && (
            <a href={request.badgePdfUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 4, color: NAVY, fontSize: 12, textDecoration: 'none' }}>
              <FileText size={13} /> Badge
            </a>
          )}

          <div style={{ display: 'flex', gap: 4 }}>
            <button onClick={handleToggleArchive} title={request.archived ? 'Désarchiver' : 'Archiver'} style={{
              background: 'transparent', border: 'none', color: '#888', cursor: 'pointer', padding: 4,
            }}>
              {request.archived ? <ArchiveRestore size={15} /> : <Archive size={15} />}
            </button>
            <button onClick={handleDelete} title="Supprimer" style={{
              background: 'transparent', border: 'none', color: RED, cursor: 'pointer', padding: 4,
            }}>
              <Trash2 size={15} />
            </button>
          </div>
        </div>
      </div>

      {request.message && (
        <p style={{ marginTop: 12, fontSize: 12.5, color: NAVY, background: '#eef1f8', borderRadius: 8, padding: '8px 12px' }}>
          <strong>Message du demandeur :</strong> {request.message}
        </p>
      )}

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
