import { cn } from '../lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  text?: string
  id?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  id,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'mx-auto max-w-3xl text-center', className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2
        id={id}
        className={cn(
          'font-display text-[1.9rem] leading-[1.08] font-bold tracking-[-0.045em] text-balance text-foreground uppercase sm:text-4xl lg:text-[2.9rem] lg:leading-[1.05]',
          eyebrow && 'mt-4',
        )}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={cn(
            'mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {text}
        </p>
      ) : null}
    </div>
  )
}
