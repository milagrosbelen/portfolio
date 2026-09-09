import { useEffect, useRef, useState } from 'react'
import { FadeIn } from '../components/AnimatedSection'
import { useReducedMotion } from 'framer-motion'
import { BookOpen, CodeXml, LayoutGrid, TrendingUp } from 'lucide-react'
import type { ComponentType } from 'react'
import { processSteps } from '../data/process'
import { SECTION_IDS } from '../lib/constants'
import { cn } from '../lib/utils'
import type { ProcessStep } from '../types'

const icons: Record<ProcessStep['icon'], ComponentType<{ className?: string }>> = {
  understand: BookOpen,
  design: LayoutGrid,
  build: CodeXml,
  improve: TrendingUp,
}

const framePaths = [
  'M78 38 C 130 12, 230 12, 282 38',
  'M322 78 C 348 130, 348 230, 322 282',
  'M282 322 C 230 348, 130 348, 78 322',
  'M38 282 C 12 230, 12 130, 38 78',
]

const frameNodes = [
  { cx: 78, cy: 38, r: 3.4, fill: '#C7FF4A', pulse: true },
  { cx: 180, cy: 22, r: 2.4, fill: '#635BFF', pulse: false },
  { cx: 282, cy: 38, r: 3.4, fill: '#C7FF4A', pulse: true },
  { cx: 338, cy: 180, r: 2.7, fill: '#C7FF4A', pulse: true },
  { cx: 282, cy: 322, r: 3.2, fill: '#635BFF', pulse: false },
  { cx: 180, cy: 338, r: 2.4, fill: '#C7FF4A', pulse: true },
  { cx: 78, cy: 322, r: 3.4, fill: '#C7FF4A', pulse: true },
  { cx: 22, cy: 180, r: 2.6, fill: '#635BFF', pulse: false },
]

function useDiagramInView() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    if (reduce) {
      setOn(true)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setOn(true)
        observer.disconnect()
      },
      { threshold: 0.18 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reduce])

  return { ref, on }
}

function StepCard({
  step,
  className,
}: {
  step: ProcessStep
  className?: string
}) {
  const Icon = icons[step.icon]

  return (
    <article className={className}>
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-[10px] font-semibold tracking-[0.12em] text-white/80">
        {step.number}
      </span>
      <h3 className="mt-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-white sm:text-[14px]">
        {step.title}
      </h3>
      <Icon className="mt-3 h-5 w-5 text-white/80 sm:h-6 sm:w-6" />
      <p className="mt-3 text-[11px] leading-relaxed text-white/50 sm:text-[13px]">
        {step.description}
      </p>
    </article>
  )
}

export function Process() {
  const { ref, on } = useDiagramInView()

  return (
    <section
      id={SECTION_IDS.process}
      data-nav-theme="dark"
      className="relative overflow-hidden bg-ink section-space lg:py-32"
    >
      <div
        aria-hidden="true"
        className="process-glow pointer-events-none absolute top-0 left-1/2 h-[22rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/30 blur-[80px] sm:blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-6rem] left-1/2 hidden h-64 w-[28rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px] sm:block"
      />

      <div className="site-container relative">
        <FadeIn>
          <div className="mx-auto max-w-xl text-center lg:max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-lime sm:text-xs">
              Cómo construyo
            </p>
            <h2 className="font-display mt-4 text-[1.85rem] leading-[1.12] font-bold tracking-[-0.045em] text-white text-balance sm:text-[2.55rem]">
              Un buen producto empieza entendiendo el problema.
            </h2>
          </div>
        </FadeIn>

        <div ref={ref} className={cn('process-diagram', on && 'process-on')}>
          <div className="relative mx-auto mt-12 w-full max-w-[21rem] sm:mt-16 sm:max-w-[24.5rem] lg:hidden">
            <svg
              aria-hidden="true"
              viewBox="0 0 360 360"
              fill="none"
              className="pointer-events-none absolute -inset-5 h-[calc(100%+2.5rem)] w-[calc(100%+2.5rem)] sm:-inset-6 sm:h-[calc(100%+3rem)] sm:w-[calc(100%+3rem)]"
            >
              {framePaths.map((d) => (
                <path key={d} d={d} className="process-draw" />
              ))}
              {frameNodes.map((node) => (
                <circle
                  key={`${node.cx}-${node.cy}`}
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r}
                  fill={node.fill}
                  className={node.pulse ? 'process-node' : undefined}
                />
              ))}
            </svg>

            <ol className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4">
              {processSteps.map((step) => (
                <li key={step.number} className="process-step">
                  <StepCard
                    step={step}
                    className="flex h-full flex-col items-center rounded-[1.35rem] border border-accent/45 bg-[#141414] px-3 py-5 text-center shadow-[0_0_24px_rgba(99,91,255,0.16)] transition duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_12px_40px_rgba(99,91,255,0.28)] sm:px-4 sm:py-6"
                  />
                </li>
              ))}
            </ol>
          </div>

          <div className="relative mt-24 hidden lg:block">
            <div
              aria-hidden="true"
              className="process-line absolute top-[18px] right-[8%] left-[8%] h-px bg-gradient-to-r from-transparent via-accent to-transparent"
            />
            <ol className="grid grid-cols-4 gap-10 xl:gap-16">
              {processSteps.map((step) => {
                const Icon = icons[step.icon]

                return (
                  <li
                    key={step.number}
                    className="process-step relative flex flex-col items-center text-center transition duration-300 hover:-translate-y-1"
                  >
                    <span className="process-dot relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/70 bg-ink text-[11px] font-semibold tracking-[0.12em] text-white shadow-[0_0_18px_rgba(99,91,255,0.45)] transition duration-300 hover:border-lime hover:shadow-[0_0_18px_rgba(199,255,74,0.45)]">
                      {step.number}
                    </span>
                    <h3 className="mt-8 text-[14px] font-semibold uppercase tracking-[0.18em] text-white">
                      {step.title}
                    </h3>
                    <Icon className="mt-5 h-6 w-6 text-white/75" />
                    <p className="mt-5 max-w-[15rem] text-[14px] leading-relaxed text-white/50">
                      {step.description}
                    </p>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>

        <FadeIn>
          <p className="mx-auto mt-12 max-w-md text-center text-[14px] leading-relaxed text-white/55 sm:text-[15px] lg:mt-24">
            Así construyo: con criterio de producto, para que el resultado se
            pueda usar de verdad.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
