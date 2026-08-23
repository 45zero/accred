'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Plus } from 'lucide-react'
import { addFunction, toggleFunctionActive, addCompetition, toggleCompetitionActive } from '@/lib/actions/admin-settings'

const NAVY = '#0d1b3e'

type Item = { id: string; name: string; isActive: boolean }

export default function ParametresBoard({ functions, competitions }: { functions: Item[]; competitions: Item[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
      <EditableList
        title="Fonctions"
        items={functions}
        onAdd={addFunction}
        onToggle={toggleFunctionActive}
        placeholder="Ex : Journaliste"
      />
      <EditableList
        title="Compétitions"
        items={competitions}
        onAdd={addCompetition}
        onToggle={toggleCompetitionActive}
        placeholder="Ex : Coupe de France"
      />
    </div>
  )
}

function EditableList({ title, items, onAdd, onToggle, placeholder }: {
  title: string
  items: Item[]
  onAdd: (name: string) => Promise<{ error?: string }>
  onToggle: (id: string, isActive: boolean) => Promise<void>
  placeholder: string
}) {
  const router = useRouter()
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleAdd() {
    if (!value.trim()) return
    setSubmitting(true)
    setError('')
    const result = await onAdd(value)
    if (result.error) setError(result.error)
    else setValue('')
    router.refresh()
    setSubmitting(false)
  }

  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
      <h3 style={{ fontSize: 15, fontWeight: 900, color: NAVY, margin: '0 0 14px' }}>{title}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
        {items.map(item => (
          <label key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: item.isActive ? NAVY : '#aaa', cursor: 'pointer' }}>
            <input type="checkbox" checked={item.isActive} onChange={e => { onToggle(item.id, e.target.checked); router.refresh() }} />
            {item.name}
          </label>
        ))}
        {items.length === 0 && <p style={{ fontSize: 13, color: '#999' }}>Aucun élément.</p>}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input value={value} onChange={e => setValue(e.target.value)} placeholder={placeholder}
          onKeyDown={e => e.key === 'Enter' && handleAdd()}
          style={{ flex: 1, boxSizing: 'border-box', border: '1.5px solid #e0e0e0', borderRadius: 8, padding: '8px 12px', fontSize: 13, fontFamily: 'inherit' }} />
        <button onClick={handleAdd} disabled={submitting} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36,
          background: NAVY, color: '#fff', border: 'none', borderRadius: 8, cursor: submitting ? 'wait' : 'pointer', flexShrink: 0,
        }}>
          <Plus size={16} />
        </button>
      </div>
      {error && <p style={{ color: '#DC2626', fontSize: 12, marginTop: 8 }}>{error}</p>}
      <p style={{ fontSize: 11, color: '#999', marginTop: 10 }}>Décocher pour retirer du formulaire sans supprimer l&apos;historique des demandes.</p>
    </div>
  )
}
