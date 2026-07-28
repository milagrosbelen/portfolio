import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { Button } from '../components/Button'
import { HeroMockups } from '../components/HeroMockups'
import { GitHubIcon, LinkedInIcon } from '../components/icons/BrandIcons'
import { profile } from '../data/profile'
import { SECTION_IDS } from '../lib/constants'

export function Hero() {
  const github = profile.social.find((link) => link.icon === 'github')
  const linkedin = profile.social.find((link) => link.icon === 'linkedin')

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative overflow-hidden scroll-mt-24 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:min-h-screen lg:pt-36 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base font-medium text-slate-500 sm:text-lg"
          >
            Hola 👋
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Soy {profile.name.split(' ')[0]}
            <span className="block text-gradient">{profile.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg font-medium text-slate-700 sm:text-xl"
          >
            {profile.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg"
          >
            {profile.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href={`#${SECTION_IDS.projects}`}>Ver proyectos</Button>
            <Button href={profile.cvUrl} variant="outline" download="cv-milagros-pedrasa.pdf">
              Descargar CV
              <Download className="h-4 w-4" />
            </Button>
            {github && (
              <Button href={github.href} external variant="ghost">
                GitHub
                <GitHubIcon className="h-4 w-4" />
              </Button>
            )}
            {linkedin && (
              <Button href={linkedin.href} external variant="ghost">
                LinkedIn
                <LinkedInIcon className="h-4 w-4" />
              </Button>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:pl-4"
        >
          <HeroMockups />
        </motion.div>
      </div>

      <motion.a
        href={`#${SECTION_IDS.about}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 transition-colors hover:text-primary lg:flex"
        aria-label="Scroll to about"
      >
        <span className="text-xs font-medium uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  )
}
