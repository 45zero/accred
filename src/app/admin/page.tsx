import { prisma } from '@/lib/prisma'
import RequestsBoard from '@/components/admin/RequestsBoard'

export default async function AdminRequestsPage() {
  const requests = await prisma.accred_requests.findMany({
    include: { function: true, competition: true },
    orderBy: { created_at: 'desc' },
  })

  return (
    <RequestsBoard
      requests={requests.map(r => ({
        id: r.id,
        firstName: r.first_name,
        lastName: r.last_name,
        email: r.email,
        phone: r.phone,
        organization: r.organization,
        functionName: r.function.name,
        competitionName: r.competition.name,
        matchName: r.match_name,
        photoUrl: r.photo_url,
        status: r.status,
        responseMessage: r.response_message,
        zoneTerrain: r.zone_terrain,
        zoneTribune: r.zone_tribune,
        zoneVestiaires: r.zone_vestiaires,
        badgePdfUrl: r.badge_pdf_url,
        createdAt: r.created_at.toISOString(),
      }))}
    />
  )
}
