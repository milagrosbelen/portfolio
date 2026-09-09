import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from '../components/AnimatedSection'
import { Button } from '../components/Button'
import { SocialLinks } from '../components/SocialLinks'
import { SpaceBackdrop } from '../components/SpaceBackdrop'
import { profile } from '../data/profile'
import { SECTION_IDS } from '../lib/constants'

export function Contact() {
  return (
    <section
      id={SECTION_IDS.contact}
      data-nav-theme="dark"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#07060f] scroll-mt-0"
    >
      <SpaceBackdrop />
      <div className="site-container relative flex flex-1 flex-col items-center justify-center py-24 sm:py-28">
        <FadeIn className="mx-auto w-full max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 sm:text-xs">
            Contacto
          </p>
          <h2 className="mt-5 font-display text-[2.15rem] leading-[1.08] font-bold tracking-[-0.05em] text-white text-balance sm:mt-7 sm:text-[3.4rem] lg:text-[4rem]">
            ¿Tenés una idea?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/65 sm:mt-7 sm:text-lg">
            Contame qué querés construir y vemos juntos cuál puede ser la mejor
            solución.
          </p>
          <Button
            href={profile.whatsappUrl}
            external
            variant="inverse"
            size="lg"
            className="mt-8 sm:mt-10"
          >
            Hablemos de tu proyecto
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <SocialLinks links={profile.social} tone="light" className="mt-10 justify-center" />
        </FadeIn>
      </div>
    </section>
  )
}
