import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // mediaBadgePdf.ts lit les templates PDF via fs.readFile(path.join(process.cwd(), ...))
  // au lieu d'un import statique — le traceur ne le détecte pas tout seul,
  // donc on force l'inclusion explicite pour la route qui déclenche la
  // génération du badge (l'action serveur approveRequest, appelée depuis /admin).
  outputFileTracingIncludes: {
    "/admin": ["public/templates/**/*"],
  },
};

export default nextConfig;
