'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/prisma'
import { requireAccredAdmin } from '@/lib/auth/require-accred-admin'

async function requireSuperAdmin() {
  const admin = await requireAccredAdmin()
  if (admin.role !== 'super_admin') throw new Error('Réservé au super admin.')
  return admin
}

export async function addManager(email: string, role: 'manager' | 'super_admin') {
  await requireSuperAdmin()
  const trimmed = email.trim().toLowerCase()
  if (!trimmed) return { error: 'E-mail requis.' }
  await prisma.accred_admins.upsert({ where: { email: trimmed }, update: { role }, create: { email: trimmed, role } })
  revalidatePath('/admin/gestionnaires')
  return {}
}

export async function removeManager(id: string) {
  await requireSuperAdmin()

  const target = await prisma.accred_admins.findUnique({ where: { id } })
  if (!target) return { error: 'Introuvable.' }

  if (target.role === 'super_admin') {
    const superAdminCount = await prisma.accred_admins.count({ where: { role: 'super_admin' } })
    if (superAdminCount <= 1) return { error: 'Impossible de retirer le dernier super admin.' }
  }

  await prisma.accred_admins.delete({ where: { id } })
  revalidatePath('/admin/gestionnaires')
  return {}
}
