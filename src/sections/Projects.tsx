import { ArrowRight, Dumbbell, Monitor, ShoppingBag, Smartphone, Wrench, type LucideIcon } from 'lucide-react'
import { FadeIn } from '../components/AnimatedSection'
import { SECTION_IDS } from '../lib/constants'
import { cn } from '../lib/utils'

type Visual = 'drivox' | 'curmy' | 'milogit'

interface FeaturedProject {
  id: string
  category: string
  icon: LucideIcon
  brand: string
  title: string
  description: string
  technologies?: string[]
  note?: string
  href?: string
  glow: string
  visual: Visual
}

const featured: FeaturedProject[] = [
  {
    id: 'drivox',
    category: 'Gestión de talleres',
    icon: Wrench,
    brand: 'DRIVOX',
    title: 'Sistema de gestión para talleres de motos.',
    description:
      'Desarrollé un sistema para digitalizar y organizar la gestión de un taller de motos, facilitando el seguimiento de trabajos, órdenes de servicio y la administración del taller.',
    technologies: ['React', 'Laravel', 'PostgreSQL'],
    note: 'Proyecto en producción · Cliente real.',
    href: 'https://taller-app-fawn.vercel.app/',
    glow: 'bg-[#8B35FF]/40',
    visual: 'drivox',
  },
  {
    id: 'curmy-store',
    category: 'E-commerce y gestión comercial',
    icon: ShoppingBag,
    brand: 'CURMY STORE',
    title: 'Plataforma de tienda y administración.',
    description:
      'Desarrollé una solución digital para mi emprendimiento que integra la tienda online con la administración del negocio, permitiendo organizar productos, stock, talles, ventas y seguimiento económico.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    href: 'https://catalogo-curmy-store.vercel.app/',
    glow: 'bg-[#14532d]/70',
    visual: 'curmy',
  },
  {
    id: 'milogit',
    category: 'Fitness y bienestar',
    icon: Dumbbell,
    brand: 'MILOGIT',
    title: 'Aplicación de entrenamiento.',
    description:
      'Aplicación digital orientada a organizar la experiencia de entrenamiento y presentar una interfaz clara para sus usuarios.',
    glow: 'bg-[#c2410c]/35',
    visual: 'milogit',
  },
]

export function Projects() {
  return (
    <section id={SECTION_IDS.projects} className="relative scroll-mt-20 overflow-x-clip section-space">
      <span id="trabajos" className="absolute top-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#8B35FF]/12 blur-3xl"
      />
      <div className="site-container">
        <FadeIn>
          <header className="mx-auto max-w-3xl text-center">
            <p className="flex items-center justify-center gap-2.5 text-[11px] font-semibold tracking-[0.18em] text-[#c4b5fd] uppercase sm:text-xs">
              <span aria-hidden="true" className="h-0.5 w-7 rounded-full bg-[#8B35FF]" />
              Proyectos destacados
              <span aria-hidden="true" className="h-0.5 w-7 rounded-full bg-[#8B35FF]" />
            </p>
            <h2 className="font-display mt-4 text-[2rem] leading-[1.08] font-bold tracking-[-0.045em] uppercase sm:text-5xl lg:text-[2.85rem]">
              Ideas que se convierten en <span className="text-[#B65CFF]">soluciones.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              Desarrollo productos digitales pensados para resolver necesidades reales, combinando tecnología,
              funcionalidad y una buena experiencia de usuario.
            </p>
          </header>

          <ul className="mt-10 grid items-stretch gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-7">
            {featured.map((project) => (
              <li key={project.id} id={`proyecto-${project.id}`} className="scroll-mt-28">
                <article className="flex h-full flex-col rounded-[1.6rem] border border-white/10 bg-[#0c0a16] p-3 shadow-[0_22px_50px_rgba(0,0,0,0.32)] sm:p-4">
                  <div className="flex items-center justify-between gap-3 px-1.5 pt-1">
                    <p className="inline-flex min-w-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] leading-snug font-medium text-[#e4dcf8]">
                      <project.icon className="h-3.5 w-3.5 shrink-0 text-[#c4b5fd]" aria-hidden="true" />
                      <span>{project.category}</span>
                    </p>
                    <span className="flex shrink-0 items-center gap-1.5 text-white/35" aria-hidden="true">
                      <Monitor className="h-3.5 w-3.5" />
                      <Smartphone className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  <ProjectVisual project={project} />

                  <div className="flex flex-1 flex-col px-2 pt-4 pb-1 lg:px-3 lg:pt-7">
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-[#c4b5fd] uppercase">
                      {project.brand}
                    </p>
                    <h3 className="font-display mt-1.5 text-[1.45rem] leading-[1.12] font-bold tracking-[-0.03em] sm:text-[1.65rem] lg:text-[1.45rem]">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
                    {project.technologies ? (
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {project.technologies.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-[#efeafc]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {project.note ? <p className="mt-3 text-xs font-medium text-[#d6ccff]">{project.note}</p> : null}
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-semibold text-white"
                      >
                        Ver proyecto
                        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#8B35FF]">
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                      </a>
                    ) : null}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}

function ProjectVisual({ project }: { project: FeaturedProject }) {
  return (
    <div className="relative mt-3 h-64 overflow-hidden rounded-[1.25rem] bg-[#07060e] sm:h-72 lg:mt-4 lg:h-[230px]">
      <div aria-hidden="true" className={cn('absolute inset-x-8 top-6 h-28 rounded-full blur-3xl', project.glow)} />
      {project.visual === 'drivox' ? <DrivoxStage /> : null}
      {project.visual === 'curmy' ? <CurmyStage /> : null}
      {project.visual === 'milogit' ? <MilogitStage /> : null}
    </div>
  )
}

function DrivoxStage() {
  return (
    <PhoneFrame
      src="/projects/drivox-panel.png"
      alt="Panel de DRIVOX con ingresos del mes, servicios, clientes y motos ingresadas."
      className="absolute bottom-0 left-1/2 h-[98%] w-[52%] -translate-x-1/2"
    />
  )
}

function CurmyStage() {
  return (
    <PhoneFrame
      src="/projects/curmy-inicio.png"
      alt="Inicio de CURMY STORE con búsqueda, categorías y productos de la tienda."
      className="absolute bottom-0 left-1/2 h-[98%] w-[52%] -translate-x-1/2"
    />
  )
}

function MilogitStage() {
  return (
    <PhoneFrame
      src="/projects/milogit-semana.png"
      alt="Plan semanal de MILOGIT con la sesión del día y los ejercicios."
      className="absolute bottom-0 left-1/2 h-[98%] w-[52%] -translate-x-1/2"
    />
  )
}

function PhoneFrame({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn('overflow-hidden rounded-[1.15rem] border border-white/15 bg-black shadow-[0_16px_36px_rgba(0,0,0,0.45)]', className)}>
      <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
    </div>
  )
}
