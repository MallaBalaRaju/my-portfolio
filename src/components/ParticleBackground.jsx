import { useEffect, useRef } from 'react'

/**
 * Optimised canvas particle background.
 * - Fewer particles (1 per 25000px² instead of 15000)
 * - Connection lines drawn only every 3rd frame to reduce CPU load
 * - Uses will-change: transform hint for GPU compositing
 */
export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    let frame = 0

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      // Fewer particles: 1 per 25000px² (was 15000) = ~60% less work
      const count = Math.floor((canvas.width * canvas.height) / 25000)
      particles = Array.from({ length: count }, () => ({
        x:       Math.random() * canvas.width,
        y:       Math.random() * canvas.height,
        vx:      (Math.random() - 0.5) * 0.25,
        vy:      (Math.random() - 0.5) * 0.25,
        size:    Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        pulse:   Math.random() * Math.PI * 2,
      }))
    }

    const draw = () => {
      frame++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Move + draw dots every frame
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        p.pulse += 0.015

        if (p.x < 0)             p.x = canvas.width
        if (p.x > canvas.width)  p.x = 0
        if (p.y < 0)             p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const o = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(250, 90%, 75%, ${o})`
        ctx.fill()
      })

      // Draw connection lines only every 3rd frame — big perf win
      if (frame % 3 === 0) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx   = particles[i].x - particles[j].x
            const dy   = particles[i].y - particles[j].y
            const dist = dx * dx + dy * dy  // skip sqrt — compare squared
            if (dist < 120 * 120) {
              const d = Math.sqrt(dist)
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.strokeStyle = `hsla(250, 90%, 65%, ${0.08 * (1 - d / 120)})`
              ctx.lineWidth   = 0.5
              ctx.stroke()
            }
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    createParticles()
    draw()

    const handleResize = () => { resize(); createParticles() }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6, willChange: 'transform' }}
    />
  )
}
