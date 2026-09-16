import { cn } from '../lib/utils'

type SectionGlowVariant = 'hero' | 'black' | 'violet' | 'contact'

export function SectionGlow({
  variant,
  className,
}: {
  variant: SectionGlowVariant
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={cn('section-glow', `section-glow--${variant}`, className)}
    />
  )
}
