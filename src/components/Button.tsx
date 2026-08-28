import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'inverse' | 'inverse-secondary'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-foreground text-white hover:bg-accent',
  secondary:
    'bg-transparent text-foreground border border-foreground/20 hover:border-foreground',
  ghost: 'bg-transparent text-muted hover:text-foreground',
  inverse: 'bg-white text-foreground hover:bg-white/90',
  'inverse-secondary':
    'bg-transparent text-white border border-white/25 hover:border-white',
}

type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  external?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-3.5 text-[12px] tracking-[0.14em] uppercase',
  md: 'h-11 px-5 text-[13px] tracking-[0.12em] uppercase',
  lg: 'h-12 px-6 text-[13px] tracking-[0.12em] uppercase',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external,
  className,
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200',
    variants[variant],
    sizes[size],
    className,
  )

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
