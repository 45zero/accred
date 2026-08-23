'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/prisma'
import { requireAccredAdmin } from '@/lib/auth/require-accred-admin'

export async function addFunction(name: string) {
  await requireAccredAdmin()
  const trimmed = name.trim()
  if (!trimmed) return { error: 'Nom requis.' }
  await prisma.accred_functions.upsert({ where: { name: trimmed }, update: { is_active: true }, create: { name: trimmed } })
  revalidatePath('/admin/parametres')
  return {}
}

export async function toggleFunctionActive(id: string, isActive: boolean) {
  await requireAccredAdmin()
  await prisma.accred_functions.update({ where: { id }, data: { is_active: isActive } })
  revalidatePath('/admin/parametres')
}

export async function addCompetition(name: string) {
  await requireAccredAdmin()
  const trimmed = name.trim()
  if (!trimmed) return { error: 'Nom requis.' }
  const existing = await prisma.accred_competitions.findFirst({ where: { name: trimmed } })
  if (existing) {
    await prisma.accred_competitions.update({ where: { id: existing.id }, data: { is_active: true } })
  } else {
    await prisma.accred_competitions.create({ data: { name: trimmed } })
  }
  revalidatePath('/admin/parametres')
  return {}
}

export async function toggleCompetitionActive(id: string, isActive: boolean) {
  await requireAccredAdmin()
  await prisma.accred_competitions.update({ where: { id }, data: { is_active: isActive } })
  revalidatePath('/admin/parametres')
}
