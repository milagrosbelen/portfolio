import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Hero } from '../sections/Hero'
import { Process } from '../sections/Process'
import { Projects } from '../sections/Projects'

export function Home() {
  return (
    <>
      <Hero />
      <Process />
      <Projects />
      <About />
      <Contact />
    </>
  )
}
