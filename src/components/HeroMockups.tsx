import { motion } from 'framer-motion'
import { MapPin, Search, ShoppingBag, Wrench } from 'lucide-react'
import { projects } from '../data/projects'

const mockupConfig = [
  {
    id: 'spot',
    icon: MapPin,
    position: 'left-[8%] top-[12%] z-20',
    rotate: -6,
    delay: 0.2,
  },
  {
    id: 'drivox',
    icon: Wrench,
    position: 'right-[6%] top-[28%] z-30',
    rotate: 4,
    delay: 0.35,
  },
  {
    id: 'curmy-store',
    icon: ShoppingBag,
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

        const Icon = config.icon

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
            <div className="card-shadow-hover overflow-hidden rounded-[20px] border border-slate-100 bg-white">
              <div
                className={`flex items-center justify-between border-b border-slate-100 bg-gradient-to-r ${project.gradient} px-4 py-3`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: project.accent }}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{project.name}</p>
                    <p className="text-xs text-slate-500">Product preview</p>
                  </div>
                </div>
                <Search className="h-4 w-4 text-slate-400" />
              </div>

              <div className="space-y-3 p-4">
                <div className="h-24 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-16 rounded-xl bg-slate-50" />
                  <div className="h-16 rounded-xl bg-slate-50" />
                </div>
                <div className="flex gap-2">
                  <div className="h-2 flex-1 rounded-full bg-slate-100" />
                  <div className="h-2 w-12 rounded-full bg-primary/20" />
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
