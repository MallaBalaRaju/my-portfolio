import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personal } from '../data/portfolio'

/**
 * Full-screen loading screen with animated progress bar.
 * Calls onComplete() when done.
 */
export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 15 + 5
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 400)
          return 100
        }
        return next
      })
    }, 80)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[var(--bg-color)]"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              <span className="gradient-text">{personal.shortName}</span>
            </h1>
            <p className="text-xs font-mono tracking-widest uppercase mb-8" style={{ color: 'var(--muted-text)' }}>
              Loading Experience
            </p>
          </motion.div>

          {/* Progress bar track */}
          <div className="w-48 h-[2px] rounded-full overflow-hidden" style={{ background: 'var(--glass-border)' }}>
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: 'linear-gradient(90deg, hsl(var(--primary-h) 90% 55%), hsl(var(--primary2-h) 90% 65%))',
              }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <p className="text-xs font-mono mt-3" style={{ color: 'var(--muted-text)' }}>
            {Math.min(Math.round(progress), 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
