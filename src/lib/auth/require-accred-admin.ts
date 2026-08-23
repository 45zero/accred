import 'server-only'
import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'

/**
 * Prisma contourne les policies RLS de Supabase : toute autorisation portée
 * par accred_admins doit être revalidée ici, côté serveur, à chaque action.
 */
export async function requireAccredAdmin() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user?.email) throw new Error('Non authentifié')

  const admin = await prisma.accred_admins.findUnique({ where: { email: user.email } })
  if (!admin) throw new Error('Accès refusé')

  return { userId: user.id, email: admin.email, role: admin.role as 'super_admin' | 'manager' }
}
