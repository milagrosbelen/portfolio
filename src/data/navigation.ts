import type { NavLink } from '../types'
import { SECTION_IDS } from '../lib/constants'

export const navigation: NavLink[] = [
  { label: 'Proyectos', href: `#${SECTION_IDS.projects}` },
  { label: 'Servicios', href: `#${SECTION_IDS.services}` },
  { label: 'Sobre mí', href: `#${SECTION_IDS.about}` },
]
