import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

interface BadgeProps {
  label: string
  className?: string
  delay?: number
}

export function Badge({ label, className, delay = 0 }: BadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
      whileHover={{ y: -2 }}
      className={cn(
        'inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 card-shadow transition-shadow duration-200 hover:card-shadow-hover',
        className,
      )}
    >
      {label}
    </motion.span>
  )
}
