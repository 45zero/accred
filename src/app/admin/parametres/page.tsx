import { prisma } from '@/lib/prisma'
import ParametresBoard from '@/components/admin/ParametresBoard'

export default async function ParametresPage() {
  const [functions, competitions] = await Promise.all([
    prisma.accred_functions.findMany({ orderBy: { name: 'asc' } }),
    prisma.accred_competitions.findMany({ orderBy: { name: 'asc' } }),
  ])

  return (
    <ParametresBoard
      functions={functions.map(f => ({ id: f.id, name: f.name, isActive: f.is_active ?? true }))}
      competitions={competitions.map(c => ({ id: c.id, name: c.name, isActive: c.is_active ?? true }))}
    />
  )
}
