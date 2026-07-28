import { motion } from 'framer-motion'
import { AnimatedSection, fadeUpItem } from '../components/AnimatedSection'
import { Badge } from '../components/Badge'
import { SectionHeader } from '../components/SectionHeader'
import { technologies } from '../data/technologies'
import { SECTION_IDS } from '../lib/constants'

export function Technologies() {
  return (
    <AnimatedSection
      id={SECTION_IDS.tech}
      className="bg-slate-50/70 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tecnologías"
          title="Stack con el que construyo productos"
          description="Herramientas modernas para desarrollar aplicaciones rápidas, escalables y bien diseñadas."
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={fadeUpItem}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {technologies.map((tech, index) => (
            <Badge key={tech.name} label={tech.name} delay={index * 0.03} />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
