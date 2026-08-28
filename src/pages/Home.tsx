import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Hero } from '../sections/Hero'
import { Intro } from '../sections/Intro'
import { Process } from '../sections/Process'
import { Projects } from '../sections/Projects'
import { Services } from '../sections/Services'
import { Technologies } from '../sections/Technologies'

export function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Projects />
      <Technologies />
      <Services />
      <About />
      <Process />
      <Contact />
    </>
  )
}
