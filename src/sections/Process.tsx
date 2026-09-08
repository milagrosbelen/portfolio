import { BookOpen, CodeXml, LayoutGrid, TrendingUp } from 'lucide-react'
import type { ComponentType } from 'react'
import { FadeIn } from '../components/AnimatedSection'
import { processSteps } from '../data/process'
import { SECTION_IDS } from '../lib/constants'
import type { ProcessStep } from '../types'

const icons: Record<ProcessStep['icon'], ComponentType<{ className?: string }>> = {
  understand: BookOpen,
  design: LayoutGrid,
  build: CodeXml,
  improve: TrendingUp,
}

function ProcessPaths() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 360 360"
      fill="none"
      className="pointer-events-none absolute -inset-5 h-[calc(100%+2.5rem)] w-[calc(100%+2.5rem)] sm:-inset-6 sm:h-[calc(100%+3rem)] sm:w-[calc(100%+3rem)]"
    >
      <defs>
        <filter id="path-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d="M78 38 C 130 12, 230 12, 282 38"
        stroke="#635BFF"
        strokeWidth="1.35"
        strokeLinecap="round"
        filter="url(#path-glow)"
        opacity="0.9"
      />
      <path
        d="M322 78 C 348 130, 348 230, 322 282"
        stroke="#635BFF"
        strokeWidth="1.35"
        strokeLinecap="round"
        filter="url(#path-glow)"
        opacity="0.9"
      />
      <path
        d="M282 322 C 230 348, 130 348, 78 322"
        stroke="#635BFF"
        strokeWidth="1.35"
        strokeLinecap="round"
        filter="url(#path-glow)"
        opacity="0.85"
      />
      <path
        d="M38 282 C 12 230, 12 130, 38 78"
        stroke="#635BFF"
        strokeWidth="1.35"
        strokeLinecap="round"
        filter="url(#path-glow)"
        opacity="0.85"
      />
      <path
        d="M168 180 C 180 168, 180 168, 192 180 C 180 192, 180 192, 168 180"
        stroke="#635BFF"
        strokeWidth="1.2"
        opacity="0.45"
      />

      <circle cx="78" cy="38" r="3.2" fill="#C7FF4A" />
      <circle cx="180" cy="22" r="2.4" fill="#635BFF" />
      <circle cx="282" cy="38" r="3.2" fill="#C7FF4A" />
      <circle cx="338" cy="180" r="2.6" fill="#C7FF4A" />
      <circle cx="282" cy="322" r="3.2" fill="#635BFF" />
      <circle cx="180" cy="338" r="2.4" fill="#C7FF4A" />
      <circle cx="78" cy="322" r="3.2" fill="#C7FF4A" />
      <circle cx="22" cy="180" r="2.6" fill="#635BFF" />
    </svg>
  )
}

export function Process() {
  return (
    <section
      id={SECTION_IDS.process}
      data-nav-theme="dark"
      className="relative overflow-hidden bg-ink section-space"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-72 w-[28rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[130px]"
      />

      <div className="site-container relative">
        <FadeIn className="mx-auto max-w-xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-lime sm:text-xs">
            Cómo construyo
          </p>
          <h2 className="font-display mt-4 text-[1.85rem] leading-[1.12] font-bold tracking-[-0.045em] text-white text-balance sm:text-[2.55rem]">
            Un buen producto empieza entendiendo el problema.
          </h2>
        </FadeIn>

        <FadeIn delay={0.08} className="relative mx-auto mt-12 w-full max-w-[21rem] sm:mt-14 sm:max-w-[24.5rem]">
          <ProcessPaths />

          <ol className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4">
            {processSteps.map((step) => {
              const Icon = icons[step.icon]

              return (
                <li key={step.number}>
                  <article className="flex h-full flex-col items-center rounded-[1.35rem] border border-accent/45 bg-[#141414] px-3 py-5 text-center shadow-[0_0_24px_rgba(99,91,255,0.16)] sm:px-4 sm:py-6">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-[10px] font-semibold tracking-[0.12em] text-white/80">
                      {step.number}
                    </span>
                    <h3 className="mt-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-white sm:text-[14px]">
                      {step.title}
                    </h3>
                    <Icon className="mt-3 h-5 w-5 text-white/80 sm:h-6 sm:w-6" />
                    <p className="mt-3 text-[11px] leading-relaxed text-white/50 sm:text-[12px]">
                      {step.description}
                    </p>
                  </article>
                </li>
              )
            })}
          </ol>
        </FadeIn>

        <FadeIn delay={0.16} className="mx-auto mt-10 max-w-md text-center">
          <div className="relative mx-auto mb-7 h-11 w-px bg-gradient-to-b from-accent/70 to-transparent">
            <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-lime shadow-[0_0_10px_#c7ff4a]" />
          </div>
          <p className="text-[14px] leading-relaxed text-white/55 sm:text-[15px]">
            Así construyo: con criterio de producto, para que el resultado se
            pueda usar de verdad.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
