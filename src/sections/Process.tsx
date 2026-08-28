import { FadeIn } from '../components/AnimatedSection'
import { SectionHeader } from '../components/SectionHeader'
import { processSteps } from '../data/process'
import { SECTION_IDS } from '../lib/constants'

export function Process() {
  return (
    <section
      id={SECTION_IDS.process}
      data-nav-theme="dark"
      className="relative overflow-hidden bg-ink section-space"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent/30 blur-[120px]"
      />
      <div className="site-container relative">
        <FadeIn>
          <SectionHeader
            title="De la idea al producto"
            description="Un camino claro, de principio a fin."
            light
          />
        </FadeIn>

        <ol className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <li
              key={step.number}
              className={
                index === processSteps.length - 1
                  ? 'sm:col-span-2 sm:mx-auto sm:max-w-sm lg:col-span-1 lg:max-w-none'
                  : undefined
              }
            >
              <FadeIn delay={index * 0.05}>
                <article className="flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-7 text-center">
                  <h3 className="flex flex-nowrap items-center justify-center gap-1.5 whitespace-nowrap text-[15px] font-semibold tracking-tight text-white">
                    <span className="text-[1.05rem] leading-none" aria-hidden="true">
                      {step.emoji}
                    </span>
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {step.description}
                  </p>
                </article>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
