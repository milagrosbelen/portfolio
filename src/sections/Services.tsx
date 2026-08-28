import { FadeIn } from '../components/AnimatedSection'
import { SectionHeader } from '../components/SectionHeader'
import { services } from '../data/services'
import { SECTION_IDS } from '../lib/constants'

export function Services() {
  return (
    <section
      id={SECTION_IDS.services}
      className="bg-warm section-space"
    >
      <div className="site-container">
        <FadeIn>
          <SectionHeader
            title="Qué puedo desarrollar"
            description="Soluciones concretas, pensadas para un problema real."
          />
        </FadeIn>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.04} className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                {service.number}
              </p>
              <h3 className="mt-3 text-[15px] font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
