import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../types'
import { PhoneMockup } from './DeviceFrame'

interface ProjectCaseProps {
  project: Project
}

function Header({ project }: { project: Project }) {
  return (
    <header className="text-center">
      <h3 className="text-[15px] font-semibold tracking-tight text-white">
        <span className="mr-3" style={{ color: project.accent }}>
          {project.number}
        </span>
        {project.name}
      </h3>
      <p className="mt-1 text-sm text-white/55">{project.tagline}</p>
    </header>
  )
}

function MetaBar({ project }: { project: Project }) {
  return (
    <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-5 sm:flex-row sm:justify-between">
      <dl className="flex flex-wrap gap-x-6 gap-y-1 text-[13px]">
        <div>
          <dt className="inline text-white/45">Tipo</dt>
          <dd className="ml-1.5 inline text-white">{project.type}</dd>
        </div>
        <div>
          <dt className="inline text-white/45">Rol</dt>
          <dd className="ml-1.5 inline text-white">{project.role}</dd>
        </div>
      </dl>
      {project.demoUrl && (
        <ProjectLink project={project} />
      )}
    </div>
  )
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

function FloatingPhones({ project }: { project: Project }) {
  const screens = [project.previewImage, ...project.galleryImages]
  const dual = screens.length > 1

  return (
    <div className="relative mx-auto flex max-w-lg items-end justify-center py-6 sm:py-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl sm:h-72 sm:w-72"
        style={{ background: project.accent, opacity: 0.22 }}
      />
      {dual ? (
        <div className="relative flex h-[380px] w-full items-end justify-center sm:h-[430px]">
          <PhoneMockup
            src={screens[0]}
            alt={`${project.name} — inicio`}
            className="absolute bottom-6 left-[4%] z-10 w-[160px] -rotate-6 sm:left-[12%] sm:w-[230px]"
          />
          <PhoneMockup
            src={screens[1]}
            alt={`${project.name} — catálogo`}
            delay
            className="absolute right-[4%] bottom-0 z-20 w-[160px] rotate-6 sm:right-[12%] sm:w-[230px]"
          />
        </div>
      ) : (
        <PhoneMockup
          src={screens[0]}
          alt={`${project.name} — aplicación`}
          className="relative z-10 w-[200px] -rotate-2 sm:w-[230px]"
        />
      )}
    </div>
  )
}

export function ProjectCase({ project }: ProjectCaseProps) {
  return (
    <article
      data-nav-theme="dark"
      className="overflow-hidden"
      style={{
        background: `linear-gradient(180deg, color-mix(in srgb, ${project.accent} 16%, #0a0a0a) 0%, #0a0a0a 42%)`,
      }}
    >
      <div className="site-container py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:hidden">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: project.accent }}>
              {project.number}
            </p>
            <h3 className="mt-2 text-[17px] font-semibold tracking-tight text-white">
              {project.name}
            </h3>
            <p className="mt-1 text-[13px] leading-snug text-white/55">
              {project.tagline}
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-white/60">
              {project.description}
            </p>
            <dl className="mt-4 space-y-1 text-[12px]">
              <div>
                <dt className="inline text-white/45">Tipo</dt>
                <dd className="ml-1.5 inline text-white">{project.type}</dd>
              </div>
              <div>
                <dt className="inline text-white/45">Rol</dt>
                <dd className="ml-1.5 inline text-white">{project.role}</dd>
              </div>
            </dl>
            <div className="mt-4">
              <ProjectLink project={project} />
            </div>
          </div>

          <div className="relative shrink-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
              style={{ background: project.accent, opacity: 0.28 }}
            />
            <PhoneMockup
              src={project.previewImage}
              alt={`${project.name} — aplicación`}
              className="relative z-10 w-[122px] rotate-3"
            />
          </div>
        </div>

        <div className="hidden md:block">
          <Header project={project} />
          <FloatingPhones project={project} />
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm leading-relaxed text-white/60">
            {project.description}
          </p>
          <div className="mt-5">
            <MetaBar project={project} />
          </div>
        </div>
      </div>
    </article>
  )
}
