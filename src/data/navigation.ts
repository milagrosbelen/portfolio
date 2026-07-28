import type { NavLink } from '../types'
import { SECTION_IDS } from '../lib/constants'

export const navigation: NavLink[] = [
  { label: 'Sobre mí', href: `#${SECTION_IDS.about}` },
  { label: 'Tecnologías', href: `#${SECTION_IDS.tech}` },
  { label: 'Proyectos', href: `#${SECTION_IDS.projects}` },
  { label: 'Experiencia', href: `#${SECTION_IDS.experience}` },
  { label: 'Objetivos', href: `#${SECTION_IDS.goals}` },
  { label: 'Contacto', href: `#${SECTION_IDS.contact}` },
]
