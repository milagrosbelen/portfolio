import { useEffect, useState } from 'react'

function isDarkUnderNav() {
  const x = Math.round(window.innerWidth / 2)
  const y = 28
  const stack = document.elementsFromPoint(x, y)

  return stack.some((node) => {
    if (!(node instanceof Element)) return false
    if (node.closest('header')) return false
    return Boolean(node.closest('[data-nav-theme="dark"]'))
  })
}

export function useNavOnDark() {
  const [onDark, setOnDark] = useState(true)

  useEffect(() => {
    let ticking = false

    const check = () => {
      setOnDark(isDarkUnderNav())
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        check()
        ticking = false
      })
    }

    check()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return onDark
}
