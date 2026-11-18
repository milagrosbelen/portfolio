export const SITE = {
  name: 'Milagros Pedrasa',
  shortName: 'MP',
  title: 'Milagros Pedrasa — Software Developer',
  description:
    'Milagros Pedrasa, software developer en Córdoba. Construyo productos digitales que resuelven problemas reales, con desarrollo frontend, backend y criterio de producto.',
  url: 'https://milagrospedrasa.vercel.app',
  location: 'Córdoba, Argentina',
  email: 'milagrospedrasa1@gmail.com',
} as const

export const SECTION_IDS = {
  hero: 'inicio',
  intro: 'conocerme',
  projects: 'proyectos',
  services: 'que-puedo-construir',
  needs: 'que-puedo-construir',
  process: 'como-trabajo',
  about: 'sobre-mi',
  technologies: 'tecnologias',
  contact: 'contacto',
} as const

const WHATSAPP_NUMBER = '5493515223831'

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_URL = whatsappLink(
  'Hola Milagros, te contacto desde tu portfolio. Me interesa conversar sobre un proyecto.',
)

export const WHATSAPP_PROJECT_URL = whatsappLink(
  'Hola Milagros, te contacto desde tu portfolio. Quiero contarte un proyecto o una necesidad de mi negocio.',
)

export const CONTACT_ENDPOINT = `https://formsubmit.co/ajax/${SITE.email}`

export const STACK_LINE =
  'React · JavaScript · TypeScript · HTML · CSS · Tailwind CSS · Laravel · PHP · C# · REST API · PostgreSQL · SQL · Git · Vite'
