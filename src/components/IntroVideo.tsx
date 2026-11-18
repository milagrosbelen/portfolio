import { Play } from 'lucide-react'
import { useRef, useState } from 'react'
import { presentation } from '../data/media'

type Phase = 'idle' | 'playing' | 'error'

export function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [phase, setPhase] = useState<Phase>('idle')

  async function play() {
    const element = videoRef.current
    if (!element) return

    element.src = presentation.src

    try {
      await element.play()
      setPhase('playing')
    } catch {
      setPhase('error')
    }
  }

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-surface">
        {phase !== 'playing' ? (
          <img
            src={presentation.poster}
            alt=""
            width={640}
            height={641}
            className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
            decoding="async"
          />
        ) : null}

        {presentation.published ? (
          <video
            ref={videoRef}
            className={phase === 'playing' ? 'relative z-10 h-full w-full object-cover' : 'sr-only'}
            controls={phase === 'playing'}
            playsInline
            preload="none"
            poster={presentation.poster}
            onError={() => setPhase('error')}
          />
        ) : null}

        {presentation.published && phase !== 'playing' ? (
          <button
            type="button"
            onClick={() => {
              void play()
            }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition hover:bg-black/30"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-foreground text-background">
              <Play className="ml-0.5 h-6 w-6" aria-hidden="true" />
            </span>
            <span className="sr-only">Reproducir video de presentación</span>
          </button>
        ) : null}

        {!presentation.published ? (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050510]/90 via-[#050510]/35 to-transparent px-5 pt-16 pb-5 sm:px-6">
            <p className="max-w-sm text-sm leading-relaxed text-foreground">
              Acá va a estar mi video de presentación.
            </p>
          </div>
        ) : null}

        {phase === 'error' ? (
          <div className="absolute inset-x-4 bottom-4 z-20 rounded-xl border border-line bg-surface/95 px-4 py-3 text-sm text-foreground">
            No pude reproducir el video. Cuando el archivo esté publicado, se va a poder ver desde acá.
          </div>
        ) : null}
      </div>
      <figcaption className="sr-only lg:not-sr-only lg:mt-3 lg:text-sm lg:text-muted">
        Video de presentación personal.
      </figcaption>
    </figure>
  )
}
