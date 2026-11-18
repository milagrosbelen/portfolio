export const portrait = {
  src: '/milagros.webp',
  alt: 'Retrato de Milagros Pedrasa',
  width: 640,
  height: 641,
}

/**
 * Cuando tengas una foto trabajando o estudiando, reemplazá null por
 * { src: '/fotos/trabajando.webp', alt: 'Milagros Pedrasa trabajando' }.
 */
export const workPhoto: { src: string; alt: string } | null = null

/**
 * Para publicar el video, guardá el archivo en public/media/presentacion.mp4
 * y pasá published a true.
 */
export const presentation = {
  src: '/media/presentacion.mp4',
  poster: portrait.src,
  type: 'video/mp4',
  published: false,
}
