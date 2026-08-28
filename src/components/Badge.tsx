import { cn } from '../lib/utils'

interface BadgeProps {
  label: string
  className?: string
}

export function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-line bg-surface px-2.5 py-1 text-[12px] text-muted',
        className,
      )}
    >
      {label}
    </span>
  )
}
