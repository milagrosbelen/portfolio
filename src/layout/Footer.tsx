import { profile } from '../data/profile'
import { SECTION_IDS } from '../lib/constants'
import { SocialLinks } from '../components/SocialLinks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xl font-semibold text-foreground">
              {profile.name}
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500">
              Desarrolladora fullstack construyendo productos digitales con enfoque en
              experiencia, negocio e impacto real.
            </p>
          </div>
          <SocialLinks links={profile.social} />
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-100 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {profile.name}. Todos los derechos reservados.</p>
          <a
            href={`#${SECTION_IDS.hero}`}
            className="font-medium text-primary transition-colors hover:text-primary/80"
          >
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  )
}
