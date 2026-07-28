import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import profileImage from '../assets/milagros.png'
import { ProfileModal } from '../components/ProfileModal'
import { navigation } from '../data/navigation'
import { SECTION_IDS } from '../lib/constants'
import { useActiveSection } from '../hooks/useActiveSection'
import { cn } from '../lib/utils'

const sectionIds = Object.values(SECTION_IDS)

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 overflow-visible border-b border-slate-100/80 backdrop-blur-xl',
          isOpen ? 'bg-white' : 'bg-white/80',
        )}
      >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between overflow-visible px-5 sm:px-6 lg:px-8">
        <div className="relative flex items-center gap-2.5">
          <button
            type="button"
            aria-label="Ver perfil"
            onClick={() => setIsProfileOpen((open) => !open)}
            className="rounded-full transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <img
              src={profileImage}
              alt="Milagros"
              className="h-9 w-9 rounded-full object-cover object-center ring-2 ring-slate-100"
            />
          </button>
          <a
            href={`#${SECTION_IDS.hero}`}
            className="font-display text-lg font-semibold tracking-tight text-foreground"
          >
            milagros
          </a>

          <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-slate-100 text-foreground'
                    : 'text-slate-500 hover:text-foreground',
                )}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <a
          href={`#${SECTION_IDS.contact}`}
          className="hidden rounded-[20px] bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 md:inline-flex"
        >
          Contacto
        </a>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setIsOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Cerrar menú"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[90] bg-slate-900/50 backdrop-blur-[2px] md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 right-0 z-[100] flex w-full max-w-xs flex-col border-l border-slate-200 bg-white p-6 shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="font-display text-lg font-semibold text-foreground">Menú</span>
                <button
                  type="button"
                  aria-label="Cerrar menú"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-1 flex-col gap-1 overflow-y-auto">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-[20px] px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-slate-100"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={`#${SECTION_IDS.contact}`}
                  onClick={() => setIsOpen(false)}
                  className="mt-4 rounded-[20px] bg-primary px-4 py-3 text-center text-base font-medium text-white shadow-sm"
                >
                  Contacto
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
