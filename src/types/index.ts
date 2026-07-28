export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail'
}

export interface Technology {
  name: string
}

export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  problem: string
  solution: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  accent: string
  gradient: string
  previewImage: string
  galleryImages?: string[]
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
}

export interface Profile {
  name: string
  headline: string
  subheadline: string
  about: string[]
  email: string
  cvUrl: string
  social: SocialLink[]
}
