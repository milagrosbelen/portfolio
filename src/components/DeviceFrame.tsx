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
  delay,
  float = true,
  eager = false,
  shadow = 'project',
}: PhoneMockupProps) {
  return (
    <div
      className={cn(className ?? 'w-[200px] shrink-0 sm:w-[230px]')}
    >
      <div
        className={cn(
          float && (delay ? 'phone-float-delayed' : 'phone-float'),
          'rounded-[2rem] bg-black p-[7px] ring-1 ring-black/10',
          shadow === 'hero'
            ? 'shadow-[0_18px_50px_rgba(99,91,255,0.28)] ring-white/15'
            : 'shadow-[0_24px_60px_rgba(0,0,0,0.45)] ring-white/12',
        )}
      >
        <div className="phone-screen relative overflow-hidden rounded-[1.55rem] bg-black">
          <span className="pointer-events-none absolute top-2 left-1/2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />
          <img
            src={src}
            alt={alt}
            width={390}
            height={844}
            className="absolute inset-0 h-full w-full object-cover object-top"
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>
      </div>
    </div>
  )
}
