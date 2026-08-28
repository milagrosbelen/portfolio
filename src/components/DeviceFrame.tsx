import { cn } from '../lib/utils'

interface PhoneMockupProps {
  src: string
  alt: string
  className?: string
  delay?: boolean
}

export function PhoneMockup({ src, alt, className, delay }: PhoneMockupProps) {
  return (
    <div
      className={cn('shrink-0', className ?? 'w-[200px] sm:w-[230px]')}
    >
      <div
        className={cn(
          delay ? 'phone-float-delayed' : 'phone-float',
          'rounded-[2rem] bg-black p-[7px] shadow-[0_24px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/12',
        )}
      >
        <div className="relative overflow-hidden rounded-[1.55rem] bg-black">
          <span className="pointer-events-none absolute top-2 left-1/2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />
          <img
            src={src}
            alt={alt}
            className="block w-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
