import { profile } from '../data/profile'
import { WhatsAppIcon } from './icons/BrandIcons'

export function WhatsAppFloat() {
  return (
    <a
      href={profile.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed right-4 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,40,36,0.18)] transition-transform duration-200 hover:scale-105 active:scale-95"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
