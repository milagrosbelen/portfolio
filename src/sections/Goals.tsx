import { motion } from 'framer-motion'
import { Target } from 'lucide-react'
import { AnimatedSection, fadeUpItem } from '../components/AnimatedSection'
import { SectionHeader } from '../components/SectionHeader'
import { SECTION_IDS } from '../lib/constants'

const goals = [
  'Busco formar parte de un equipo donde pueda construir productos digitales de alto impacto, aprender de grandes desarrolladores y aportar una visión enfocada en experiencia de usuario y negocio.',
  'Mi objetivo a largo plazo es crear empresas tecnológicas que resuelvan problemas reales mediante software.',
]

export function Goals() {
  return (
    <AnimatedSection
      id={SECTION_IDS.goals}
      className="bg-slate-50/70 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Lo que busco"
          title="Impacto, aprendizaje y visión de producto"
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={fadeUpItem}
          className="mx-auto mt-12 max-w-3xl card-shadow rounded-[20px] border border-slate-100 bg-white p-8 sm:p-10"
        >
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Target className="h-6 w-6" />
          </div>

          <div className="space-y-6">
            {goals.map((goal) => (
              <p key={goal} className="text-base leading-relaxed text-slate-600 sm:text-lg">
                {goal}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
