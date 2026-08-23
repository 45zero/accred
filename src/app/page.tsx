import { prisma } from '@/lib/prisma'
import DemandeForm from '@/components/DemandeForm'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const [functions, competitions] = await Promise.all([
    prisma.accred_functions.findMany({ where: { is_active: true }, orderBy: { name: 'asc' } }),
    prisma.accred_competitions.findMany({ where: { is_active: true }, orderBy: { name: 'asc' } }),
  ])

  return (
    <DemandeForm
      functions={functions.map(f => ({ id: f.id, name: f.name }))}
      competitions={competitions.map(c => ({ id: c.id, name: c.name }))}
    />
  )
}
