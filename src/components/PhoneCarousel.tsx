import { useEffect, useRef } from 'react'
import type { Project } from '../types'
import { PhoneMockup } from './DeviceFrame'

interface PhoneCarouselProps {
  phones: Project[]
}

export function PhoneCarousel({ phones }: PhoneCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const pausedRef = useRef(false)
  const draggingRef = useRef(false)
  const lastXRef = useRef(0)
  const resumeTimer = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track || phones.length === 0) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let last = performance.now()
    const speed = 38

    const wrap = () => {
      const half = track.scrollWidth / 2
      if (half <= 0) return
      offsetRef.current %= half
      if (offsetRef.current < 0) offsetRef.current += half
    }

    const apply = () => {
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
    }

    const tick = (now: number) => {
      const dt = Math.min(now - last, 40)
      last = now
      if (!reduced && !pausedRef.current && !draggingRef.current) {
        offsetRef.current += (speed * dt) / 1000
        wrap()
        apply()
      }
      raf = requestAnimationFrame(tick)
    }

    const pause = () => {
      pausedRef.current = true
      window.clearTimeout(resumeTimer.current)
    }

    const resume = () => {
      window.clearTimeout(resumeTimer.current)
      resumeTimer.current = window.setTimeout(() => {
        pausedRef.current = false
      }, 900)
    }

    const onDown = (event: PointerEvent) => {
      draggingRef.current = true
      pause()
      lastXRef.current = event.clientX
      track.setPointerCapture(event.pointerId)
    }

    const onMove = (event: PointerEvent) => {
      if (!draggingRef.current) return
      offsetRef.current -= event.clientX - lastXRef.current
      lastXRef.current = event.clientX
      wrap()
      apply()
    }

    const onUp = () => {
      draggingRef.current = false
      resume()
    }

    const onVisibility = () => {
      pausedRef.current = document.hidden
    }

    track.addEventListener('pointerdown', onDown)
    track.addEventListener('pointermove', onMove)
    track.addEventListener('pointerup', onUp)
    track.addEventListener('pointercancel', onUp)
    document.addEventListener('visibilitychange', onVisibility)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(resumeTimer.current)
      track.removeEventListener('pointerdown', onDown)
      track.removeEventListener('pointermove', onMove)
      track.removeEventListener('pointerup', onUp)
      track.removeEventListener('pointercancel', onUp)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [phones.length])

  const slides = [...phones, ...phones]

  return (
    <div className="-mx-6 overflow-hidden sm:-mx-8 lg:-mx-2">
      <div
        ref={trackRef}
        aria-label="Productos en carrusel"
        className="flex w-max cursor-grab gap-4 py-3 will-change-transform select-none active:cursor-grabbing sm:gap-5"
        style={{ touchAction: 'pan-y' }}
      >
        {slides.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="w-[168px] shrink-0 sm:w-[196px] lg:w-[188px] xl:w-[210px]"
          >
            <PhoneMockup
              src={project.heroImage}
              alt={index < phones.length ? `${project.name} — aplicación` : ''}
              eager={index < phones.length}
              float={false}
              shadow="hero"
              className="pointer-events-none w-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
