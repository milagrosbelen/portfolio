import { footerNavigation } from '../data/navigation'
import { profile } from '../data/profile'
import { LogoMark } from '../components/LogoMark'
import { SECTION_IDS } from '../lib/constants'
import { TechMarks } from '../components/TechMarks'

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#050510]/80 text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#793BFF] to-transparent"
      />
      <div className="site-container py-12 lg:py-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href={`#${SECTION_IDS.hero}`} className="inline-flex items-center gap-2.5">
              <LogoMark className="h-8" />
              <span className="font-display text-xl font-semibold tracking-[-0.03em]">{profile.name}</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {profile.headlineRole} · {profile.location} · {profile.workMode}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">Canales</p>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <a href={`mailto:${profile.email}`} className="text-sm text-foreground hover:text-[#c4b5fd]">
                  {profile.email}
                </a>
              </li>
              {profile.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground hover:text-[#c4b5fd]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-foreground hover:text-[#c4b5fd]"
                >
                  Ver currículum
                </a>
              </li>
            </ul>
          </div>
        </div>

        <nav aria-label="Secciones del pie" className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-6">
          {footerNavigation.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-foreground/90 hover:text-[#c4b5fd]">
              {link.label}
            </a>
          ))}
        </nav>

        <TechMarks className="mt-8" />
      </div>

      <div className="border-t border-white/10">
        <p className="site-container py-5 pr-20 text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
