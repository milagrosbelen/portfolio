import type { TimelineItem } from '../types'

export const aboutCopy = {
  title: 'Sobre mí',
  paragraphs: [
    'Trabajo escuchando primero. Entiendo el problema, ordeno lo que hay que hacer y no suelto hasta que el producto se puede usar. Me gusta ser clara con los tiempos y comunicar cómo va todo: sin vueltas y con responsabilidad.',
    'Valoro la constancia, el detalle y la honestidad. Un buen software no empieza en el código: empieza en entender para quién es y qué tiene que resolver. Esa es la forma en la que me formé y la forma en la que construyo.',
    'Me inspira ver una idea —o un proceso desordenado— convertirse en una herramienta que alguien usa de verdad. Aspiro a seguir creciendo como desarrolladora con criterio de producto: alguien que una empresa quiera conocer por el potencial, y alguien a quien un negocio pueda confiarle llevar una idea al siguiente nivel.',
  ],
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
