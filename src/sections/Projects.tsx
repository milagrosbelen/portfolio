import { FadeIn } from '../components/AnimatedSection'
import { ProjectCase } from '../components/ProjectCase'
import { projects } from '../data/projects'
import { SECTION_IDS } from '../lib/constants'

export function Projects() {
  return (
    <section
      id={SECTION_IDS.projects}
      data-nav-theme="dark"
      className="bg-ink section-space"
    >
      <div className="site-container">
        <FadeIn>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40 sm:text-xs">
            Trabajo seleccionado
          </p>
          <h2 className="font-display mt-3 text-[1.85rem] font-bold tracking-[-0.045em] text-white sm:text-[2.55rem]">
            Productos que construí
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/55">
            Tres productos reales. Cada uno nació de un problema concreto.
          </p>
        </FadeIn>

        <div className="mt-12 flex flex-col gap-16 sm:gap-24">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.05}>
              <ProjectCase
                project={project}
                isLast={index === projects.length - 1}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
