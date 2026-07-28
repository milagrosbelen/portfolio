import { AnimatePresence, motion } from 'framer-motion'
import { Download, Mail, X } from 'lucide-react'
import { useEffect } from 'react'
import profileImage from '../assets/milagros.png'
import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon } from './icons/BrandIcons'

const linkIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: Mail,
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

    window.addEventListener('keydown', handleKeyDown)

    return () => {
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
            className="fixed inset-0 z-40 bg-black/20"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-modal-title"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ type: 'spring', damping: 28, stiffness: 360 }}
            className="absolute left-0 top-[calc(100%+10px)] z-50 w-[min(92vw,320px)] overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-2xl shadow-slate-900/15"
          >
            <button
              type="button"
              aria-label="Cerrar"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-500 transition-colors hover:bg-white hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col items-center px-5 pb-5 pt-6 text-center">
              <img
                src={profileImage}
                alt={profile.name}
                className="h-28 w-28 shrink-0 rounded-full object-cover object-center ring-4 ring-slate-100"
              />

              <h2
                id="profile-modal-title"
                className="mt-4 font-display text-xl font-semibold tracking-tight text-foreground"
              >
                {profile.name}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{profile.headline}</p>

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
                      className="inline-flex items-center justify-center gap-2.5 rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-slate-300 hover:bg-white"
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {link.label}
                    </a>
                  )
                })}

                <a
                  href={profile.cvUrl}
                  download="cv-milagros-pedrasa.pdf"
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2.5 rounded-[20px] bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                >
                  <Download className="h-4 w-4 shrink-0" />
                  Descargar CV
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
