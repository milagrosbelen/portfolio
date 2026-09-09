import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../components/Button'
import { NavModal } from '../components/NavModal'
import { ProfileModal } from '../components/ProfileModal'
import { navigation } from '../data/navigation'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { useNavOnDark } from '../hooks/useNavOnDark'
import { cn } from '../lib/utils'

const sectionIds = navigation.map((item) => item.href.replace('#', ''))

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)
  const onDark = useNavOnDark()

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,color,backdrop-filter] duration-300',
          onDark
            ? 'border-transparent bg-transparent text-white'
            : 'border-black/[0.05] bg-white/20 text-foreground backdrop-blur-xl backdrop-saturate-150',
        )}
      >
        <nav className="site-container grid h-16 grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]">
          <div className="relative justify-self-start">
            <button
              type="button"
              aria-label="Ver perfil de Milagros Pedrasa"
              aria-expanded={profileOpen}
              onClick={() => {
                setIsOpen(false)
                setProfileOpen((open) => !open)
              }}
              className="flex items-center gap-2.5 rounded-full pr-1 focus-visible:outline-offset-4"
            >
              <img
                src="/milagros.webp"
                alt=""
                width={72}
                height={72}
                decoding="async"
                className={cn(
                  'h-9 w-9 rounded-full object-cover object-[50%_18%] ring-1',
                  onDark ? 'ring-white/20' : 'ring-line',
                )}
              />
              <span className="text-[13px] font-semibold tracking-[0.04em]">
                {profile.firstName}
              </span>
            </button>
            <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'text-[12px] font-medium uppercase tracking-[0.16em] transition-colors',
                    isActive
                      ? onDark
                        ? 'text-white'
                        : 'text-accent'
                      : onDark
                        ? 'text-white/55 hover:text-white'
                        : 'text-muted hover:text-foreground',
                  )}
                >
                  {item.label}
                </a>
              )
            })}
          </div>

          <div className="hidden justify-end lg:flex">
            <Button
              href={profile.whatsappUrl}
              external
              size="sm"
              variant={onDark ? 'inverse' : 'primary'}
            >
              Hablemos
            </Button>
          </div>

          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={isOpen}
            onClick={() => {
              setProfileOpen(false)
              setIsOpen(true)
            }}
            className="inline-flex h-10 w-10 items-center justify-center justify-self-end transition-transform duration-200 active:scale-90 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <NavModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
