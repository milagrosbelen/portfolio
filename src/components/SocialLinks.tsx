import { Mail } from 'lucide-react'
import type { SocialLink } from '../types'
import { GitHubIcon, LinkedInIcon } from './icons/BrandIcons'
import { cn } from '../lib/utils'

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: Mail,
} as const

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
  size?: 'sm' | 'md'
}

export function SocialLinks({ links, className, size = 'md' }: SocialLinksProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {links.map((link) => {
        const Icon = iconMap[link.icon]
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={cn(
              'inline-flex items-center justify-center rounded-[20px] border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-foreground card-shadow hover:card-shadow-hover',
              size === 'sm' ? 'h-10 w-10' : 'h-11 w-11',
            )}
          >
            <Icon className={size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} />
          </a>
        )
      })}
    </div>
  )
}
