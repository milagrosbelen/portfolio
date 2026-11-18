import { ArrowRight, Code2, Folder, Users, Zap } from 'lucide-react'
import { FadeIn } from '../components/AnimatedSection'
import { Button } from '../components/Button'
import { profile } from '../data/profile'
import { SECTION_IDS } from '../lib/constants'

const heroPortrait = {
  src: '/milagros-hero.png',
  alt: 'Retrato de Milagros Pedrasa',
}

function DesktopFact({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Folder
  value: string
  label: string
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5 shrink-0 text-[#c4b5fd]" aria-hidden="true" />
      <div>
        <p className="font-display text-xl leading-none font-bold">{value}</p>
        <p className="mt-1 text-sm text-muted">{label}</p>
      </div>
    </div>
  )
}

function DesktopPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <div
        aria-hidden="true"
        className="absolute top-[11%] left-1/2 aspect-square w-[78%] -translate-x-1/2 rounded-full bg-[#8b5cf6]/58"
        style={{
          maskImage: 'radial-gradient(circle, #000 60%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle, #000 60%, transparent 70%)',
        }}
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 640 220"
        className="pointer-events-none absolute -right-6 bottom-0 z-0 w-[115%] text-[#793BFF]"
      >
        <path
          d="M40 150c80-90 160-40 230-70 80-34 140-20 210 10 50 22 90 18 140-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="18"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M20 180c110-70 190-20 280-48 100-32 170 8 250 6"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
      <img
        src={heroPortrait.src}
        alt={heroPortrait.alt}
        width={768}
        height={846}
        className="relative z-10 h-auto w-full"
      />
      <div className="absolute top-4 right-2 z-20 grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-[#120c22]/80 text-2xl font-semibold text-[#d6ccff] shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
        {'</>'}
      </div>
      <div className="absolute top-[46%] right-0 z-20 w-28 rounded-2xl border border-[#8b5cf6]/40 bg-[#120c22]/75 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <div className="mb-2 h-1.5 w-8 rounded-full bg-white/35" />
        <div className="space-y-1.5">
          <div className="h-1.5 rounded-full bg-white/15" />
          <div className="h-1.5 w-4/5 rounded-full bg-white/15" />
          <div className="h-1.5 w-2/3 rounded-full bg-[#793BFF]" />
        </div>
      </div>
    </div>
  )
}

function HeroPortrait() {
  return (
    <div className="relative z-0 w-full">
      <div
        aria-hidden="true"
        className="absolute top-[2%] left-1/2 aspect-square w-full -translate-x-1/2 rounded-full bg-[#8b5cf6]/60"
        style={{
          maskImage: 'radial-gradient(circle, #000 42%, transparent 76%)',
          WebkitMaskImage: 'radial-gradient(circle, #000 42%, transparent 76%)',
        }}
      />
      <img
        src={heroPortrait.src}
        alt={heroPortrait.alt}
        width={768}
        height={846}
        fetchPriority="high"
        decoding="async"
        className="relative z-0 h-auto w-full"
      />
    </div>
  )
}

const facts = [
  { icon: Code2, value: '+4', label: 'Proyectos terminados' },
  { icon: Users, value: '+3', label: 'Clientes satisfechos' },
  { icon: Zap, value: '100%', label: 'Compromiso' },
]

export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative scroll-mt-20 overflow-x-clip pt-24 pb-16 sm:pt-28 lg:pt-28 lg:pb-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-8 -left-24 h-72 w-72 rounded-full bg-[#793BFF]/15 blur-3xl"
      />
      <div className="site-container">
        <FadeIn>
          <div className="hidden lg:grid lg:grid-cols-[minmax(0,1.28fr)_minmax(240px,340px)] lg:items-center lg:gap-10">
            <div>
              <p className="eyebrow">{profile.headlineRole}</p>
              <h1 className="font-display mt-5 text-[3.35rem] leading-[1.02] font-bold tracking-[-0.045em] uppercase xl:text-[3.7rem]">
                Quiero ayudarte a <span className="text-[#c4b5fd]">crecer tu negocio</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                Transformo ideas en productos reales a través del desarrollo web, la tecnología y el diseño funcional.
              </p>
              <div className="mt-7 flex items-center gap-3">
                <Button href={`#${SECTION_IDS.projects}`} className="h-11 w-fit px-4 text-sm">
                  Ver mis proyectos
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Button>
                <Button href={`#${SECTION_IDS.about}`} variant="secondary" className="h-11 px-5 text-sm">
                  Conocer más
                </Button>
              </div>
              <div className="mt-10 flex items-start gap-10">
                <DesktopFact icon={Folder} value="+2" label="Proyectos completados" />
                <DesktopFact icon={Users} value="+1" label="Clientes satisfechos" />
                <DesktopFact icon={Zap} value="100%" label="Compromiso" />
              </div>
            </div>
            <DesktopPortrait />
          </div>

          <div className="lg:hidden">
          <div className="grid grid-cols-[minmax(0,1.05fr)_minmax(150px,0.95fr)] items-center gap-3 sm:grid-cols-2 sm:gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(380px,0.92fr)] lg:gap-14">
            <div className="relative z-20 min-w-0">
              <p className="eyebrow">{profile.headlineRole}</p>
              <h1 className="font-display relative z-20 mt-3 w-[126%] text-[1.85rem] leading-[0.98] font-bold tracking-[-0.03em] uppercase sm:w-[116%] sm:text-5xl lg:mt-4 lg:w-[122%] lg:text-[4.35rem] lg:leading-[0.94]">
                Quiero ayudarte a <span className="text-[#c4b5fd]">crecer tu negocio</span>
              </h1>
              <p className="mt-3 max-w-full pr-1 text-base leading-relaxed text-muted sm:mt-4 sm:text-xl lg:pr-0 lg:text-2xl">
                Entiendo los desafíos de tu negocio y quiero ayudarte a resolverlos con soluciones digitales que
                simplifiquen tu trabajo y potencien tu crecimiento.
              </p>
              <div className="mt-5 hidden sm:block">
                <Button href={`#${SECTION_IDS.projects}`} className="h-11 w-fit px-4 text-sm">
                  Ver proyectos
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Button>
              </div>
            </div>
            <HeroPortrait />
          </div>

          <div className="mt-5 sm:hidden">
            <Button href={`#${SECTION_IDS.projects}`} className="h-11 w-fit px-4 text-sm">
              Ver proyectos
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </Button>
          </div>

          <div className="mt-6 flex overflow-hidden rounded-2xl border border-[#c4b5fd]/30 bg-[linear-gradient(180deg,rgba(92,84,122,0.55),rgba(46,36,78,0.82))] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
            {facts.map((fact, index) => (
              <div
                key={fact.label}
                className={`flex min-w-0 flex-1 flex-col items-center justify-center px-2 py-4 text-center sm:py-5 ${
                  index > 0 ? 'border-l border-[#c4b5fd]/35' : ''
                }`}
              >
                <fact.icon className="h-5 w-5 text-[#c4b5fd]" aria-hidden="true" />
                <span className="font-display mt-2 text-xl leading-none font-bold text-white sm:text-2xl">
                  {fact.value}
                </span>
                <span className="mt-1.5 text-[11px] leading-snug text-[#c8bddf] sm:text-sm">{fact.label}</span>
              </div>
            ))}
          </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
