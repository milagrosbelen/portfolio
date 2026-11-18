import type { TechGroup } from '../types'

export const technologiesIntro = {
  eyebrow: 'Mis habilidades',
  title: 'Las herramientas con las que construyo.',
  text: 'Trabajo con diferentes tecnologías según las necesidades y características de cada proyecto.',
}

export const techGroups: TechGroup[] = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['PHP', 'Laravel', 'Node.js', 'C#'],
  },
  {
    category: 'Bases de datos',
    items: ['PostgreSQL', 'SQL'],
  },
  {
    category: 'Herramientas',
    items: ['Git', 'GitHub', 'Vite'],
  },
]
