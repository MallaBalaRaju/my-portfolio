import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Custom spring-physics cursor with hover expand effect.
 * Only renders on non-touch devices.
 */
export default function CustomCursor() {
  const [pos,      setPos]      = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [visible,  setVisible]  = useState(false)

  useEffect(() => {
    // Skip on touch devices
    if ('ontouchstart' in window) return

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const enter = () => setHovering(true)
    const leave = () => setHovering(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', () => setVisible(false))
    window.addEventListener('mouseenter', () => setVisible(true))

    // Attach to all interactive elements
    const attach = () => {
      document.querySelectorAll('a, button, [role="button"], .cursor-target')
        .forEach(el => {
          el.addEventListener('mouseenter', enter)
          el.addEventListener('mouseleave', leave)
        })
    }
    attach()
    // Re-attach after short delay for dynamically rendered elements
    const t = setTimeout(attach, 1000)

    return () => {
      window.removeEventListener('mousemove', move)
      clearTimeout(t)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      {/* Main dot — snaps instantly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference rounded-full bg-white"
        animate={{
          x: pos.x - (hovering ? 20 : 6),
          y: pos.y - (hovering ? 20 : 6),
          width:  hovering ? 40 : 12,
          height: hovering ? 40 : 12,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      {/* Trailing ring — lags behind */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-white/30"
        animate={{
          x:       pos.x - 20,
          y:       pos.y - 20,
          width:   40,
          height:  40,
          opacity: hovering ? 0 : 0.5,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.8 }}
      />
    </>
  )
}
