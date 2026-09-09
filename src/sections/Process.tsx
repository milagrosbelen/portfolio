import { motion, useReducedMotion } from 'framer-motion'
import { BookOpen, CodeXml, LayoutGrid, TrendingUp } from 'lucide-react'
import type { ComponentType } from 'react'
import { processSteps } from '../data/process'
import { SECTION_IDS } from '../lib/constants'
import type { ProcessStep } from '../types'

const icons: Record<ProcessStep['icon'], ComponentType<{ className?: string }>> = {
  understand: BookOpen,
  design: LayoutGrid,
  build: CodeXml,
  improve: TrendingUp,
}

const ease = [0.22, 1, 0.36, 1] as const

const pathVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.85, ease: 'easeInOut' },
  },
}

const nodeVariant = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 380, damping: 18 },
  },
}

function ProcessPaths({ reduce }: { reduce: boolean | null }) {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 360 360"
      fill="none"
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.12, delayChildren: 0.15 },
        },
      }}
      className="pointer-events-none absolute -inset-5 h-[calc(100%+2.5rem)] w-[calc(100%+2.5rem)] sm:-inset-6 sm:h-[calc(100%+3rem)] sm:w-[calc(100%+3rem)]"
    >
      <defs>
        <filter id="process-path-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {[
        'M78 38 C 130 12, 230 12, 282 38',
        'M322 78 C 348 130, 348 230, 322 282',
        'M282 322 C 230 348, 130 348, 78 322',
        'M38 282 C 12 230, 12 130, 38 78',
      ].map((d) => (
        <motion.path
          key={d}
          d={d}
          stroke="#635BFF"
          strokeWidth="1.45"
          strokeLinecap="round"
          filter="url(#process-path-glow)"
          variants={pathVariant}
        />
      ))}

      {[
        { cx: 78, cy: 38, r: 3.4, fill: '#C7FF4A', pulse: true },
        { cx: 180, cy: 22, r: 2.4, fill: '#635BFF', pulse: false },
        { cx: 282, cy: 38, r: 3.4, fill: '#C7FF4A', pulse: true },
        { cx: 338, cy: 180, r: 2.7, fill: '#C7FF4A', pulse: true },
        { cx: 282, cy: 322, r: 3.2, fill: '#635BFF', pulse: false },
        { cx: 180, cy: 338, r: 2.4, fill: '#C7FF4A', pulse: true },
        { cx: 78, cy: 322, r: 3.4, fill: '#C7FF4A', pulse: true },
        { cx: 22, cy: 180, r: 2.6, fill: '#635BFF', pulse: false },
      ].map((node) => (
        <motion.circle
          key={`${node.cx}-${node.cy}`}
          cx={node.cx}
          cy={node.cy}
          r={node.r}
          fill={node.fill}
          className={node.pulse && !reduce ? 'process-node' : undefined}
          variants={nodeVariant}
        />
      ))}
    </motion.svg>
  )
}

export function Process() {
  const reduce = useReducedMotion()

  return (
    <section
      id={SECTION_IDS.process}
      data-nav-theme="dark"
      className="relative overflow-hidden bg-ink section-space"
    >
      <motion.div
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease }}
        className="pointer-events-none absolute top-0 left-1/2 h-[22rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/30 blur-[140px] process-glow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-6rem] left-1/2 h-64 w-[28rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="site-container relative">
        <div className="mx-auto max-w-xl text-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12, letterSpacing: '0.4em' }}
            whileInView={{ opacity: 1, y: 0, letterSpacing: '0.22em' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
            className="text-[11px] font-semibold uppercase text-lime sm:text-xs"
          >
            Cómo construyo
          </motion.p>
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 28, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="font-display mt-4 text-[1.85rem] leading-[1.12] font-bold tracking-[-0.045em] text-white text-balance sm:text-[2.55rem]"
          >
            Un buen producto empieza entendiendo el problema.
          </motion.h2>
        </div>

        <motion.div
          initial={reduce ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.16, delayChildren: 0.45 },
            },
          }}
          className="relative mx-auto mt-12 w-full max-w-[21rem] sm:mt-16 sm:max-w-[24.5rem]"
        >
          <ProcessPaths reduce={reduce} />

          <ol className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4">
            {processSteps.map((step) => {
              const Icon = icons[step.icon]

              return (
                <motion.li
                  key={step.number}
                  variants={{
                    hidden: { opacity: 0, y: 32, scale: 0.9 },
                    show: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.55, ease },
                    },
                  }}
                >
                  <motion.article
                    whileHover={
                      reduce
                        ? undefined
                        : {
                            y: -6,
                            boxShadow: '0 12px 40px rgba(99,91,255,0.28)',
                            borderColor: 'rgba(99,91,255,0.85)',
                          }
                    }
                    transition={{ duration: 0.25 }}
                    className="flex h-full flex-col items-center rounded-[1.35rem] border border-accent/45 bg-[#141414] px-3 py-5 text-center shadow-[0_0_24px_rgba(99,91,255,0.16)] sm:px-4 sm:py-6"
                  >
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
                  </motion.article>
                </motion.li>
              )
            })}
          </ol>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mx-auto mt-12 max-w-md text-center"
        >
          <motion.div
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="relative mx-auto mb-7 h-11 w-px origin-top bg-gradient-to-b from-accent/80 to-transparent"
          >
            <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-lime shadow-[0_0_12px_#c7ff4a]" />
          </motion.div>
          <p className="text-[14px] leading-relaxed text-white/55 sm:text-[15px]">
            Así construyo: con criterio de producto, para que el resultado se
            pueda usar de verdad.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
