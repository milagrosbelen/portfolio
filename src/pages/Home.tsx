import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Hero } from '../sections/Hero'
import { Process } from '../sections/Process'
import { Projects } from '../sections/Projects'
import { Services } from '../sections/Services'

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Projects />
      <About />
      <Contact />
    </>
  )
}
