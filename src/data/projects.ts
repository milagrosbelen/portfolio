import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'drivox',
    number: '01',
    name: 'DRIVOX',
    tagline: 'Sistema de gestión para talleres de motos',
    description:
      'Una solución digital creada para centralizar la gestión de un taller y transformar procesos cotidianos en una herramienta organizada y fácil de utilizar.',
    type: 'Software de gestión',
    role: 'Full Stack Developer',
    technologies: ['React', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
    demoUrl: 'https://taller-app-fawn.vercel.app/',
    layout: 'featured',
    accent: '#E11D2E',
    previewImage: '/projects/drivox-app.png',
    galleryImages: [],
  },
  {
    id: 'curmy-store',
    number: '02',
    name: 'CURMY.STORE',
    tagline: 'E-commerce / experiencia digital para una marca de moda',
    description:
      'Una experiencia digital desarrollada para una marca de moda y productos, enfocada en presentar el catálogo, mejorar la navegación y construir una presencia digital profesional.',
    type: 'E-commerce / Web',
    role: 'Diseño + Desarrollo',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    demoUrl: 'https://catalogo-curmy-store.vercel.app/',
    layout: 'gallery',
    accent: '#22C55E',
    previewImage: '/projects/curmy-home.png',
    galleryImages: [],
  },
  {
    id: 'milogit',
    number: '03',
    name: 'MILOGIT',
    tagline: 'Gestión y seguimiento de entrenamiento',
    description:
      'Una aplicación desarrollada para organizar y realizar seguimiento de entrenamientos de forma digital.',
    type: 'Aplicación Web',
    role: 'Desarrollo',
    technologies: [],
    layout: 'app',
    accent: '#FF5C00',
    previewImage: '/projects/milogit-app.png',
    galleryImages: [],
  },
]
