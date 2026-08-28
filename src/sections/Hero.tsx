import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { profile } from '../data/profile'
import { SECTION_IDS } from '../lib/constants'

export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="bg-background scroll-mt-0 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28"
    >
      <div className="site-container text-center">
        <div className="mx-auto max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[12px] font-medium uppercase tracking-[0.16em] text-muted"
          >
            {profile.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 font-display text-[2.5rem] leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[3.25rem] lg:text-[3.6rem]"
          >
            Convierto ideas
            <span className="block">en soluciones digitales.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-muted sm:text-base"
          >
            Desarrollo software, sitios web y herramientas digitales para
            transformar ideas y problemas reales en productos funcionales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href={`#${SECTION_IDS.projects}`} size="md">
              Ver proyectos
            </Button>
            <Button href={profile.whatsappUrl} external variant="secondary" size="md">
              Hablemos
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-[13px] text-muted"
          >
            {profile.location} · {profile.availability}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
