import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Thin gradient progress bar fixed at the very top of the page.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping:   30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[200] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, hsl(250 90% 65%), hsl(280 80% 60%), hsl(200 90% 60%))',
      }}
    />
  )
}
