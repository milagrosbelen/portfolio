import type { NavLink } from '../types'
import { SECTION_IDS } from '../lib/constants'

export const navigation: NavLink[] = [
  { label: 'Cómo trabajo', href: `#${SECTION_IDS.process}` },
  { label: 'Proyectos', href: `#${SECTION_IDS.projects}` },
  { label: 'Sobre mí', href: `#${SECTION_IDS.about}` },
]
