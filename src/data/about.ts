import type { TimelineItem } from '../types'

export const aboutCopy = {
  title: 'Sobre mí',
  text: 'Soy detallada y perseverante: si algo no cierra, lo retomo hasta que queda bien. Cuando programo me tomo el proyecto en serio, cuido cada pantalla y soy honesta con los tiempos. Me gusta ser clara, pedir lo que necesito y comunicar cómo va todo. Esto no es solo un oficio: le pongo atención, constancia y ganas de mejorar todos los días.',
}

export const timeline: TimelineItem[] = [
  {
    year: '2023',
    title: 'Formación autodidacta',
    description:
      'Empecé a formarme en desarrollo con cursos, constancia y una base teórica sólida. Quería entender bien cada concepto antes de aplicarlo.',
  },
  {
    year: '2024',
    title: 'Primera práctica',
    description:
      'Pasé de la teoría a construir: listas de tareas y ejercicios prácticos, de forma autodidacta, para aprender haciendo.',
  },
  {
    year: '2025',
    title: 'Facultad y producto',
    description:
      'Entré a la Facultad Cervantes, en la carrera de Desarrollo Web y Aplicaciones Digitales. Al mismo tiempo seguí formándome por mi cuenta y empecé a construir productos reales.',
  },
  {
    year: '2026',
    title: 'Hoy',
    current: true,
    description:
      'Sigo la carrera y construyo en paralelo: proyectos propios, colaboraciones y soluciones para negocios. El foco es el mismo: pasar del problema al producto.',
  },
]
