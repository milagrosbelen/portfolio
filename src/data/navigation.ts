import type { NavLink } from '../types'
import { SECTION_IDS } from '../lib/constants'

export const navigation: NavLink[] = [
  { label: 'Inicio', href: `#${SECTION_IDS.hero}` },
  { label: 'Proyectos', href: `#${SECTION_IDS.projects}` },
  { label: 'Qué puedo construir', href: `#${SECTION_IDS.services}` },
  { label: 'Cómo trabajo', href: `#${SECTION_IDS.process}` },
  { label: 'Sobre mí', href: `#${SECTION_IDS.about}` },
  { label: 'Cómo ayudo', href: '#como-puedo-ayudarte' },
  { label: 'Contacto', href: `#${SECTION_IDS.contact}` },
]

export const footerNavigation: NavLink[] = [
  { label: 'Cómo trabajo', href: `#${SECTION_IDS.process}` },
  { label: 'Proyectos', href: `#${SECTION_IDS.projects}` },
  { label: 'Sobre mí', href: `#${SECTION_IDS.about}` },
  { label: 'Cómo ayudo', href: '#como-puedo-ayudarte' },
  { label: 'Contacto', href: `#${SECTION_IDS.contact}` },
]
