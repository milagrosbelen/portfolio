import type { SocialLink } from '../types'
import { LinkedInIcon, WhatsAppIcon } from './icons/BrandIcons'
import { cn } from '../lib/utils'

const iconMap = {
  linkedin: LinkedInIcon,
  whatsapp: WhatsAppIcon,
} as const

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
  tone?: 'default' | 'light'
  iconsOnly?: boolean
}

export function SocialLinks({ links, className, tone = 'default', iconsOnly = false }: SocialLinksProps) {
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
              'inline-flex items-center gap-2 text-sm transition duration-200 hover:-translate-y-0.5',
              iconsOnly &&
                'grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/5 hover:border-[#793BFF]/60 hover:text-[#c4b5fd]',
              tone === 'light'
                ? 'text-white/80 hover:text-white'
                : 'text-muted hover:text-foreground',
            )}
          >
            <Icon className={iconsOnly ? 'h-4 w-4' : 'h-3.5 w-3.5'} />
            {iconsOnly ? <span className="sr-only">{link.label}</span> : link.label}
          </a>
        )
      })}
    </nav>
  )
}
