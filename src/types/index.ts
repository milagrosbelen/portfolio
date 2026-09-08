export interface NavLink {
  label: string
  href: string
}

export type SocialIcon = 'github' | 'linkedin' | 'whatsapp'

export interface SocialLink {
  label: string
  href: string
  icon: SocialIcon
}

export interface TechGroup {
  category: string
  items: string[]
}

export interface Project {
  id: string
  number: string
  name: string
  tagline: string
  origin: 'Para un negocio' | 'Propio' | 'Colaboración'
  problem: string
  solution: string
  work: string
  demoUrl?: string
  accent: string
  previewImage: string
}

export interface TimelineItem {
  year: string
  title: string
  description: string
  current?: boolean
}

export interface ProcessStep {
  number: string
  title: string
  description: string
  icon: 'understand' | 'design' | 'build' | 'improve'
}

export interface Profile {
  name: string
  shortName: string
  firstName: string
  role: string
  location: string
  email: string
  availability: string
  cvUrl: string
  whatsappUrl: string
  social: SocialLink[]
}
