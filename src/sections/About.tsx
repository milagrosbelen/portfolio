import { FadeIn } from '../components/AnimatedSection'
import { SECTION_IDS } from '../lib/constants'
import profileImage from '../assets/milagros.png'

export function About() {
  return (
    <section id={SECTION_IDS.about} className="bg-mist section-space">
      <div className="site-container text-center">
        <FadeIn className="mx-auto max-w-2xl">
          <div className="inline-flex items-center justify-center gap-3">
            <figure className="h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-black/10">
              <img
                src={profileImage}
                alt="Milagros Pedrasa"
                className="h-full w-full object-cover object-[50%_18%]"
                loading="lazy"
              />
            </figure>
            <h2 className="whitespace-nowrap text-[15px] font-semibold uppercase tracking-[0.16em] text-foreground">
              Sobre mí
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-xl space-y-4 text-sm leading-relaxed text-muted sm:text-[15px]">
            <p>
              En 2023 empecé a formarme en desarrollo con cursos, con constancia
              y muchas horas de práctica. En 2025 entré a la Facultad Cervantes,
              en la carrera de Desarrollo Web y Aplicaciones Digitales, que
              sigo cursando.
            </p>
            <p className="text-foreground">
              Soy detallada, perseverante y muy comprometida con lo que hago.
              Me tomo cada proyecto en serio: escucho, organizo y no suelto
              hasta que queda bien.
            </p>
            <p>
              Trabajo con claridad y responsabilidad. Me gusta ser honesta con
              los tiempos, comunicar cómo va todo y cuidar cada detalle. Para
              mí esto no es solo un oficio: le pongo tiempo, atención y ganas
              de mejorar todos los días.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
