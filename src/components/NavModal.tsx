import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { navigation } from '../data/navigation'
import { profile } from '../data/profile'
import { SECTION_IDS } from '../lib/constants'
import { Button } from './Button'

const menuLinks = [
  ...navigation,
  { label: 'Contacto', href: `#${SECTION_IDS.contact}` },
]

interface NavModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NavModal({ isOpen, onClose }: NavModalProps) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-5 lg:hidden">
          <motion.button
            type="button"
            aria-label="Cerrar menú"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-foreground/35 backdrop-blur-[6px]"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="nav-modal-title"
            initial={{ opacity: 0, scale: 0.88, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ type: 'spring', damping: 22, stiffness: 320 }}
            className="relative z-10 w-full max-w-[340px] overflow-hidden rounded-2xl border border-line bg-surface px-6 py-7 text-center shadow-[0_24px_60px_rgba(26,25,23,0.18)]"
          >
            <button
              type="button"
              aria-label="Cerrar"
              onClick={onClose}
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            <p
              id="nav-modal-title"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted"
            >
              Menú
            </p>

            <nav className="mt-6 flex flex-col gap-1">
              {menuLinks.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.05, duration: 0.35 }}
                  className="rounded-lg py-2.5 text-[17px] font-semibold tracking-tight text-foreground transition-colors hover:bg-background"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.35 }}
            >
              <Button
                href={profile.whatsappUrl}
                external
                size="md"
                className="mt-6 w-full"
                onClick={onClose}
              >
                Hablemos
              </Button>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
