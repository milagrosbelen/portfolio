import { AnimatePresence, motion } from 'framer-motion'
import { Mail, X } from 'lucide-react'
import { useEffect } from 'react'
import profileImage from '../assets/milagros.png'
import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from './icons/BrandIcons'

const linkIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  whatsapp: WhatsAppIcon,
} as const

interface ProfileModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
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
        <>
          <motion.button
            type="button"
            aria-label="Cerrar perfil"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[110] bg-foreground/20"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-modal-title"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ type: 'spring', damping: 28, stiffness: 360 }}
            className="absolute left-0 top-[calc(100%+10px)] z-[120] w-[min(92vw,320px)] overflow-hidden rounded-xl border border-line bg-surface shadow-[0_16px_40px_rgba(26,25,23,0.12)]"
          >
            <button
              type="button"
              aria-label="Cerrar"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col items-center px-5 pb-5 pt-6 text-center">
              <img
                src={profileImage}
                alt={profile.name}
                className="h-28 w-28 shrink-0 rounded-full object-cover object-[50%_18%] ring-1 ring-line"
              />

              <h2
                id="profile-modal-title"
                className="mt-4 text-lg font-semibold tracking-tight text-foreground"
              >
                {profile.name}
              </h2>
              <p className="mt-1 text-sm text-muted">{profile.role}</p>
              <p className="mt-1 text-sm text-muted">{profile.location}</p>

              <div className="mt-5 flex w-full flex-col gap-2">
                {profile.social.map((link) => {
                  const Icon = linkIcons[link.icon]

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      className="inline-flex items-center justify-center gap-2.5 rounded-md border border-line bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {link.label}
                    </a>
                  )
                })}

                <a
                  href={`mailto:${profile.email}`}
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2.5 rounded-md border border-line bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
