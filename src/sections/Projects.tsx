import { FadeIn } from '../components/AnimatedSection'
import { ProjectCase } from '../components/ProjectCase'
import { SectionHeader } from '../components/SectionHeader'
import { projects } from '../data/projects'
import { SECTION_IDS } from '../lib/constants'

export function Projects() {
  return (
    <section id={SECTION_IDS.projects} className="bg-background">
      <div className="site-container pt-24 pb-16 sm:pt-28 sm:pb-20">
        <FadeIn>
          <SectionHeader
            title="Proyectos seleccionados"
            description="Productos y soluciones digitales que desarrollé."
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
