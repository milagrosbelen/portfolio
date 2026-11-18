import { WHATSAPP_URL } from '../lib/constants'
import type { Profile } from '../types'

export const profile: Profile = {
  name: 'Milagros Pedrasa',
  shortName: 'MILI',
  firstName: 'Milagros',
  role: 'Desarrolladora de software',
  headlineRole: 'Software Developer',
  location: 'Córdoba, Argentina',
  workMode: 'Remoto',
  email: 'milagrospedrasa1@gmail.com',
  availability: 'Disponible para proyectos',
  cvUrl: '/cv-milagros-pedrasa.pdf',
  whatsappUrl: WHATSAPP_URL,
  social: [
    {
      label: 'WhatsApp',
      href: WHATSAPP_URL,
      icon: 'whatsapp',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/milagros-pedrasa-56801537a/',
      icon: 'linkedin',
    },
  ],
}
