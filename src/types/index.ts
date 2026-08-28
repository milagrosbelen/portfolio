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

export type ProjectLayout = 'featured' | 'gallery' | 'app'

export interface Project {
  id: string
  number: string
  name: string
  tagline: string
  description: string
  type: string
  role: string
  technologies: string[]
  demoUrl?: string
  layout: ProjectLayout
  accent: string
  previewImage: string
  galleryImages: string[]
}

export interface Service {
  id: string
  number: string
  title: string
  description: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
  emoji: string
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
