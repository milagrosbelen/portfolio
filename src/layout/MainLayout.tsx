import { useEffect, type ReactNode } from 'react'
import { WhatsAppFloat } from '../components/WhatsAppFloat'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#contenido"
        className="absolute left-4 top-4 z-[60] -translate-y-24 rounded-md bg-foreground px-4 py-2 text-sm text-background transition focus:translate-y-0"
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
