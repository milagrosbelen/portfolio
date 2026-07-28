import { AnimatedSection } from '../components/AnimatedSection'
import { SectionHeader } from '../components/SectionHeader'
import { TimelineItem } from '../components/TimelineItem'
import { experience } from '../data/experience'
import { SECTION_IDS } from '../lib/constants'

export function Experience() {
  return (
    <AnimatedSection
      id={SECTION_IDS.experience}
      className="border-t border-slate-100 bg-white py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experiencia"
          title="Mi recorrido construyendo software"
          description="Desde productos propios hasta desarrollo dentro de una startup, siempre con foco en calidad y experiencia."
        />

        <div className="mt-14 max-w-3xl">
          {experience.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
