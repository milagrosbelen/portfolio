import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { Project } from '../types'
import { Button } from './Button'
import { Badge } from './Badge'
import { GitHubIcon } from './icons/BrandIcons'

interface ProjectShowcaseProps {
  project: Project
  index: number
}

export function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  const isReversed = index % 2 === 1

  return (
    <article className="min-h-[85vh] flex items-center py-16 lg:py-24">
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          isReversed ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className={`absolute -inset-4 rounded-[28px] bg-gradient-to-br ${project.gradient} blur-2xl`}
          />
          <div className="card-shadow relative overflow-hidden rounded-[20px] border border-slate-100 bg-white">
            <div
              className="flex items-center gap-3 border-b border-slate-100 px-6 py-4"
              style={{ background: `linear-gradient(135deg, ${project.accent}08, transparent)` }}
            >
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: project.accent }}
              />
              <p className="font-display text-lg font-semibold">{project.name}</p>
            </div>
            <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 via-white to-slate-100 p-8">
              <div className="grid h-full grid-rows-[auto_1fr_auto] gap-4">
                <div className="flex gap-2">
                  <div className="h-8 flex-1 rounded-xl bg-white card-shadow" />
                  <div className="h-8 w-24 rounded-xl bg-white card-shadow" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((card) => (
                    <div
                      key={card}
                      className="rounded-2xl bg-white card-shadow"
                      style={{ opacity: 1 - card * 0.08 }}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <div
                    className="h-10 flex-1 rounded-xl"
                    style={{ backgroundColor: `${project.accent}15` }}
                  />
                  <div className="h-10 w-28 rounded-xl bg-white card-shadow" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Proyecto {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.name}
          </h3>
          <p className="mt-3 text-lg text-slate-500">{project.tagline}</p>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            {project.description}
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Problema
              </p>
              <p className="mt-2 text-base leading-relaxed text-slate-600">{project.problem}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Solución
              </p>
              <p className="mt-2 text-base leading-relaxed text-slate-600">{project.solution}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <Badge key={tech} label={tech} delay={techIndex * 0.03} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.demoUrl && (
              <Button href={project.demoUrl} external variant="primary">
                Ver demo
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} external variant="outline">
                GitHub
                <GitHubIcon className="h-4 w-4" />
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </article>
  )
}
