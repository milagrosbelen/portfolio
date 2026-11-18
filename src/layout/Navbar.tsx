import { Menu } from 'lucide-react'
import { useState } from 'react'
import { LogoMark } from '../components/LogoMark'
import { NavModal } from '../components/NavModal'
import { ProfileModal } from '../components/ProfileModal'
import { navigation } from '../data/navigation'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { SECTION_IDS } from '../lib/constants'
import { cn } from '../lib/utils'

const desktopNavigation = [
  { label: 'Inicio', href: `#${SECTION_IDS.hero}` },
  { label: 'Proyectos', href: `#${SECTION_IDS.projects}` },
  { label: 'Sobre mí', href: `#${SECTION_IDS.about}` },
  { label: 'Cómo ayudo', href: '#como-puedo-ayudarte' },
  { label: 'Contacto', href: `#${SECTION_IDS.contact}` },
]

const sectionIds = [...new Set([...navigation, ...desktopNavigation].map((item) => item.href.replace('#', '')))]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050510]/75 text-foreground backdrop-blur-xl">
        <nav
          aria-label="Principal"
          className="mx-auto flex h-[4.25rem] max-w-[1320px] items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8"
        >
          <div className="relative flex min-w-0 items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              aria-label="Abrir perfil de Milagros Pedrasa"
              aria-expanded={profileOpen}
              aria-haspopup="dialog"
              onClick={() => {
                setIsOpen(false)
                setProfileOpen((open) => !open)
              }}
              className="grid h-11 w-11 shrink-0 place-items-center text-foreground transition-colors hover:text-[#c4b5fd]"
            >
              <LogoMark className="h-7" />
            </button>
            <a href={`#${SECTION_IDS.hero}`} className="min-w-0 leading-tight">
              <span className="block truncate font-display text-[15px] font-semibold tracking-[-0.03em] sm:text-base">
                {profile.name}
              </span>
              <span className="hidden text-[11px] text-muted sm:block">{profile.headlineRole}</span>
            </a>
            <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
          </div>

          <div className="hidden items-center gap-x-7 min-[1180px]:flex">
            {desktopNavigation.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative py-2 text-[13px] font-medium tracking-[-0.01em] whitespace-nowrap transition-colors',
                    isActive ? 'text-foreground' : 'text-muted hover:text-foreground',
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-[#793BFF] transition-opacity',
                      isActive ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Abrir menú"
              aria-expanded={isOpen}
              onClick={() => {
                setProfileOpen(false)
                setIsOpen(true)
              }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 min-[1180px]:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <NavModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
