'use client'

import { useState } from 'react'
import { Camera, Info, AlertTriangle, User, CalendarDays, ShieldCheck, Send, UserCircle2 } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { submitAccredRequest } from '@/lib/actions/submit-request'

const FONT = "'Saira Condensed', sans-serif"
const NAVY = '#0d1b3e'
const RED = '#DC2626'

const inputStyle: React.CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  border: '1.5px solid #e0e0e0',
  borderRadius: 10,
  padding: '14px 16px',
  fontSize: 15,
  fontFamily: FONT,
  color: NAVY,
  outline: 'none',
  background: '#fff',
}

const labelStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  color: NAVY,
  display: 'block',
  marginBottom: 8,
}

type Option = { id: string; name: string }

export default function DemandeForm({ functions, competitions }: { functions: Option[]; competitions: Option[] }) {
  const supabase = createClient()

  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [organization, setOrganization] = useState('')
  const [functionId, setFunctionId] = useState('')
  const [accreditationType, setAccreditationType] = useState<'ponctuelle' | 'permanente'>('ponctuelle')
  const [competitionId, setCompetitionId] = useState('')
  const [matchName, setMatchName] = useState('')
  const [message, setMessage] = useState('')

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handlePhotoChange(file: File | null) {
    setPhotoFile(file)
    setPhotoPreview(file ? URL.createObjectURL(file) : null)
  }

  async function handleSubmit() {
    const isPonctuelle = accreditationType === 'ponctuelle'
    if (!photoFile || !lastName.trim() || !firstName.trim() || !email.trim() || !organization.trim() || !functionId
      || (isPonctuelle && (!competitionId || !matchName.trim()))) {
      setError('Merci de compléter tous les champs obligatoires.')
      return
    }
    setError('')
    setSubmitting(true)

    const ext = photoFile.name.split('.').pop() || 'jpg'
    const path = `photos/${crypto.randomUUID()}.${ext}`
    const { error: uploadErr } = await supabase.storage.from('accreditations').upload(path, photoFile)
    if (uploadErr) {
      setError("Erreur lors de l'envoi de la photo : " + uploadErr.message)
      setSubmitting(false)
      return
    }
    const { data: pub } = supabase.storage.from('accreditations').getPublicUrl(path)

    const result = await submitAccredRequest({
      firstName,
      lastName,
      email,
      phone,
      organization,
      functionId,
      accreditationType,
      competitionId: isPonctuelle ? competitionId : undefined,
      matchName: isPonctuelle ? matchName : undefined,
      message,
      photoUrl: pub.publicUrl,
    })

    if ('error' in result) {
      setError(result.error)
      setSubmitting(false)
      return
    }

    setSubmitted(true)
    setSubmitting(false)
  }

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', background: '#f0f2f8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT, padding: 24 }}>
        <div style={{ background: '#fff', borderRadius: 16, padding: 48, maxWidth: 480, textAlign: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <Send size={28} color="#16a34a" />
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 900, color: NAVY, marginBottom: 12 }}>DEMANDE ENVOYÉE !</h2>
          <p style={{ color: '#666', fontSize: 15, lineHeight: 1.6 }}>
            Votre demande d&apos;accréditation a été transmise au service communication de la LGEF. Vous recevrez une réponse par e-mail.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f8', fontFamily: FONT }}>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 0 64px' }}>

        {/* Bandeau */}
        <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #142a5c 100%)`, padding: '40px 32px', display: 'flex', alignItems: 'center', gap: 20, position: 'relative' }}>
          <a href="/admin" title="Espace admin" style={{
            position: 'absolute', top: 16, right: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)',
          }}>
            <UserCircle2 size={22} />
          </a>
          <img src="/logo_lgef.png" alt="LGEF" style={{ height: 72, objectFit: 'contain' }} onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
          <div>
            <h1 style={{ fontSize: 32, fontWeight: 900, color: '#fff', lineHeight: 1.05, margin: 0, letterSpacing: 0.5 }}>
              DEMANDE<br />D&apos;ACCRÉDITATION
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '8px 0 0' }}>Ligue Grand Est de Football</p>
          </div>
        </div>

        <div style={{ background: '#fff', margin: '0 24px', borderRadius: '0 0 16px 16px', padding: 32, boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
            <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: '50%', background: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Info size={20} color="#fff" />
            </div>
            <div>
              <p style={{ fontSize: 16, fontWeight: 700, color: NAVY, margin: '0 0 6px' }}>
                Vous souhaitez couvrir une rencontre organisée par la Ligue Grand Est de Football ?
              </p>
              <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6, margin: 0 }}>
                Merci de compléter le formulaire ci-dessous. Votre demande sera étudiée par notre service communication.
                Une réponse vous sera adressée par e-mail dans les meilleurs délais.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 10, padding: '14px 16px', marginBottom: 32 }}>
            <AlertTriangle size={20} color={RED} style={{ flexShrink: 0 }} />
            <p style={{ fontSize: 13.5, color: RED, lineHeight: 1.5, margin: 0 }}>
              Une demande ne vaut pas acceptation. L&apos;accréditation n&apos;est valable qu&apos;après confirmation officielle.
            </p>
          </div>

          {/* Informations du demandeur */}
          <SectionTitle icon={<User size={18} color={NAVY} />}>INFORMATIONS DU DEMANDEUR</SectionTitle>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Photo *</label>
            <label
              htmlFor="photo-input"
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: 148, height: 148, borderRadius: 12, border: '2px dashed #cbd5e1', cursor: 'pointer',
                background: photoPreview ? `#fff url(${photoPreview}) center/cover no-repeat` : '#f8fafc',
                color: '#64748b', textAlign: 'center', fontSize: 12, gap: 8,
              }}
            >
              {!photoPreview && (<><Camera size={26} /><span>Prendre une photo<br />ou importer un fichier</span></>)}
            </label>
            {/* Pas d'attribut `capture` : laisse le navigateur proposer "Prendre une photo" ET "Choisir un fichier".
                `display:none` empêche ce choix natif sur certains mobiles (surtout Safari iOS) : on masque
                visuellement l'input autrement, en le gardant techniquement présent/cliquable. */}
            <input id="photo-input" type="file" accept="image/*"
              style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}
              onChange={e => handlePhotoChange(e.target.files?.[0] ?? null)} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>Nom *</label>
              <input style={inputStyle} placeholder="Votre nom" value={lastName} onChange={e => setLastName(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Prénom *</label>
              <input style={inputStyle} placeholder="Votre prénom" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </div>
          </div>

          <FormRow label="E-mail *">
            <input style={inputStyle} type="email" placeholder="exemple@domaine.com" value={email} onChange={e => setEmail(e.target.value)} />
          </FormRow>

          <FormRow label="Téléphone">
            <input style={inputStyle} type="tel" placeholder="06 12 34 56 78" value={phone} onChange={e => setPhone(e.target.value)} />
          </FormRow>

          <FormRow label="Média / Société *">
            <input style={inputStyle} placeholder="Nom du média ou de la société" value={organization} onChange={e => setOrganization(e.target.value)} />
          </FormRow>

          <FormRow label="Fonction *" last>
            <select style={{ ...inputStyle, cursor: 'pointer' }} value={functionId} onChange={e => setFunctionId(e.target.value)}>
              <option value="">Sélectionnez votre fonction</option>
              {functions.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
            </select>
          </FormRow>

          {/* Événement concerné */}
          <SectionTitle icon={<CalendarDays size={18} color={NAVY} />}>ÉVÉNEMENT CONCERNÉ</SectionTitle>

          <FormRow label="Type d'accréditation *">
            <div style={{ display: 'flex', gap: 10 }}>
              {(['ponctuelle', 'permanente'] as const).map(t => (
                <label key={t} style={{
                  flex: 1, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
                  border: '1.5px solid ' + (accreditationType === t ? NAVY : '#e0e0e0'), borderRadius: 10,
                  padding: '12px 14px', background: accreditationType === t ? '#eef1f8' : '#fff',
                }}>
                  <input type="radio" name="accreditationType" checked={accreditationType === t} onChange={() => setAccreditationType(t)} />
                  <span style={{ fontSize: 14, color: NAVY, fontWeight: 600, textTransform: 'capitalize' }}>{t}</span>
                </label>
              ))}
            </div>
          </FormRow>

          {accreditationType === 'permanente' && (
            <div style={{ display: 'flex', gap: 12, background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 10, padding: '14px 16px', marginBottom: 20 }}>
              <AlertTriangle size={18} color="#92400e" style={{ flexShrink: 0 }} />
              <p style={{ fontSize: 13, color: '#92400e', lineHeight: 1.5, margin: 0 }}>
                Une demande d&apos;accréditation permanente signifie que vous êtes déjà en contact avec les instances de la Ligue Grand Est de Football.
                C&apos;est une demande spécifique, réservée à une collaboration déjà établie. Si ce n&apos;est pas votre cas, veuillez choisir l&apos;accréditation ponctuelle.
              </p>
            </div>
          )}

          {accreditationType === 'ponctuelle' && (
            <>
              <FormRow label="Compétition *">
                <select style={{ ...inputStyle, cursor: 'pointer' }} value={competitionId} onChange={e => setCompetitionId(e.target.value)}>
                  <option value="">Sélectionnez une compétition</option>
                  {competitions.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </FormRow>

              <FormRow label="Match *">
                <input style={inputStyle} placeholder="Ex : FC Metz - AS Nancy" value={matchName} onChange={e => setMatchName(e.target.value)} />
              </FormRow>
            </>
          )}

          <FormRow label="Message (optionnel)" last>
            <textarea
              value={message} onChange={e => setMessage(e.target.value)} rows={3}
              placeholder="Précisez votre situation si besoin (contact à la Ligue, contexte de la demande...)"
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </FormRow>

          {error && (
            <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 8, padding: '10px 14px', color: RED, fontSize: 13, marginBottom: 20 }}>
              {error}
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, paddingTop: 8, borderTop: '1px solid #eee' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, color: NAVY, textDecoration: 'none', fontSize: 13, marginTop: 20 }}>
              <ShieldCheck size={20} />
              <span>Charte média<br /><span style={{ color: '#999' }}>Conditions d&apos;accréditation</span></span>
            </a>
            <button
              onClick={handleSubmit}
              disabled={submitting}
              style={{
                marginTop: 20, display: 'flex', alignItems: 'center', gap: 10,
                background: submitting ? '#888' : RED, color: '#fff', border: 'none',
                borderRadius: 10, padding: '16px 28px', fontSize: 15, fontWeight: 800,
                fontFamily: FONT, cursor: submitting ? 'wait' : 'pointer', letterSpacing: 0.5, whiteSpace: 'nowrap',
              }}
            >
              <Send size={16} />
              {submitting ? 'Envoi en cours...' : 'ENVOYER MA DEMANDE'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionTitle({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '8px 0 20px' }}>
      <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#e6eaf3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {icon}
      </div>
      <h3 style={{ fontSize: 16, fontWeight: 900, color: NAVY, margin: 0, letterSpacing: 0.5 }}>{children}</h3>
    </div>
  )
}

function FormRow({ label, children, last }: { label: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div style={{ marginBottom: last ? 32 : 20 }}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  )
}
