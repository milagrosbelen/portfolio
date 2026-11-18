import {
  Atom,
  Braces,
  Database,
  FileCode,
  GitBranch,
  GitFork,
  Hash,
  Hexagon,
  Layers,
  Palette,
  Server,
  AppWindow,
  Wind,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { FadeIn } from '../components/AnimatedSection'
import { SectionHeading } from '../components/SectionHeading'
import { techGroups, technologiesIntro } from '../data/technologies'
import { SECTION_IDS } from '../lib/constants'

const icons: Record<string, LucideIcon> = {
  HTML: FileCode,
  CSS: Palette,
  JavaScript: Braces,
  TypeScript: FileCode,
  React: Atom,
  'Next.js': AppWindow,
  'Tailwind CSS': Wind,
  PHP: Server,
  Laravel: Layers,
  'Node.js': Hexagon,
  'C#': Hash,
  PostgreSQL: Database,
  SQL: Database,
  Git: GitBranch,
  GitHub: GitFork,
  Vite: Zap,
}

const tones: Record<string, string> = {
  HTML: '#f0a08a',
  CSS: '#7dd3fc',
  JavaScript: '#fde047',
  TypeScript: '#93c5fd',
  React: '#67e8f9',
  'Next.js': '#f4f1ff',
  'Tailwind CSS': '#67e8f9',
  PHP: '#c4b5fd',
  Laravel: '#fda4af',
  'Node.js': '#86efac',
  'C#': '#d8b4fe',
  PostgreSQL: '#93c5fd',
  SQL: '#93c5fd',
  Git: '#fdba74',
  GitHub: '#f4f1ff',
  Vite: '#d8b4fe',
}

export function Technologies() {
  return (
    <section id={SECTION_IDS.technologies} className="relative scroll-mt-20 overflow-x-clip section-space">
      <span id="habilidades" className="absolute top-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full bg-[#793BFF]/12 blur-3xl"
      />
      <div className="site-container">
        <FadeIn>
          <SectionHeading
            eyebrow={technologiesIntro.eyebrow}
            title={technologiesIntro.title}
            text={technologiesIntro.text}
            className="max-w-3xl"
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:gap-5">
          {techGroups.map((group, index) => (
            <FadeIn key={group.category} delay={index * 0.04}>
              <section
                aria-labelledby={`tech-${group.category.replace(/\s+/g, '-').toLowerCase()}`}
                className="glass-card h-full rounded-[1.5rem] p-5 sm:p-6"
              >
                <h3
                  id={`tech-${group.category.replace(/\s+/g, '-').toLowerCase()}`}
                  className="font-display text-xl font-semibold tracking-[-0.03em]"
                >
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const Icon = icons[item]

                    return (
                      <li key={item}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-medium">
                          {Icon ? (
                            <Icon
                              aria-hidden="true"
                              strokeWidth={1.7}
                              className="h-4 w-4"
                              style={{ color: tones[item] ?? '#c4b5fd' }}
                            />
                          ) : null}
                          {item}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </section>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
