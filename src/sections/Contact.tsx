import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from '../components/AnimatedSection'
import { Button } from '../components/Button'
import { SocialLinks } from '../components/SocialLinks'
import { profile } from '../data/profile'
import { SECTION_IDS } from '../lib/constants'

export function Contact() {
  return (
    <section
      id={SECTION_IDS.contact}
      data-nav-theme="dark"
      className="relative overflow-hidden bg-ink section-space"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-72 w-[28rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 h-80 w-[32rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]"
      />
      <div className="site-container relative text-center">
        <FadeIn className="mx-auto max-w-2xl">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/45">
            Contacto
          </p>
          <h2 className="mt-5 font-display text-[2.6rem] leading-[1.05] font-bold tracking-[-0.05em] text-white sm:text-5xl lg:text-[3.6rem]">
            ¿Tenés una idea?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/60 sm:text-base">
            Contame qué querés construir y vemos juntos cuál puede ser la mejor
            solución.
          </p>
          <Button
            href={profile.whatsappUrl}
            external
            variant="inverse"
            size="lg"
            className="mt-9"
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
