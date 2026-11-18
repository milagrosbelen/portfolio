import { ArrowUpRight } from 'lucide-react'
import type { Project, ProjectImage } from '../types'
import { Button } from './Button'
import { ProjectVideo } from './ProjectVideo'
import { cn } from '../lib/utils'

interface ProjectCaseProps {
  project: Project
  variant: 'media-lead' | 'copy-lead' | 'editorial'
}

function Areas({ areas }: { areas: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">Áreas</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {areas.map((area) => (
          <li
            key={area}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-foreground/90"
          >
            {area}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Fact({ label, children }: { label: string; children: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-black/25 p-5">
      <h4 className="text-xs font-semibold tracking-[0.16em] text-[#c4b5fd] uppercase">{label}</h4>
      <p className="mt-2 text-base leading-relaxed text-foreground/90">{children}</p>
    </div>
  )
}

function DemoLink({ project }: { project: Project }) {
  if (!project.demoUrl) {
    return <p className="text-sm text-muted">Este proyecto no tiene una demo pública.</p>
  }

  return (
    <Button href={project.demoUrl} external variant="secondary" size="sm">
      Ver el proyecto
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </Button>
  )
}

function Heading({ project }: { project: Project }) {
  return (
    <div>
      <p className="text-sm text-muted">
        <span className="font-semibold tracking-[0.16em] text-[#c4b5fd] uppercase">{project.number}</span>
        <span> · {project.origin}</span>
      </p>
      <h3 className="font-display mt-3 text-[2rem] leading-none font-bold tracking-[-0.045em] sm:text-5xl">
        {project.name}
      </h3>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{project.productType}</p>
    </div>
  )
}

function Technologies({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null

  return (
    <p className="text-sm leading-relaxed text-muted">
      <span className="font-semibold text-foreground">Tecnologías. </span>
      {items.join(' · ')}
    </p>
  )
}

function PhoneShot({ image, accent }: { image: ProjectImage; accent: string }) {
  return (
    <figure className="relative w-full">
      <div
        aria-hidden="true"
        className="absolute -inset-3 -z-10 rounded-[2rem] opacity-70 blur-2xl"
        style={{ background: accent }}
      />
      <div className="overflow-hidden rounded-[1.55rem] border border-white/15 bg-black shadow-[0_24px_50px_rgba(0,0,0,0.45)]">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className="mx-auto max-h-[340px] w-full object-contain object-top sm:max-h-[440px]"
        />
      </div>
      <figcaption className="mt-2 text-center text-xs text-muted">{image.caption}</figcaption>
    </figure>
  )
}

function ProjectStage({ project }: { project: Project }) {
  const wide = project.images.find((image) => image.kind === 'wide')
  const phones = project.images.filter((image) => image.kind === 'phone')

  if (wide && phones.length > 0) {
    return (
      <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#090712]">
        <div className="relative aspect-[16/10] min-h-[180px]">
          <img
            src={wide.src}
            alt={wide.alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/25 to-transparent" />
          <div
            aria-hidden="true"
            className="absolute -top-8 -right-8 h-36 w-36 rounded-full blur-3xl"
            style={{ background: project.accent, opacity: 0.45 }}
          />
          <p className="absolute top-4 left-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs text-white backdrop-blur-md">
            {wide.caption}
          </p>
        </div>
        <div className="relative z-10 -mt-16 flex justify-center px-4 pb-4 sm:-mt-28 sm:justify-end sm:px-6 sm:pb-6">
          {phones.map((image) => (
            <div key={image.src} className="w-[58%] max-w-[220px]">
              <PhoneShot image={image} accent={project.accent} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#090712] px-4 py-8 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: project.accent, opacity: 0.4 }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-32 w-32 rounded-full bg-[#793BFF]/25 blur-3xl"
      />
      <div
        className={cn(
          'relative flex items-end justify-center gap-4 sm:gap-6',
          phones.length > 1 && 'sm:-space-x-2',
        )}
      >
        {phones.map((image, index) => (
          <div
            key={image.src}
            className={cn(
              'min-w-0',
              phones.length > 1 ? 'w-[46%] max-w-[220px]' : 'w-[72%] max-w-[250px]',
              phones.length > 1 && index === 0 && 'sm:-rotate-6',
              phones.length > 1 && index === phones.length - 1 && 'sm:rotate-6',
            )}
          >
            <PhoneShot image={image} accent={project.accent} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProjectCase({ project, variant }: ProjectCaseProps) {
  const reverse = variant === 'copy-lead'

  return (
    <article
      id={`proyecto-${project.id}`}
      className="glass-card relative scroll-mt-28 overflow-hidden rounded-[1.75rem] p-4 sm:p-6 lg:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full blur-3xl"
        style={{ background: project.accent, opacity: 0.16 }}
      />
      <div className="relative h-1 w-16 rounded-full" style={{ background: project.accent }} />

      <div className="relative mt-5 grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
        <div className={cn('order-2', reverse ? 'lg:order-2' : 'lg:order-1')}>
          <ProjectStage project={project} />
        </div>
        <div className={cn('order-1', reverse ? 'lg:order-1' : 'lg:order-2')}>
          <Heading project={project} />
          <div className="mt-5">
            <Areas areas={project.areas} />
          </div>
          <div className="mt-4">
            <Technologies items={project.technologies} />
          </div>
          <div className="mt-6">
            <DemoLink project={project} />
          </div>
        </div>
      </div>

      <div className="relative mt-6 lg:mt-8">
        <ProjectVideo name={project.name} src={project.video.src} poster={project.video.poster} />
      </div>

      <div className="relative mt-4 grid gap-3 md:grid-cols-3">
        <Fact label="El problema">{project.problem}</Fact>
        <Fact label="La solución">{project.solution}</Fact>
        <Fact label="Mi participación">{project.work}</Fact>
      </div>
    </article>
  )
}
