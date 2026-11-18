import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const key = sectionIds.join('|')
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const ids = key.split('|').filter(Boolean)
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { rootMargin: '-35% 0px -50% 0px', threshold: 0 },
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [key])

  return activeSection
}
