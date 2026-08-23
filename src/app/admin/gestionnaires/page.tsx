import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { requireAccredAdmin } from '@/lib/auth/require-accred-admin'
import ManagersBoard from '@/components/admin/ManagersBoard'

export const dynamic = 'force-dynamic'

export default async function GestionnairesPage() {
  const admin = await requireAccredAdmin()
  if (admin.role !== 'super_admin') redirect('/admin')

  const admins = await prisma.accred_admins.findMany({ orderBy: { created_at: 'asc' } })

  return (
    <ManagersBoard
      admins={admins.map(a => ({ id: a.id, email: a.email, role: a.role as 'super_admin' | 'manager' }))}
      currentEmail={admin.email}
    />
  )
}
