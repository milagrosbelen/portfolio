import { cn } from '../lib/utils'

interface PhoneMockupProps {
  src: string
  alt: string
  className?: string
  delay?: boolean
  float?: boolean
  eager?: boolean
  shadow?: 'hero' | 'project'
}

export function PhoneMockup({
  src,
  alt,
  className,
  eager = false,
}: PhoneMockupProps) {
  return (
    <div className={cn(className ?? 'w-[200px] shrink-0')}>
      <div className="rounded-[1.7rem] bg-charcoal p-[6px] shadow-[0_18px_40px_rgba(37,40,36,0.16)] ring-1 ring-black/15">
        <div className="phone-screen relative overflow-hidden rounded-[1.35rem] bg-black">
          <span className="pointer-events-none absolute top-1.5 left-1/2 z-10 h-3.5 w-16 -translate-x-1/2 rounded-full bg-black" />
          <img
            src={src}
            alt={alt}
            width={720}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover object-top"
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>
      </div>
    </div>
  )
}
