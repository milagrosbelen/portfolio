import type { ProcessStep } from '../types'

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Entender',
    icon: 'understand',
    description: 'Escucho el problema, el contexto y para quién es el producto.',
  },
  {
    number: '02',
    title: 'Diseñar',
    icon: 'design',
    description: 'Defino la solución, la estructura y cómo se va a usar.',
  },
  {
    number: '03',
    title: 'Construir',
    icon: 'build',
    description: 'Desarrollo el producto, de la interfaz al funcionamiento.',
  },
  {
    number: '04',
    title: 'Mejorar',
    icon: 'improve',
    description: 'Pruebo, ajusto y dejo todo listo para usar.',
  },
]
