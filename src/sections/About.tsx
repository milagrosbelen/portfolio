import { motion, useReducedMotion } from 'framer-motion'
import { aboutCopy, timeline } from '../data/about'
import { SECTION_IDS } from '../lib/constants'
import { cn } from '../lib/utils'
import profileImage from '../assets/milagros.png'

const ease = [0.22, 1, 0.36, 1] as const

export function About() {
  const reduce = useReducedMotion()

  return (
    <section id={SECTION_IDS.about} className="bg-mist section-space">
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="inline-flex items-center justify-center gap-3"
          >
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
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="mx-auto mt-8 max-w-xl text-justify text-[15px] leading-relaxed text-muted sm:text-base"
          >
            {aboutCopy.text}
          </motion.p>
        </div>

        <ol className="mx-auto mt-14 max-w-xl">
          {timeline.map((item, index) => {
            const isLast = index === timeline.length - 1

            return (
              <motion.li
                key={item.year}
                initial={reduce ? false : { opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.55 }}
                transition={{ duration: 0.55, ease, delay: reduce ? 0 : 0.04 }}
                className="relative grid grid-cols-[3.25rem_14px_minmax(0,1fr)] gap-x-3 pb-10 last:pb-0 sm:grid-cols-[4rem_14px_minmax(0,1fr)] sm:gap-x-5 sm:pb-12"
              >
                <motion.p
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.45, delay: 0.08, ease }}
                  className={cn(
                    'pt-px text-right font-display text-[15px] font-bold tracking-[-0.03em] sm:text-base',
                    item.current ? 'text-accent' : 'text-foreground',
                  )}
                >
                  {item.year}
                </motion.p>

                <div className="relative flex flex-col items-center" aria-hidden="true">
                  <motion.span
                    initial={reduce ? false : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 16, delay: 0.12 }}
                    className={cn(
                      'relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full',
                      item.current
                        ? 'bg-lime shadow-[0_0_10px_#c7ff4a] timeline-pulse'
                        : 'bg-accent',
                    )}
                  />
                  {!isLast ? (
                    <motion.span
                      initial={reduce ? false : { scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.7, delay: 0.22, ease }}
                      className="mt-2 w-px flex-1 origin-top bg-gradient-to-b from-accent to-line"
                    />
                  ) : null}
                </div>

                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.16, ease }}
                  className="min-w-0"
                >
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
                </motion.div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
