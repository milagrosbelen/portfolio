import { ArrowUpRight, Briefcase, Mail, MessageCircle } from 'lucide-react'
import { Button } from '../components/Button'
import { ClientInquiryForm } from '../components/ClientInquiryForm'
import { profile } from '../data/profile'
import { WHATSAPP_PROJECT_URL, SECTION_IDS } from '../lib/constants'

export function Contact() {
  const linkedin = profile.social.find((item) => item.icon === 'linkedin')?.href
  const whatsapp = profile.social.find((item) => item.icon === 'whatsapp')?.href

  return (
    <section id={SECTION_IDS.contact} className="relative scroll-mt-20 overflow-x-clip section-space">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#793BFF]/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-64 w-[min(100%,28rem)] -translate-x-1/2 rounded-full bg-[#793BFF]/12 blur-3xl"
      />
      <div className="site-container relative">
        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="contacto-titulo"
            className="font-display text-[1.9rem] leading-[1.08] font-bold tracking-[-0.045em] text-balance uppercase sm:text-4xl lg:text-[2.9rem] lg:leading-[1.05]"
          >
            Contacto
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Contame tu proyecto o una oportunidad para sumarme a tu equipo.
          </p>
        </header>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          <article className="group flex flex-col rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(121,59,255,0.16),rgba(12,9,22,0.4))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-[#793BFF]/55 sm:p-7">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-[#793BFF]/35 bg-[#793BFF]/15 text-[#ddd6fe]">
              <MessageCircle className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
            </span>
            <h3 className="font-display mt-5 text-2xl font-semibold tracking-[-0.03em]">Nuevos proyectos</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">Para negocios que necesitan una solución digital.</p>
            <Button href={WHATSAPP_PROJECT_URL} external className="mt-6 h-11 w-fit px-4 text-sm">
              Hablemos de tu proyecto
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </article>

          <article className="group flex flex-col rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(12,9,22,0.2))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-[#c4b5fd]/45 sm:p-7">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#ddd6fe]">
              <Briefcase className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
            </span>
            <h3 className="font-display mt-5 text-2xl font-semibold tracking-[-0.03em]">Oportunidades laborales</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">Para empresas y equipos que quieren conocer mi perfil.</p>
            {linkedin ? (
              <Button href={linkedin} external variant="secondary" className="mt-6 h-11 w-fit px-4 text-sm">
                Conectemos profesionalmente
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            ) : null}
          </article>
        </div>

        <p className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pr-16 text-sm text-muted sm:pr-0">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-[#c4b5fd]">
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            {profile.email}
          </a>
          {whatsapp ? (
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[#c4b5fd]">
              WhatsApp
            </a>
          ) : null}
          {linkedin ? (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#c4b5fd]">
              LinkedIn
            </a>
          ) : null}
        </p>

        <ClientInquiryForm />
      </div>
    </section>
  )
}
