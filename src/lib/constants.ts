export const SITE = {
  name: 'Milagros Pedrasa',
  shortName: 'MILI',
  title: 'MILI — Software Developer | Milagros Pedrasa',
  description:
    'Desarrollo software, sitios web y herramientas digitales para transformar ideas y problemas reales en productos funcionales.',
  url: 'https://milagrospedrasa.vercel.app',
  location: 'Córdoba, Argentina',
} as const

export const SECTION_IDS = {
  hero: 'inicio',
  projects: 'proyectos',
  services: 'servicios',
  about: 'sobre-mi',
  process: 'proceso',
  contact: 'contacto',
} as const

const WHATSAPP_NUMBER = '5493515223831'
const WHATSAPP_MESSAGE =
  'Hola Milagros, te contacto desde tu portfolio. Me interesa conversar sobre un proyecto.'

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
