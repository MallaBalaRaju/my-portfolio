import { useState, useEffect } from 'react'
import { navLinks } from '../data/portfolio'

/**
 * Tracks which section is currently in view
 * Returns the active section id string
 */
export function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1))

    const onScroll = () => {
      // If we are at the bottom of the page, instantly activate the last section
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      if (isAtBottom) {
        setActive(sections[sections.length - 1]);
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(sections[i])
          return
        }
      }
      setActive('')
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return active
}
