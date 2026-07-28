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
    demoUrl: '#',
    githubUrl: 'https://github.com/milagrospedrasa',
    accent: '#2563eb',
    gradient: 'from-blue-500/20 via-blue-400/10 to-violet-500/20',
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
    demoUrl: '#',
    githubUrl: 'https://github.com/milagrospedrasa',
    accent: '#7c3aed',
    gradient: 'from-violet-500/20 via-purple-400/10 to-indigo-500/20',
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
    demoUrl: 'https://linkiame.com',
    githubUrl: 'https://github.com/milagrospedrasa',
    accent: '#0ea5e9',
    gradient: 'from-sky-500/20 via-cyan-400/10 to-blue-500/20',
  },
]
