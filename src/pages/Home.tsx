import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Hero } from '../sections/Hero'
import { Process } from '../sections/Process'
import { Projects } from '../sections/Projects'
import { Services } from '../sections/Services'
import { Approach } from '../sections/Approach'

export function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Process />
      <About />
      <Approach />
      <Contact />
    </>
  )
}
