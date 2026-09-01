import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../types'
import { PhoneMockup } from './DeviceFrame'

interface ProjectCaseProps {
  project: Project
}

function ProjectLink({ project }: { project: Project }) {
  if (!project.demoUrl) return null

  return (
    <a
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] transition-opacity hover:opacity-80"
      style={{ color: project.accent }}
    >
      Ver proyecto
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  )
}

export function ProjectCase({ project }: ProjectCaseProps) {
  return (
    <article
      data-nav-theme="dark"
      className="overflow-x-hidden"
      style={{
        background: `linear-gradient(180deg, color-mix(in srgb, ${project.accent} 12%, #0c0c0c) 0%, #0c0c0c 48%)`,
      }}
    >
      <div className="site-container py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
          <div className="min-w-0">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.16em] md:text-xs"
              style={{ color: project.accent }}
            >
              {project.number}
            </p>
            <h3 className="mt-2 text-[17px] font-semibold tracking-tight text-white md:text-[28px] lg:text-[32px]">
              {project.name}
            </h3>
            <p className="mt-1 text-[13px] leading-snug text-white/55 md:mt-2 md:text-base">
              {project.tagline}
            </p>
            <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-white/60 md:mt-5 md:text-[15px]">
              {project.description}
            </p>
            <dl className="mt-4 space-y-1 text-[12px] md:mt-6 md:space-y-2 md:text-[13px]">
              <div>
                <dt className="inline text-white/45">Tipo</dt>
                <dd className="ml-1.5 inline text-white">{project.type}</dd>
              </div>
              <div>
                <dt className="inline text-white/45">Rol</dt>
                <dd className="ml-1.5 inline text-white">{project.role}</dd>
              </div>
            </dl>
            <div className="mt-4 md:mt-6">
              <ProjectLink project={project} />
            </div>
          </div>

          <div className="relative shrink-0 py-2 sm:py-4">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl md:h-56 md:w-56 md:blur-3xl"
              style={{ background: project.accent, opacity: 0.28 }}
            />
            <PhoneMockup
              src={project.previewImage}
              alt={`${project.name} — aplicación`}
              className="relative z-10 w-[122px] rotate-3 sm:w-[160px] md:w-[220px] lg:w-[248px]"
            />
          </div>
        </div>
      </div>
    </article>
  )
}
