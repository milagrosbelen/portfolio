import { CircleCheck, CodeXml, ListChecks, MessageCircle, type LucideIcon } from 'lucide-react'
import { FadeIn } from '../components/AnimatedSection'
import { SectionHeading } from '../components/SectionHeading'
import { processIntro, processSteps } from '../data/process'
import { SECTION_IDS } from '../lib/constants'
import type { ProcessIcon } from '../types'

const icons: Record<ProcessIcon, LucideIcon> = {
  talk: MessageCircle,
  define: ListChecks,
  build: CodeXml,
  improve: CircleCheck,
}

export function Process() {
  return (
    <section id={SECTION_IDS.process} className="relative scroll-mt-20 overflow-x-clip section-space">
      <span id="metodologia" className="absolute top-0" />
      <span id="proceso" className="absolute top-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-0 h-64 w-64 rounded-full bg-[#793BFF]/10 blur-3xl"
      />
      <div className="site-container">
        <FadeIn>
          <SectionHeading
            eyebrow={processIntro.eyebrow}
            title={processIntro.title}
            text={processIntro.text}
            className="max-w-3xl"
          />
        </FadeIn>

        <ol className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute top-5 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-transparent via-[#793BFF] to-transparent lg:block"
          />
          {processSteps.map((step, index) => {
            const Icon = icons[step.icon]
            const isLast = index === processSteps.length - 1

            return (
              <li key={step.number} className="relative flex gap-4 pb-8 last:pb-0 lg:block lg:pb-0 lg:text-center">
                {!isLast ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-10 bottom-0 left-5 w-px bg-[#793BFF]/35 lg:hidden"
                  />
                ) : null}
                <FadeIn delay={index * 0.05} className="contents">
                  <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#793BFF]/50 bg-[#0b0816] text-[#ddd6fe] lg:mx-auto">
                    <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <article className="min-w-0 lg:mt-5">
                    <p className="font-display text-sm font-semibold tracking-[0.16em] text-[#c4b5fd]">{step.number}</p>
                    <h3 className="font-display mt-2 text-2xl leading-tight font-semibold tracking-[-0.03em]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted lg:mx-auto lg:max-w-[16rem]">
                      {step.description}
                    </p>
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
