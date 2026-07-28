import { motion } from 'framer-motion'
import { projects } from '../data/projects'

const mockupConfig = [
  {
    id: 'spot',
    position: 'left-[8%] top-[12%] z-20',
    rotate: -6,
    delay: 0.2,
  },
  {
    id: 'drivox',
    position: 'right-[6%] top-[28%] z-30',
    rotate: 4,
    delay: 0.35,
  },
  {
    id: 'curmy-store',
    position: 'left-[18%] bottom-[10%] z-10',
    rotate: -2,
    delay: 0.5,
  },
] as const

export function HeroMockups() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl lg:max-w-none">
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-primary/5 via-white to-secondary/5" />
      <div className="absolute inset-[10%] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-[15%] top-[20%] h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />

      {mockupConfig.map((config) => {
        const project = projects.find((item) => item.id === config.id)
        if (!project) return null

        return (
          <motion.div
            key={config.id}
            initial={{ opacity: 0, y: 40, rotate: config.rotate - 4 }}
            animate={{ opacity: 1, y: 0, rotate: config.rotate }}
            transition={{
              duration: 0.7,
              delay: config.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6, rotate: 0 }}
            className={`absolute w-[58%] sm:w-[52%] ${config.position}`}
          >
            <div className="card-shadow-hover overflow-hidden rounded-[20px] border border-slate-200/80 bg-slate-950">
              <div
                className="flex items-center justify-between border-b border-white/10 px-4 py-2.5"
                style={{ background: `linear-gradient(135deg, ${project.accent}18, transparent)` }}
              >
                <p className="text-sm font-semibold text-white">{project.name}</p>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="aspect-[9/16] overflow-hidden">
                <img
                  src={project.previewImage}
                  alt={`Vista previa de ${project.name}`}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
