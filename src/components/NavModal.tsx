import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { navigation } from '../data/navigation'
import { profile } from '../data/profile'
import { WHATSAPP_PROJECT_URL, SECTION_IDS } from '../lib/constants'
import { Button } from './Button'

interface NavModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NavModal({ isOpen, onClose }: NavModalProps) {
  const reduce = useReducedMotion()

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
        <div className="fixed inset-0 z-[100] min-[1180px]:hidden">
          <motion.button
            type="button"
            aria-label="Cerrar menú"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="nav-modal-title"
            initial={reduce ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: 24 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            className="absolute top-0 right-0 flex h-full w-[min(100%,22rem)] flex-col border-l border-white/10 bg-[#07060f]/95 px-6 py-6 shadow-[-24px_0_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <p id="nav-modal-title" className="eyebrow">
                Menú
              </p>
              <button
                type="button"
                aria-label="Cerrar"
                onClick={onClose}
                autoFocus
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="border-b border-white/10 py-4 font-display text-2xl font-semibold tracking-[-0.03em] text-foreground transition-colors hover:text-[#c4b5fd]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3 pt-8">
              <Button href={`#${SECTION_IDS.contact}`} className="w-full" onClick={onClose}>
                Trabajemos juntos
              </Button>
              <a
                href={WHATSAPP_PROJECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="inline-flex min-h-11 items-center justify-center text-sm font-semibold text-muted"
              >
                Escribir por WhatsApp
              </a>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="inline-flex min-h-11 items-center justify-center text-sm text-muted"
              >
                Ver currículum
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
