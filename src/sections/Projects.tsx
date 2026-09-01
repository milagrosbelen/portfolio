import { FadeIn } from '../components/AnimatedSection'
import { ProjectCase } from '../components/ProjectCase'
import { SectionHeader } from '../components/SectionHeader'
import { projects } from '../data/projects'
import { SECTION_IDS } from '../lib/constants'

export function Projects() {
  return (
    <section
      id={SECTION_IDS.projects}
      data-nav-theme="dark"
      className="bg-ink"
    >
      <div className="site-container pt-24 pb-10 sm:pt-28 sm:pb-12">
        <FadeIn>
          <SectionHeader
            title="Proyectos"
            description="Productos y soluciones digitales que desarrollé."
            light
          />
        </FadeIn>
      </div>

      <div>
        {projects.map((project) => (
          <ProjectCase key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
