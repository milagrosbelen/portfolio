import type { Project } from '../types'

export const projectsIntro = {
  eyebrow: 'Proyectos seleccionados',
  title: 'Problemas concretos, convertidos en productos.',
  text: 'Cada caso cuenta qué pasaba, qué construí y cuál fue mi participación. El video de cada proyecto se publica en el espacio reservado.',
}

/**
 * Videos de demostración.
 * Cuando el archivo esté listo, completalo en `video.src` de cada proyecto.
 * Puede ser una ruta de `public/` o una URL directa.
 *
 * Ejemplo:
 * video: {
 *   src: '/projects/drivox.mp4',
 *   poster: '/projects/hero-drivox.webp',
 * }
 *
 * Con `src` vacío se muestra el placeholder. No uses videos de stock.
 */
export const projects: Project[] = [
  {
    id: 'drivox',
    number: '01',
    name: 'DRIVOX',
    productType: 'Sistema de gestión para talleres de motos',
    origin: 'Para un negocio',
    problem:
      'La gestión del taller dependía de información dispersa, registros manuales y tareas que necesitaban más organización.',
    solution:
      'Una aplicación que centraliza los servicios, permite consultar ingresos, administrar presupuestos y seguir el estado del taller.',
    work: 'Me encargué de pensar el producto desde las necesidades del taller, diseñar las interfaces y desarrollar el frontend y backend. Trabajé en la organización de la información, los flujos de trabajo y las funcionalidades necesarias para el uso cotidiano.',
    areas: ['Gestión', 'Servicios', 'Clientes', 'Presupuestos', 'Ingresos'],
    demoUrl: 'https://taller-app-fawn.vercel.app/',
    accent: '#E11D2E',
    video: {
      src: '',
      poster: '/projects/hero-drivox.webp',
    },
    images: [
      {
        src: '/projects/drivox-landing.webp',
        alt: 'Página de DRIVOX para talleres de motos, con acceso al panel del sistema.',
        caption: 'Presentación del producto',
        kind: 'wide',
      },
      {
        src: '/projects/hero-drivox.webp',
        alt: 'Panel de DRIVOX con ingresos del mes, servicios, clientes y presupuesto rápido.',
        caption: 'Panel del taller',
        kind: 'phone',
      },
    ],
  },
  {
    id: 'curmy-store',
    number: '02',
    name: 'CURMY STORE',
    productType: 'Experiencia de tienda digital para una marca de indumentaria',
    origin: 'Colaboración',
    problem:
      'El negocio contaba con un showroom físico, pero necesitaba una experiencia digital clara para mostrar sus productos y llegar a más compradores.',
    solution:
      'Una tienda digital con catálogo, categorías, ofertas y navegación adaptada a dispositivos móviles.',
    work: 'Me encargué del diseño de la experiencia de usuario y de la interfaz: página principal, categorías, catálogo, ofertas y recorrido de compra. Trabajé para que la experiencia fuera visualmente clara y sencilla de utilizar.',
    areas: ['Diseño UI', 'UX', 'Catálogo', 'E-commerce', 'Experiencia móvil'],
    demoUrl: 'https://catalogo-curmy-store.vercel.app/',
    accent: '#22C55E',
    video: {
      src: '',
      poster: '/projects/hero-curmy.webp',
    },
    images: [
      {
        src: '/projects/hero-curmy.webp',
        alt: 'Inicio de Curmy Store con categorías, ofertas y acceso al carrito.',
        caption: 'Inicio',
        kind: 'phone',
      },
      {
        src: '/projects/curmy-store-catalog.webp',
        alt: 'Catálogo de indumentaria de Curmy Store con precios y navegación inferior.',
        caption: 'Catálogo',
        kind: 'phone',
      },
    ],
  },
  {
    id: 'milogit',
    number: '03',
    name: 'MILOGIT',
    productType: 'Aplicación propia para organizar y seguir entrenamientos',
    origin: 'Propio',
    problem:
      'El entrenamiento se organizaba de manera dispersa, sin una estructura clara para consultar el plan y seguir cada sesión.',
    solution:
      'Una aplicación que reúne el calendario semanal, la sesión del día y el seguimiento de los ejercicios.',
    work: 'Definí el producto y desarrollé la aplicación de punta a punta. Diseñé la estructura de navegación, las vistas semanales, las sesiones y los componentes para acompañar el entrenamiento.',
    areas: ['Producto', 'Diseño UI', 'Frontend', 'Organización de información'],
    accent: '#FF5C00',
    video: {
      src: '',
      poster: '/projects/hero-milogit.webp',
    },
    images: [
      {
        src: '/projects/hero-milogit.webp',
        alt: 'Plan semanal de MILOGIT con la sesión del día y los ejercicios.',
        caption: 'Plan de la semana',
        kind: 'phone',
      },
    ],
  },
]
