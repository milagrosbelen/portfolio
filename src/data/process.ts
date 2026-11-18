import type { ProcessStep } from '../types'

export const processIntro = {
  eyebrow: 'Cómo trabajo',
  title: 'Cada proyecto comienza escuchando.',
  text: 'Me interesa entender lo que necesitás antes de pensar cómo desarrollarlo.',
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Conversamos',
    icon: 'talk',
    description: 'Conozco tu idea, tu negocio y lo que necesitás resolver.',
  },
  {
    number: '02',
    title: 'Definimos',
    icon: 'define',
    description: 'Organizamos objetivos, funcionalidades y prioridades.',
  },
  {
    number: '03',
    title: 'Desarrollamos',
    icon: 'build',
    description: 'Construyo la solución y comparto los avances del proyecto.',
  },
  {
    number: '04',
    title: 'Mejoramos',
    icon: 'improve',
    description: 'Probamos, revisamos y ajustamos el producto.',
  },
]
