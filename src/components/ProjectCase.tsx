import { ArrowDown, ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import type { Project } from '../types'
import { PhoneMockup } from './DeviceFrame'

interface ProjectCaseProps {
  project: Project
  isLast?: boolean
}

function CaseStep({
  number,
  title,
  children,
  accent,
}: {
  number: string
  title: string
  children: ReactNode
  accent: string
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold tracking-[0.08em] text-white"
          style={{ borderColor: `${accent}99` }}
        >
          {number}
        </span>
        <h4 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white">
          {title}
        </h4>
      </div>
      <p className="mt-3 pl-10 text-[14px] leading-relaxed text-white/60">
        {children}
      </p>
    </div>
  )
}

export function ProjectCase({ project, isLast = false }: ProjectCaseProps) {
  return (
    <article className="relative grid grid-cols-[18px_minmax(0,1fr)] gap-5 sm:grid-cols-[22px_minmax(0,1fr)] sm:gap-7">
      <div className="relative flex h-full min-h-full flex-col items-center pt-2" aria-hidden="true">
        <span
          className="relative z-10 h-3.5 w-3.5 shrink-0 rounded-full ring-4 ring-ink"
          style={{ background: project.accent, boxShadow: `0 0 14px ${project.accent}` }}
        />
        <span
          className="mt-2 w-[2.5px] min-h-[5rem] flex-1 rounded-full"
          style={{
            background: isLast
              ? `linear-gradient(180deg, ${project.accent} 0%, ${project.accent} 78%, ${project.accent}aa 100%)`
              : project.accent,
          }}
        />
      </div>

      <div className="relative min-w-0 overflow-hidden rounded-[1.5rem] border border-white/10 pb-10 transition duration-300 hover:border-white/20 hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 90% 70% at 78% 28%, ${project.accent}55 0%, transparent 58%)`,
          }}
        />

        <div className="relative grid px-5 pt-8 sm:px-8 sm:pt-10 lg:grid-cols-[minmax(0,1fr)_200px] lg:items-start lg:gap-12 lg:px-10 lg:pt-12">
          <div className="min-w-0">
            <span className="inline-flex rounded-full bg-lime px-3 py-1 text-[11px] font-semibold text-foreground">
              {project.origin}
            </span>

            <div className="mt-4 flex items-center gap-3">
              <h3 className="font-display text-[1.85rem] font-bold tracking-[-0.045em] text-white sm:text-[2.4rem]">
                {project.name}
              </h3>
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver ${project.name}`}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-foreground"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </div>

            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/60">
              {project.tagline}
            </p>
          </div>

          <div className="relative mx-auto mt-8 w-[148px] transition duration-300 hover:-translate-y-1 lg:row-span-2 lg:mx-0 lg:mt-0 lg:w-[200px]">
            <PhoneMockup
              src={project.previewImage}
              alt={`${project.name} — aplicación`}
              float={false}
              shadow="project"
              className="relative z-10 w-full"
            />
          </div>

          <div className="mt-10 max-w-lg space-y-7 lg:mt-12">
            <CaseStep number="01" title="El problema" accent={project.accent}>
              {project.problem}
            </CaseStep>

            <div className="flex justify-start pl-[9px]" aria-hidden="true">
              <ArrowDown className="h-4 w-4 text-white/25" />
            </div>

            <CaseStep number="02" title="La solución" accent={project.accent}>
              {project.solution}
            </CaseStep>

            <div className="flex justify-start pl-[9px]" aria-hidden="true">
              <ArrowDown className="h-4 w-4 text-white/25" />
            </div>

            <CaseStep number="03" title="Mi trabajo" accent={project.accent}>
              {project.work}
            </CaseStep>
          </div>
        </div>
      </div>
    </article>
  )
}
