import { useEffect, type ReactNode } from 'react'
import { SpaceBackdrop } from '../components/SpaceBackdrop'
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
    <div className="relative isolate min-h-screen bg-[#03040a]">
      <SpaceBackdrop />
      <a
        href="#contenido"
        className="absolute left-4 top-4 z-[60] -translate-y-24 rounded-md bg-white px-4 py-2 text-sm text-foreground transition focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <div className="relative z-[2]">
        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />
      </div>
      <WhatsAppFloat />
    </div>
  )
}
