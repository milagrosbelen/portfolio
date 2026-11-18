export interface NavLink {
  label: string
  href: string
}

export type SocialIcon = 'linkedin' | 'whatsapp'

export interface SocialLink {
  label: string
  href: string
  icon: SocialIcon
}

export interface TechGroup {
  category: string
  items: string[]
}

export interface ProjectImage {
  src: string
  alt: string
  caption: string
  kind: 'phone' | 'wide'
}

export interface ProjectVideo {
  /**
   * Ruta local (`/projects/drivox.mp4`) o URL de un MP4.
   * Dejar vacío hasta tener el video real.
   */
  src?: string
  /** Imagen de portada. También se muestra en el placeholder. */
  poster?: string
}

export interface Project {
  id: string
  number: string
  name: string
  productType: string
  origin: 'Para un negocio' | 'Propio' | 'Colaboración'
  problem: string
  solution: string
  work: string
  areas: string[]
  /** Completar solo con tecnologías confirmadas de ese proyecto. */
  technologies?: string[]
  demoUrl?: string
  accent: string
  video: ProjectVideo
  images: ProjectImage[]
}

export interface TimelineItem {
  year: string
  title: string
  description: string
  current?: boolean
}

export type ProcessIcon = 'talk' | 'define' | 'build' | 'improve'

export interface ProcessStep {
  number: string
  title: string
  description: string
  icon: ProcessIcon
}

export interface Profile {
  name: string
  shortName: string
  firstName: string
  role: string
  headlineRole: string
  location: string
  workMode: string
  email: string
  availability: string
  cvUrl: string
  whatsappUrl: string
  social: SocialLink[]
}

export interface Service {
  id: string
  title: string
  text: string
  example: string
}
