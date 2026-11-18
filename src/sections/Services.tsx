import { AppWindow, ArrowRight, ClipboardList, ShoppingBag, Smartphone, type LucideIcon } from 'lucide-react'
import { FadeIn } from '../components/AnimatedSection'
import { SectionHeading } from '../components/SectionHeading'
import { services, servicesIntro } from '../data/needs'
import { SECTION_IDS } from '../lib/constants'

const icons: Record<string, LucideIcon> = {
  'aplicaciones-web': AppWindow,
  'sistemas-gestion': ClipboardList,
  tiendas: ShoppingBag,
  moviles: Smartphone,
}

export function Services() {
  return (
    <section id={SECTION_IDS.services} className="relative scroll-mt-20 section-space">
      <span id="servicios" className="absolute top-0" />
      <span id="que-necesitas" className="absolute top-0" />
      <div className="site-container">
        <FadeIn>
          <SectionHeading
            eyebrow={servicesIntro.eyebrow}
            title={servicesIntro.title}
            text={servicesIntro.text}
            className="max-w-3xl"
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:gap-5">
          {services.map((service, index) => {
            const Icon = icons[service.id]

            return (
              <FadeIn key={service.id} delay={index * 0.04}>
                <article className="glass-card group flex h-full gap-4 rounded-[1.5rem] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#793BFF]/50 sm:p-6">
                  {Icon ? (
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#793BFF]/30 bg-[#793BFF]/12 text-[#ddd6fe] transition duration-200 group-hover:bg-[#793BFF]/20">
                      <Icon strokeWidth={1.7} className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null}
                  <div>
                    <h3 className="font-display text-2xl leading-tight font-semibold tracking-[-0.03em]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted">{service.text}</p>
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn>
          <a
            href={`#${SECTION_IDS.contact}`}
            className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#c4b5fd] transition hover:text-white"
          >
            Hablemos de tu proyecto
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
