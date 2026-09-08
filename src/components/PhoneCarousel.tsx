import { useEffect, useRef } from 'react'
import type { Project } from '../types'
import { PhoneMockup } from './DeviceFrame'

interface PhoneCarouselProps {
  phones: Project[]
}

export function PhoneCarousel({ phones }: PhoneCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const resumeTimer = useRef(0)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller || phones.length === 0) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let autoplay: number | undefined

    const slideSize = () => {
      const slide = scroller.firstElementChild as HTMLElement | null
      if (!slide) return 0
      const styles = getComputedStyle(scroller)
      const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0
      return slide.offsetWidth + gap
    }

    const loopIfNeeded = () => {
      const half = scroller.scrollWidth / 2
      if (half <= 0) return
      if (scroller.scrollLeft >= half) {
        scroller.scrollLeft -= half
      }
    }

    const goNext = () => {
      if (pausedRef.current) return
      scroller.scrollBy({ left: slideSize(), behavior: 'smooth' })
    }

    let scrollSettle = 0
    const onScroll = () => {
      window.clearTimeout(scrollSettle)
      scrollSettle = window.setTimeout(loopIfNeeded, 160)
    }

    const pause = () => {
      pausedRef.current = true
      window.clearTimeout(resumeTimer.current)
    }

    const resume = () => {
      window.clearTimeout(resumeTimer.current)
      resumeTimer.current = window.setTimeout(() => {
        pausedRef.current = false
      }, 1800)
    }

    const onInteract = () => {
      pause()
      resume()
    }

    scroller.addEventListener('pointerdown', pause)
    scroller.addEventListener('pointerup', resume)
    scroller.addEventListener('pointercancel', resume)
    scroller.addEventListener('mouseleave', resume)
    scroller.addEventListener('wheel', onInteract, { passive: true })
    scroller.addEventListener('scroll', onScroll, { passive: true })

    if (!reduced) {
      autoplay = window.setInterval(goNext, 3200)
    }

    return () => {
      window.clearInterval(autoplay)
      window.clearTimeout(resumeTimer.current)
      window.clearTimeout(scrollSettle)
      scroller.removeEventListener('pointerdown', pause)
      scroller.removeEventListener('pointerup', resume)
      scroller.removeEventListener('pointercancel', resume)
      scroller.removeEventListener('mouseleave', resume)
      scroller.removeEventListener('wheel', onInteract)
      scroller.removeEventListener('scroll', onScroll)
    }
  }, [phones.length])

  const slides = [...phones, ...phones]

  return (
    <div className="-mx-6 min-w-0 sm:-mx-8 lg:mx-0">
      <div
        ref={scrollerRef}
        tabIndex={0}
        aria-label="Productos en carrusel"
        className="no-scrollbar flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain py-3 pr-[calc(50%-88px)] pl-[calc(50%-88px)] active:cursor-grabbing sm:gap-5 sm:pr-[calc(50%-100px)] sm:pl-[calc(50%-100px)] lg:pr-[calc(50%-94px)] lg:pl-[calc(50%-94px)] xl:pr-[calc(50%-105px)] xl:pl-[calc(50%-105px)]"
      >
        {slides.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="w-[176px] shrink-0 snap-center sm:w-[200px] lg:w-[188px] xl:w-[210px]"
          >
            <PhoneMockup
              src={project.previewImage}
              alt={index < phones.length ? `${project.name} — aplicación` : ''}
              eager={index < phones.length}
              float={false}
              shadow="hero"
              className="w-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
