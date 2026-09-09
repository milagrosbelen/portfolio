import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'drivox',
    number: '01',
    name: 'DRIVOX',
    tagline:
      'Sistema de gestión para talleres de motos: servicios, clientes, presupuestos e ingresos en un solo lugar.',
    origin: 'Para un negocio',
    problem:
      'Un taller de motos con todo en la cabeza: servicios, clientes y números sueltos, sin una herramienta para ordenar el día a día.',
    solution:
      'Un sistema para cargar servicios, ver ingresos, armar presupuestos y tener el taller bajo control desde el celular.',
    work:
      'Pensé el producto desde el problema real del taller: qué tenía que verse primero, cómo cargar un servicio y cómo entender el día de un vistazo. Diseñé la interfaz, desarrollé el frontend y el backend, y dejé el sistema funcionando para usar: ingresos del mes, servicios, presupuestos y el estado del taller, sin depender de papeles ni de la memoria.',
    demoUrl: 'https://taller-app-fawn.vercel.app/',
    accent: '#E11D2E',
    previewImage: '/projects/drivox-dashboard.webp',
    heroImage: '/projects/hero-drivox.png',
  },
  {
    id: 'curmy-store',
    number: '02',
    name: 'CURMY STORE',
    tagline:
      'Tienda digital de fútbol y urbano: catálogo, categorías, ofertas y compra desde el celular.',
    origin: 'Colaboración',
    problem:
      'Una marca con showroom físico, pero sin una tienda digital clara para mostrar el catálogo y vender.',
    solution:
      'Una experiencia e-commerce para explorar categorías, ver ofertas y comprar desde el celular.',
    work:
      'Diseñé la interfaz: la home, las categorías, las ofertas, el catálogo y el flujo de compra. Me encargué de cómo se ve y cómo se usa el producto en el celular.',
    demoUrl: 'https://catalogo-curmy-store.vercel.app/',
    accent: '#22C55E',
    previewImage: '/projects/curmy-store.webp',
    heroImage: '/projects/hero-curmy.png',
  },
  {
    id: 'milogit',
    number: '03',
    name: 'MILOGIT',
    tagline:
      'App para organizar el entrenamiento: plan semanal, sesión del día y seguimiento de ejercicios.',
    origin: 'Propio',
    problem:
      'El entrenamiento se seguía de forma suelta: sin un plan claro ni registro de cada sesión.',
    solution:
      'Una app para ver la semana, entrar a la sesión del día y seguir los ejercicios paso a paso.',
    work:
      'Definí el producto y lo construí de punta a punta: la vista de la semana, la sesión del día, las cards de cada ejercicio y el seguimiento del plan. Diseñé la interfaz y desarrollé la aplicación para que el entrenamiento se pueda usar de verdad, no quedar en una nota o en un Excel.',
    accent: '#FF5C00',
    previewImage: '/projects/milogit-plan.webp',
    heroImage: '/projects/hero-milogit.png',
  },
]
