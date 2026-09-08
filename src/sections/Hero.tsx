import { motion } from 'framer-motion'
import { MapPin, Wifi } from 'lucide-react'
import { Button } from '../components/Button'
import { PhoneCarousel } from '../components/PhoneCarousel'
import { projects } from '../data/projects'
import { profile } from '../data/profile'
import { SECTION_IDS } from '../lib/constants'

function HeroPhones() {
  const drivox = projects.find((project) => project.id === 'drivox')
  const curmy = projects.find((project) => project.id === 'curmy-store')
  const milogit = projects.find((project) => project.id === 'milogit')

  if (!drivox || !curmy || !milogit) return null

  return <PhoneCarousel phones={[drivox, curmy, milogit]} />
}

export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative z-10 bg-background scroll-mt-0 pt-16 pb-14 sm:pb-16 lg:pb-16"
    >
      <div className="site-container grid items-center gap-8 py-8 sm:gap-10 sm:py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12 lg:py-14">
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display text-[2.05rem] leading-[1.08] font-bold tracking-[-0.05em] text-foreground text-balance sm:mt-0 sm:text-[3rem] lg:text-[3.25rem]"
          >
            Construyo productos digitales que resuelven{' '}
            <span className="text-accent">problemas reales.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:mt-6 sm:text-base lg:mx-0"
          >
            Desarrollo aplicaciones web, móviles y soluciones a medida para
            emprendedores, startups y empresas que quieren llevar sus ideas al
            siguiente nivel.
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

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start"
          >
            <li className="inline-flex items-center gap-1.5 text-[12px] text-muted sm:text-[13px]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-lime opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              {profile.availability}
            </li>
            <li className="inline-flex items-center gap-1.5 text-[12px] text-muted sm:text-[13px]">
              <MapPin className="h-3.5 w-3.5 text-foreground/55" aria-hidden="true" />
              {profile.location}
            </li>
            <li className="inline-flex items-center gap-1.5 text-[12px] text-muted sm:text-[13px]">
              <Wifi className="h-3.5 w-3.5 text-foreground/55" aria-hidden="true" />
              Remoto
            </li>
          </motion.ul>
        </div>

        <HeroPhones />
      </div>
    </section>
  )
}
