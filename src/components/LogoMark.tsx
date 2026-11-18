import { cn } from '../lib/utils'

interface LogoMarkProps {
  className?: string
}

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-block aspect-[4/3] h-8 bg-current',
        '[mask-image:url(/logo-mark.png)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]',
        '[-webkit-mask-image:url(/logo-mark.png)] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]',
        className,
      )}
    />
  )
}
