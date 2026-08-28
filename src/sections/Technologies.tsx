import { FadeIn } from '../components/AnimatedSection'
import { Badge } from '../components/Badge'
import { SectionHeader } from '../components/SectionHeader'
import { techGroups } from '../data/technologies'
import { SECTION_IDS } from '../lib/constants'

export function Technologies() {
  return (
    <section
      id={SECTION_IDS.tech}
      data-nav-theme="dark"
      className="bg-charcoal section-space"
    >
      <div className="site-container">
        <FadeIn>
          <SectionHeader
            title="Stack"
            description="Las herramientas con las que construyo."
            light
          />
        </FadeIn>

        <div className="mx-auto mt-12 max-w-2xl space-y-8">
          {techGroups.map((group) => (
            <div key={group.category} className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                {group.category}
              </p>
              <ul className="mt-3 flex flex-wrap justify-center gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge
                      label={item}
                      className="border-white/10 bg-white/5 text-white/80"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
