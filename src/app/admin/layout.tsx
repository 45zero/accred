import { redirect } from 'next/navigation'
import { requireAccredAdmin } from '@/lib/auth/require-accred-admin'
import AdminNav from '@/components/admin/AdminNav'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAccredAdmin().catch(() => null)
  if (!admin) redirect('/login')

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f8', fontFamily: "'Saira Condensed', sans-serif" }}>
      <AdminNav email={admin.email} role={admin.role} />
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px' }}>{children}</div>
    </div>
  )
}
