import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'accent'
  | 'inverse'
  | 'inverse-secondary'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-[#793BFF] text-white shadow-[0_10px_30px_rgba(121,59,255,0.38)] hover:bg-[#6a2cf0]',
  secondary:
    'border border-white/15 bg-white/[0.04] text-foreground backdrop-blur-md hover:border-[#793BFF]/70 hover:bg-white/[0.07]',
  ghost: 'bg-transparent text-muted hover:text-foreground',
  accent:
    'bg-[#793BFF] text-white shadow-[0_10px_30px_rgba(121,59,255,0.38)] hover:bg-[#6a2cf0]',
  inverse: 'bg-foreground text-background hover:bg-white',
  'inverse-secondary':
    'bg-transparent text-foreground border border-white/20 hover:border-[#c4b5fd] hover:bg-white/5',
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
  disabled?: boolean
  onClick?: () => void
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-11 px-4 text-sm',
  md: 'h-12 px-5 text-[15px]',
  lg: 'h-14 px-6 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external,
  className,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-[-0.01em] transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-px disabled:pointer-events-none disabled:opacity-60',
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
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
