import { navigation } from '../data/navigation'
import { profile } from '../data/profile'
import { techGroups } from '../data/technologies'
import { SECTION_IDS } from '../lib/constants'

const footerLinks = [
  ...navigation,
  { label: 'Contacto', href: `#${SECTION_IDS.contact}` },
]

const stack = techGroups.flatMap((group) => group.items)

export function Footer() {
  return (
    <footer data-nav-theme="dark" className="border-t border-white/10 bg-ink">
      <div className="site-container flex flex-col items-center py-12 text-center">
        <p className="text-[13px] font-semibold tracking-[0.04em] text-white">
          {profile.firstName}
        </p>
        <p className="mt-2 text-sm text-white/45">
          {profile.role} · {profile.location}
        </p>

        <nav
          aria-label="Footer"
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/45 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="mt-8 max-w-xl text-[12px] leading-relaxed text-white/35">
          {stack.join(' · ')}
        </p>

        <p className="mt-10 text-[12px] text-white/35">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
