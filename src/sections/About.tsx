import { FadeIn } from '../components/AnimatedSection'
import { aboutCopy, timeline } from '../data/about'
import { SECTION_IDS } from '../lib/constants'
import { cn } from '../lib/utils'
import profileImage from '../assets/milagros.png'

export function About() {
  return (
    <section id={SECTION_IDS.about} className="bg-mist section-space">
      <div className="site-container">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center gap-3">
            <figure className="h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-black/10">
              <img
                src={profileImage}
                alt="Milagros Pedrasa"
                className="h-full w-full object-cover object-[50%_18%]"
                loading="lazy"
              />
            </figure>
            <h2 className="whitespace-nowrap text-[15px] font-semibold uppercase tracking-[0.16em] text-foreground">
              {aboutCopy.title}
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-xl space-y-4 text-justify text-[15px] leading-relaxed text-muted sm:text-base">
            {aboutCopy.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="mx-auto mt-14 max-w-xl">
          <ol className="relative">
            {timeline.map((item, index) => {
              const isLast = index === timeline.length - 1

              return (
                <li
                  key={item.year}
                  className="relative grid grid-cols-[3.25rem_14px_minmax(0,1fr)] gap-x-3 pb-10 last:pb-0 sm:grid-cols-[4rem_14px_minmax(0,1fr)] sm:gap-x-5 sm:pb-12"
                >
                  <p
                    className={cn(
                      'pt-px text-right font-display text-[15px] font-bold tracking-[-0.03em] sm:text-base',
                      item.current ? 'text-accent' : 'text-foreground',
                    )}
                  >
                    {item.year}
                  </p>

                  <div className="relative flex flex-col items-center" aria-hidden="true">
                    <span
                      className={cn(
                        'relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full',
                        item.current
                          ? 'bg-lime shadow-[0_0_10px_#c7ff4a]'
                          : 'bg-accent',
                      )}
                    />
                    {!isLast ? (
                      <span className="mt-2 w-px flex-1 bg-line" />
                    ) : null}
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-[15px] font-semibold tracking-tight text-foreground sm:text-base">
                        {item.title}
                      </h3>
                      {item.current ? (
                        <span className="rounded-full bg-lime px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground">
                          Hoy
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted sm:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </FadeIn>
      </div>
    </section>
  )
}
