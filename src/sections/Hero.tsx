import { motion } from 'framer-motion'
import { MapPin, Wifi } from 'lucide-react'
import { Button } from '../components/Button'
import { HeroSetup } from '../components/HeroSetup'
import { profile } from '../data/profile'
import { SECTION_IDS } from '../lib/constants'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      data-nav-theme="dark"
      className="relative z-10 isolate flex h-[100svh] max-h-[100svh] flex-col overflow-hidden bg-ink scroll-mt-0 pt-16"
    >
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2"
      >
        <div className="hero-orb h-[22rem] w-[42rem] rounded-full bg-accent/40 blur-[120px]" />
      </div>
      <div
        aria-hidden="true"
        className="hero-orb-delayed pointer-events-none absolute right-[-20%] top-[30%] h-72 w-72 rounded-full bg-accent/20 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-8rem] left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="hero-grain pointer-events-none absolute inset-0 mix-blend-overlay"
      />

      <div className="site-container relative shrink-0 pt-4 sm:pt-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12, letterSpacing: '0.38em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.22em' }}
            transition={{ duration: 0.8, ease }}
            className="text-[11px] font-semibold uppercase text-white/45 sm:text-xs"
          >
            {profile.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.08, ease }}
            className="font-display mt-3 text-[1.85rem] leading-[1.08] font-bold tracking-[-0.05em] text-white text-balance sm:mt-5 sm:text-[3.2rem] lg:text-[3.6rem]"
          >
            Construyo productos digitales que resuelven{' '}
            <span className="text-accent [text-shadow:0_0_28px_rgba(99,91,255,0.45)]">
              problemas reales.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mx-auto mt-3 hidden max-w-xl text-[15px] leading-relaxed text-white/60 sm:mt-5 sm:block sm:text-base"
          >
            Desarrollo aplicaciones web, móviles y soluciones a medida para
            emprendedores, startups y empresas que quieren llevar sus ideas al
            siguiente nivel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-8"
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
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4, ease }}
            className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:mt-6"
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

      <div className="relative mt-3 min-h-0 flex-1 sm:mt-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-1/2 h-52 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(99,91,255,0.4),transparent_70%)] blur-2xl"
        />
        <HeroSetup />
      </div>
    </section>
  )
}
