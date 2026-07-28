import { Mail } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { ContactForm } from '../components/ContactForm'
import { SectionHeader } from '../components/SectionHeader'
import { SocialLinks } from '../components/SocialLinks'
import { profile } from '../data/profile'
import { SECTION_IDS } from '../lib/constants'

export function Contact() {
  return (
    <AnimatedSection
      id={SECTION_IDS.contact}
      className="border-t border-slate-100 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Contacto"
              title="Construyamos algo juntos"
              description="¿Tenés una oportunidad, un proyecto o querés charlar sobre producto y desarrollo? Escribime."
            />

            <div className="mt-8 space-y-6">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 rounded-[20px] border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-foreground transition-all hover:card-shadow-hover card-shadow"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                {profile.email}
              </a>

              <div>
                <p className="mb-3 text-sm font-medium text-slate-500">También podés encontrarme en</p>
                <SocialLinks links={profile.social} />
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </AnimatedSection>
  )
}
