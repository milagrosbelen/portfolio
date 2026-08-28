import { FadeIn } from '../components/AnimatedSection'
import { SECTION_IDS } from '../lib/constants'

export function Intro() {
  return (
    <section id={SECTION_IDS.intro} className="bg-mist pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="site-container text-center">
        <FadeIn className="mx-auto max-w-2xl">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-foreground">
            Enfoque
          </p>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
            Desarrollo software con propósito. Me interesa crear productos
            digitales que no solo funcionen, sino que sean claros, útiles y
            fáciles de usar.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
