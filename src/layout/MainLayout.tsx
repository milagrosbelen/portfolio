import { useEffect, type ReactNode } from 'react'
import { WhatsAppFloat } from '../components/WhatsAppFloat'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  useEffect(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
    const reloaded = navigation?.type === 'reload'

    const toTop = () => window.scrollTo(0, 0)

    if (reloaded) {
      if (window.location.hash) {
        history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
      }
      toTop()
      requestAnimationFrame(toTop)
      window.addEventListener('load', toTop, { once: true })
      return () => window.removeEventListener('load', toTop)
    }

    const id = window.location.hash.replace('#', '')

    if (!id) {
      toTop()
      return
    }

    const target = document.getElementById(id)
    if (!target) {
      toTop()
      return
    }

    target.scrollIntoView()
  }, [])

  return (
    <div className="relative min-h-dvh bg-background text-foreground">
      <a
        href="#contenido"
        className="absolute top-4 left-4 z-[60] -translate-y-24 rounded-full bg-blue-deep px-4 py-2 text-sm text-white transition focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
