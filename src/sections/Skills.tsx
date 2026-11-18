import { ArrowRight, TrendingUp } from 'lucide-react'
import type { ReactNode } from 'react'
import { FadeIn } from '../components/AnimatedSection'
import { Button } from '../components/Button'
import { SECTION_IDS } from '../lib/constants'

const skills: { name: string; icon: ReactNode }[] = [
  { name: 'React', icon: <ReactMark /> },
  { name: 'Next.js', icon: <NextMark /> },
  { name: 'TypeScript', icon: <TypeScriptMark /> },
  { name: 'Tailwind', icon: <TailwindMark /> },
  { name: 'Node.js', icon: <NodeMark /> },
  { name: 'Git', icon: <GitMark /> },
]

export function Skills() {
  return (
    <section id="habilidades" className="relative scroll-mt-20 overflow-x-clip section-space lg:pt-8 lg:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-56 w-56 rounded-full bg-[#793BFF]/20 blur-3xl"
      />
      <div className="site-container">
        <FadeIn>
          <div className="lg:grid lg:grid-cols-[minmax(210px,0.82fr)_minmax(0,1.35fr)_minmax(190px,0.72fr)] lg:items-center lg:gap-8">
            <div>
              <p className="flex items-center gap-2.5 text-sm font-medium text-[#c4b5fd]">
                <span aria-hidden="true" className="h-0.5 w-7 rounded-full bg-[#793BFF]" />
                Mis habilidades
              </p>
              <h2 className="font-display mt-3 text-[2rem] leading-[1.05] font-bold tracking-[-0.04em] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.02]">
                Tecnologías y herramientas
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                Trabajo con las tecnologías que impulsan el desarrollo moderno.
              </p>
              <div className="mt-6 hidden lg:block">
                <Button href={`#${SECTION_IDS.technologies}`} variant="secondary" className="h-11 px-5 text-sm">
                  Ver todas
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>

            <ul className="mt-6 grid grid-cols-3 gap-2.5 sm:gap-3 lg:mt-0 lg:gap-4">
              {skills.map((skill) => (
                <li key={skill.name}>
                  <div className="flex h-full items-center gap-1.5 rounded-2xl border border-white/10 bg-[#14101c] px-2 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:gap-2 sm:px-3 sm:py-3 lg:aspect-square lg:flex-col lg:justify-center lg:gap-4 lg:rounded-[1.35rem] lg:px-3 lg:py-6">
                    <span className="grid h-6 w-6 shrink-0 place-items-center lg:h-11 lg:w-11">{skill.icon}</span>
                    <span className="truncate text-[11px] font-medium text-foreground sm:text-sm">{skill.name}</span>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="relative mt-4 hidden overflow-hidden rounded-[1.5rem] border border-[#8b5cf6]/35 bg-[linear-gradient(180deg,rgba(121,59,255,0.22),rgba(16,10,32,0.55))] p-6 lg:mt-0 lg:block lg:h-full lg:min-h-[280px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-8 -right-6 h-28 w-28 rounded-full bg-[#793BFF]/35 blur-2xl"
              />
              <TrendingUp className="relative h-8 w-8 text-[#d6ccff]" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="font-display relative mt-8 text-2xl leading-tight font-semibold tracking-[-0.03em]">
                Desarrollo con propósito
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-[#d5cce8]">
                Creo soluciones escalables, optimizadas y pensadas para el usuario.
              </p>
            </aside>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function ReactMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      <circle cx="12" cy="12" r="2.05" fill="#61dafb" />
      <ellipse cx="12" cy="12" rx="9.2" ry="3.5" fill="none" stroke="#61dafb" strokeWidth="1.35" />
      <ellipse
        cx="12"
        cy="12"
        rx="9.2"
        ry="3.5"
        fill="none"
        stroke="#61dafb"
        strokeWidth="1.35"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9.2"
        ry="3.5"
        fill="none"
        stroke="#61dafb"
        strokeWidth="1.35"
        transform="rotate(120 12 12)"
      />
    </svg>
  )
}

function NextMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#0c0c0f" stroke="#f4f1ff" strokeWidth="0.6" />
      <path d="M8.2 16.4V7.6h1.7l4.15 6.15V7.6H15.8v8.8h-1.65L9.9 10.15v6.25H8.2Z" fill="#f6f3ff" />
    </svg>
  )
}

function TypeScriptMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      <rect x="1.5" y="1.5" width="21" height="21" rx="4" fill="#3178c6" />
      <text
        x="12"
        y="16.2"
        textAnchor="middle"
        fill="#fff"
        fontSize="9"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
      >
        TS
      </text>
    </svg>
  )
}

function TailwindMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      <path
        d="M12 6.2c-2.2 0-3.6 1.1-4.2 3.3.7-1 1.5-1.4 2.5-1.2.6.1 1 .4 1.5.9.8.8 1.7 1.7 3.6 1.7 2.2 0 3.6-1.1 4.2-3.3-.7 1-1.5 1.4-2.5 1.2-.6-.1-1-.4-1.5-.9-.8-.8-1.7-1.7-3.6-1.7ZM7.8 12.7c-2.2 0-3.6 1.1-4.2 3.3.7-1 1.5-1.4 2.5-1.2.6.1 1 .4 1.5.9.8.8 1.7 1.7 3.6 1.7 2.2 0 3.6-1.1 4.2-3.3-.7 1-1.5 1.4-2.5 1.2-.6-.1-1-.4-1.5-.9-.8-.8-1.7-1.7-3.6-1.7Z"
        fill="#38bdf8"
      />
    </svg>
  )
}

function NodeMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      <path d="M12 2.2 20.8 7.1v9.8L12 21.8 3.2 16.9V7.1L12 2.2Z" fill="#3c873a" />
      <path d="M12 6.2 8.1 12l3.9 5.8 3.9-5.8L12 6.2Z" fill="#fff" />
    </svg>
  )
}

function GitMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      <path
        d="M21.1 10.4 13.6 2.9a2.2 2.2 0 0 0-3.1 0L8.7 4.7l2.4 2.4a2.6 2.6 0 0 1 3.3 3.3l2.3 2.3a2.6 2.6 0 1 1-1.6 1.5l-2.1-2.1v5.5a2.6 2.6 0 1 1-2.1 0V11.8a2.6 2.6 0 0 1-1.4-3.4L7.2 6.1 2.9 10.4a2.2 2.2 0 0 0 0 3.1l7.5 7.5a2.2 2.2 0 0 0 3.1 0l7.6-7.5a2.2 2.2 0 0 0 0-3.1Z"
        fill="#f05032"
      />
    </svg>
  )
}
