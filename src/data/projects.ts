import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'spot',
    name: 'Spot',
    tagline: 'Marketplace para descubrir comercios, promociones y servicios.',
    description:
      'Plataforma que conecta usuarios con comercios locales, centralizando promociones, servicios y descubrimiento de negocios en una experiencia moderna.',
    problem:
      'Los comercios locales carecían de un canal digital unificado para mostrar promociones y ser descubiertos por nuevos clientes.',
    solution:
      'Diseñé y desarrollé un marketplace con búsqueda, categorías, perfiles de comercio y sistema de promociones, priorizando una UX clara y mobile-first.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'REST API'],
    demoUrl: 'https://spot-gamma-bay.vercel.app/',
    githubUrl: 'https://github.com/milagrospedrasa',
    accent: '#84cc16',
    gradient: 'from-lime-500/20 via-emerald-400/10 to-cyan-500/20',
    previewImage: '/projects/spot-landing.png',
  },
  {
    id: 'drivox',
    name: 'Drivox',
    tagline: 'Sistema de gestión para talleres mecánicos.',
    description:
      'Software de gestión integral para talleres mecánicos: órdenes de trabajo, clientes, inventario y seguimiento operativo en un solo lugar.',
    problem:
      'Los talleres gestionaban turnos, repuestos y clientes con herramientas dispersas, generando pérdida de tiempo y errores operativos.',
    solution:
      'Construí un panel administrativo con flujos optimizados para recepción de vehículos, seguimiento de reparaciones y control de stock.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'REST API'],
    demoUrl: 'https://taller-app-fawn.vercel.app/',
    githubUrl: 'https://github.com/milagrospedrasa',
    accent: '#ef4444',
    gradient: 'from-red-500/20 via-rose-400/10 to-orange-500/20',
    previewImage: '/projects/drivox-landing.png',
  },
  {
    id: 'curmy-store',
    name: 'Curmy Store',
    tagline: 'Catálogo online para tienda de ropa.',
    description:
      'Catálogo digital desarrollado dentro de Linkiame para una tienda de ropa, con navegación por categorías, productos destacados y experiencia de compra fluida.',
    problem:
      'La tienda necesitaba presencia online profesional sin depender de marketplaces externos, manteniendo su identidad de marca.',
    solution:
      'Creé un catálogo personalizado integrado al ecosistema Linkiame, con diseño responsive, gestión de productos y enfoque en conversión.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'REST API'],
    demoUrl: 'https://catalogo-curmy-store.vercel.app/',
    githubUrl: 'https://github.com/milagrospedrasa',
    accent: '#22c55e',
    gradient: 'from-green-500/20 via-emerald-400/10 to-lime-500/20',
    previewImage: '/projects/curmy-store-catalog.png',
    galleryImages: ['/projects/curmy-store-product.png'],
  },
]
