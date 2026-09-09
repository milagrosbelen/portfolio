import { motion } from 'framer-motion'
import { MapPin, Wifi } from 'lucide-react'
import { Button } from '../components/Button'
import { SpaceBackdrop } from '../components/SpaceBackdrop'
import { profile } from '../data/profile'
import { SECTION_IDS } from '../lib/constants'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      data-nav-theme="dark"
      className="relative z-10 isolate flex h-[100svh] max-h-[100svh] flex-col overflow-hidden bg-[#07060f] scroll-mt-0 pt-16"
    >
      <SpaceBackdrop />

      <div className="site-container relative flex flex-1 flex-col items-center justify-center">
        <div className="mx-auto w-full max-w-3xl text-center">
          <motion.p
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45, ease }}
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 sm:text-xs"
          >
            {profile.role}
          </motion.p>

          <motion.h1
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.04, ease }}
            className="font-display mt-5 text-[2.15rem] leading-[1.08] font-bold tracking-[-0.05em] text-white text-balance sm:mt-7 sm:text-[3.4rem] lg:text-[4rem]"
          >
            Construyo productos digitales que resuelven{' '}
            <span className="text-accent [text-shadow:0_0_28px_rgba(99,91,255,0.45)]">
              problemas reales.
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease }}
            className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/65 sm:mt-7 sm:text-lg"
          >
            Desarrollo aplicaciones web, móviles y soluciones a medida para
            emprendedores, startups y empresas que quieren llevar sus ideas al
            siguiente nivel.
          </motion.p>

          <motion.div
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10"
          >
            <Button href={`#${SECTION_IDS.projects}`} size="md" variant="inverse">
              Ver proyectos
            </Button>
            <Button
              href={profile.whatsappUrl}
              external
              variant="inverse-secondary"
              size="md"
            >
              Hablemos
            </Button>
          </motion.div>

          <motion.ul
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, delay: 0.16, ease }}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:mt-8"
          >
            <li className="inline-flex items-center gap-1.5 text-[12px] text-white/55 sm:text-[13px]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              {profile.availability}
            </li>
            <li className="inline-flex items-center gap-1.5 text-[12px] text-white/55 sm:text-[13px]">
              <MapPin className="h-3.5 w-3.5 text-white/45" aria-hidden="true" />
              {profile.location}
            </li>
            <li className="inline-flex items-center gap-1.5 text-[12px] text-white/55 sm:text-[13px]">
              <Wifi className="h-3.5 w-3.5 text-white/45" aria-hidden="true" />
              Remoto
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
