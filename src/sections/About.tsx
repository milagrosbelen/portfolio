import { GraduationCap } from 'lucide-react'
import { FadeIn } from '../components/AnimatedSection'
import { aboutCopy } from '../data/about'
import { portrait } from '../data/media'
import { SECTION_IDS } from '../lib/constants'

export function About() {
  return (
    <section id={SECTION_IDS.about} className="relative scroll-mt-20 overflow-x-clip section-space">
      <span id="conocerme" className="absolute top-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#793BFF]/12 blur-3xl"
      />
      <div className="site-container">
        <FadeIn>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="flex items-center justify-center gap-4">
              <img
                src={portrait.src}
                alt={portrait.alt}
                width={portrait.width}
                height={portrait.height}
                loading="lazy"
                decoding="async"
                className="h-16 w-16 shrink-0 rounded-full border border-white/15 object-cover object-[center_18%] shadow-[0_8px_24px_rgba(121,59,255,0.28)] sm:h-20 sm:w-20"
              />
              <h2 className="font-display text-3xl leading-none font-bold tracking-[-0.04em] uppercase sm:text-5xl">
                Sobre mí
              </h2>
            </div>

            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {aboutCopy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto mt-8 flex max-w-md gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-left">
            <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-[#c4b5fd]" aria-hidden="true" />
            <div>
              <p className="font-semibold text-foreground">{aboutCopy.formation}</p>
              <p className="mt-1 text-sm text-muted">{aboutCopy.formationPlace}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
