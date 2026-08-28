import type { ProcessStep } from '../types'

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Idea',
    emoji: '💡',
    description: 'Escucho qué querés construir, aunque todavía no esté del todo definido.',
  },
  {
    number: '02',
    title: 'Análisis',
    emoji: '🔍',
    description: 'Entiendo el problema, el contexto y qué tiene que resolver el producto.',
  },
  {
    number: '03',
    title: 'Planificación',
    emoji: '🗺️',
    description: 'Defino alcance, estructura y prioridades antes de escribir código.',
  },
  {
    number: '04',
    title: 'Desarrollo',
    emoji: '💻',
    description: 'Construyo la solución con comunicación clara durante todo el proceso.',
  },
  {
    number: '05',
    title: 'Lanzamiento',
    emoji: '🚀',
    description: 'Probamos, ajustamos y dejamos el producto listo para usar.',
  },
]
