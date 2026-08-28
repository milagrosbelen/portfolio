import type { SocialLink } from '../types'
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from './icons/BrandIcons'
import { cn } from '../lib/utils'

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  whatsapp: WhatsAppIcon,
} as const

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
  tone?: 'default' | 'light'
}

export function SocialLinks({ links, className, tone = 'default' }: SocialLinksProps) {
  return (
    <nav aria-label="Redes" className={cn('flex flex-wrap gap-x-6 gap-y-2', className)}>
      {links.map((link) => {
        const Icon = iconMap[link.icon]

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 text-sm transition-colors',
              tone === 'light'
                ? 'text-white/55 hover:text-white'
                : 'text-muted hover:text-accent',
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            {link.label}
          </a>
        )
      })}
    </nav>
  )
}
