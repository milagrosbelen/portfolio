import { motion } from 'framer-motion'
import type { ExperienceItem } from '../types'

interface TimelineItemProps {
  item: ExperienceItem
  index: number
  isLast: boolean
}

export function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative grid grid-cols-[auto_1fr] gap-6 pb-12 last:pb-0"
    >
      <div className="flex flex-col items-center">
        <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-white">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
        </div>
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-gradient-to-b from-primary/30 to-slate-200" />
        )}
      </div>

      <div className="card-shadow rounded-[20px] border border-slate-100 bg-white p-6 transition-shadow duration-300 hover:card-shadow-hover">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              {item.role}
            </h3>
            <p className="mt-1 text-base font-medium text-primary">{item.company}</p>
          </div>
          <span className="text-sm font-medium text-slate-500">{item.period}</span>
        </div>

        <p className="mt-4 text-base leading-relaxed text-slate-500">{item.description}</p>

        <ul className="mt-4 space-y-2">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
