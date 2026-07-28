import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Experience } from '../sections/Experience'
import { Goals } from '../sections/Goals'
import { Hero } from '../sections/Hero'
import { Projects } from '../sections/Projects'
import { Technologies } from '../sections/Technologies'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Experience />
      <Goals />
      <Contact />
    </>
  )
}
