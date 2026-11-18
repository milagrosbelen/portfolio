interface ProjectVideoProps {
  name: string
  src?: string
  poster?: string
}

function mediaType(src: string) {
  const clean = src.split('?')[0]?.toLowerCase() ?? ''
  if (clean.endsWith('.webm')) return 'video/webm'
  if (clean.endsWith('.ogg') || clean.endsWith('.ogv')) return 'video/ogg'
  return 'video/mp4'
}

export function ProjectVideo({ name, src, poster }: ProjectVideoProps) {
  const source = src?.trim()

  return (
    <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#090712] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
      <div className="relative aspect-video">
        {source ? (
          <video
            className="h-full w-full bg-black object-contain"
            controls
            playsInline
            preload="metadata"
            poster={poster || undefined}
            aria-label={`Demostración de ${name}`}
          >
            <source src={source} type={mediaType(source)} />
          </video>
        ) : (
          <>
            {poster ? (
              <img
                src={poster}
                alt=""
                width={1280}
                height={720}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-40"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/80 to-[#793BFF]/15" />
            <div
              aria-hidden="true"
              className="absolute top-0 left-6 h-24 w-24 rounded-full bg-[#793BFF]/30 blur-2xl"
            />
          </>
        )}
      </div>
      {source ? (
        <figcaption className="sr-only">Demostración de {name}</figcaption>
      ) : (
        <figcaption className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#ddd6fe] uppercase">Video</p>
          <p className="mt-2 max-w-md font-display text-xl leading-tight font-semibold tracking-[-0.03em] text-foreground sm:text-2xl">
            Demostración del proyecto próximamente
          </p>
        </figcaption>
      )}
    </figure>
  )
}
