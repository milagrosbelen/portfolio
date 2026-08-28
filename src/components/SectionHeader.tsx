import { cn } from '../lib/utils'

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
  light?: boolean
}

export function SectionHeader({
  title,
  description,
  className,
  light,
}: SectionHeaderProps) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center', className)}>
      <h2
        className={cn(
          'text-[13px] font-semibold uppercase tracking-[0.18em]',
          light ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mx-auto mt-3 max-w-xl text-sm leading-relaxed sm:text-[15px]',
            light ? 'text-white/60' : 'text-muted',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
