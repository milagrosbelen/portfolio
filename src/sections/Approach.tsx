import { Code2, Lightbulb, Search, Workflow, type LucideIcon } from 'lucide-react'
import { FadeIn } from '../components/AnimatedSection'

const steps: { number: string; title: string; text: string; icon: LucideIcon }[] = [
  {
    number: '01',
    title: 'Entender el negocio',
    text: 'Conozco tu actividad, escucho tus necesidades e identifico los problemas que podemos resolver.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Encontrar oportunidades',
    text: 'Analizo los procesos y pienso cómo la tecnología puede simplificar tareas y mejorar tu trabajo.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Diseñar la solución',
    text: 'Organizo las ideas, defino las funcionalidades y pienso cómo debería funcionar el producto.',
    icon: Workflow,
  },
  {
    number: '04',
    title: 'Llevarla a cabo',
    text: 'Desarrollo, pruebo y mejoro la solución hasta convertirla en una herramienta funcional.',
    icon: Code2,
  },
]

export function Approach() {
  return (
    <section id="como-puedo-ayudarte" className="relative scroll-mt-20 overflow-x-clip section-space">
      <span id="tecnologias" className="absolute top-0" />
      <span id="habilidades" className="absolute top-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 h-64 w-64 rounded-full bg-[#793BFF]/10 blur-3xl"
      />
      <div className="site-container">
        <FadeIn>
          <h2 className="font-display max-w-3xl text-[1.9rem] leading-[1.08] font-bold tracking-[-0.045em] text-balance uppercase sm:text-4xl lg:text-[2.9rem] lg:leading-[1.05]">
            Entiendo el problema. Desarrollo la solución.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Cada negocio tiene desafíos diferentes. Me interesa conocer cómo trabajás, identificar qué necesitás
            mejorar y transformar esas necesidades en soluciones digitales funcionales.
          </p>
        </FadeIn>

        <ol className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-8">
          <span
            aria-hidden="true"
            className="absolute top-5 right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-[#793BFF]/10 via-[#793BFF]/70 to-[#793BFF]/10 lg:block"
          />
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === steps.length - 1

            return (
              <li key={step.number} className="relative flex gap-4 pb-8 last:pb-0 lg:block lg:pb-0">
                {!isLast ? (
                  <span aria-hidden="true" className="absolute top-10 bottom-0 left-5 w-px bg-[#793BFF]/30 lg:hidden" />
                ) : null}
                <FadeIn delay={index * 0.05} className="contents">
                  <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#793BFF]/45 bg-[#0b0816] text-[#ddd6fe] lg:mx-0">
                    <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <article className="min-w-0 lg:mt-5">
                    <p className="font-display text-sm font-semibold tracking-[0.16em] text-[#c4b5fd]">{step.number}</p>
                    <h3 className="font-display mt-1.5 text-xl leading-tight font-semibold tracking-[-0.03em]">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{step.text}</p>
                  </article>
                </FadeIn>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
