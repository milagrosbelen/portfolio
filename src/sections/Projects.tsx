import { SectionHeader } from '../components/SectionHeader'
import { ProjectShowcase } from '../components/ProjectShowcase'
import { projects } from '../data/projects'
import { SECTION_IDS } from '../lib/constants'

export function Projects() {
  return (
    <section id={SECTION_IDS.projects} className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Proyectos"
          title="Productos que resuelven problemas reales"
          description="Cada proyecto nace de una necesidad concreta: descubrir comercios, gestionar operaciones o vender online."
        />

        <div className="mt-8 divide-y divide-slate-100">
          {projects.map((project, index) => (
            <ProjectShowcase key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
