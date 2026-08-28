import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { PhoneMockup } from '../components/DeviceFrame'
import { projects } from '../data/projects'
import { profile } from '../data/profile'
import { SECTION_IDS } from '../lib/constants'

function HeroPhones() {
  const drivox = projects.find((project) => project.id === 'drivox')
  const curmy = projects.find((project) => project.id === 'curmy-store')
  const milogit = projects.find((project) => project.id === 'milogit')

  if (!drivox || !curmy || !milogit) return null

  return (
    <div className="flex items-center justify-center overflow-visible px-1 pt-3 pb-12 sm:pb-14 lg:pt-2 lg:pb-6">
      <PhoneMockup
        src={drivox.previewImage}
        alt={`${drivox.name} — aplicación`}
        eager
        float={false}
        shadow="hero"
        className="relative z-10 w-[118px] -mr-8 -rotate-[6deg] sm:w-[152px] sm:-mr-10 lg:w-[180px] lg:-mr-12"
      />
      <PhoneMockup
        src={curmy.previewImage}
        alt={`${curmy.name} — aplicación`}
        eager
        float={false}
        shadow="hero"
        className="relative z-20 w-[132px] sm:w-[172px] lg:w-[204px]"
      />
      <PhoneMockup
        src={milogit.previewImage}
        alt={`${milogit.name} — aplicación`}
        eager
        float={false}
        shadow="hero"
        className="relative z-10 w-[118px] -ml-8 rotate-[6deg] sm:w-[152px] sm:-ml-10 lg:w-[180px] lg:-ml-12"
      />
    </div>
  )
}

export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative z-10 bg-background scroll-mt-0 pt-16 pb-14 sm:pb-16 lg:pb-16"
    >
      <div className="site-container grid items-center gap-8 py-8 sm:gap-10 sm:py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 lg:py-14">
        <div className="text-center lg:max-w-xl lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted sm:text-[12px]"
          >
            {profile.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display mt-5 text-[2.15rem] leading-[1.12] font-semibold tracking-[-0.045em] text-foreground text-balance sm:mt-6 sm:text-[3.1rem] lg:text-[3.35rem]"
          >
            Convierto ideas en{' '}
            <span className="text-accent">soluciones digitales.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted sm:mt-5 sm:text-base lg:mx-0"
          >
            Software y productos digitales para negocios reales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8 lg:justify-start"
          >
            <Button href={`#${SECTION_IDS.projects}`} size="md">
              Ver proyectos
            </Button>
            <Button href={profile.whatsappUrl} external variant="secondary" size="md">
              Hablemos
            </Button>
          </motion.div>
        </div>

        <HeroPhones />
      </div>
    </section>
  )
}
