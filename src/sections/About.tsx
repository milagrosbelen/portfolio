import { motion } from 'framer-motion'
import { AnimatedSection, fadeUpItem } from '../components/AnimatedSection'
import { SectionHeader } from '../components/SectionHeader'
import { profile } from '../data/profile'
import { SECTION_IDS } from '../lib/constants'

export function About() {
  return (
    <AnimatedSection
      id={SECTION_IDS.about}
      className="border-t border-slate-100 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sobre mí"
          title="Construyo productos digitales con visión de negocio"
          description="Combino desarrollo fullstack con sensibilidad por la experiencia de usuario y el impacto real en el producto."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {profile.about.map((paragraph, index) => (
            <motion.div
              key={paragraph}
              variants={fadeUpItem}
              className="card-shadow rounded-[20px] border border-slate-100 bg-white p-6 transition-shadow duration-300 hover:card-shadow-hover sm:p-8"
            >
              <span className="font-display text-sm font-semibold text-primary">
                0{index + 1}
              </span>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{paragraph}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
