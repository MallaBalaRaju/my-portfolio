import { motion } from 'framer-motion'
import { Code2, Database, Cloud } from 'lucide-react'
import { about } from '../data/portfolio'

// Map icon name strings → Lucide components
// 'Cloud' added for the new DevOps/Cloud highlight card
const iconMap = { Code2, Database, Brain: Database, Cloud }

// Respect prefers-reduced-motion
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const fadeUp = {
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-4 relative">
      <div className="container max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-xs font-mono text-primary mb-3 tracking-[0.2em] uppercase">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-white mb-8">
            Full-Stack developer with a
            <span className="gradient-text"> DevOps mindset</span>
          </h2>

          {/* Bio paragraphs */}
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-muted-fg leading-relaxed text-base md:text-lg max-w-3xl mb-6"
            >
              {p}
            </p>
          ))}
        </motion.div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-3 gap-4 mt-12">
          {about.highlights.map((highlightItem, i) => {
            const Icon = iconMap[highlightItem.icon] ?? Code2
            return (
              <motion.div
                key={highlightItem.label}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: prefersReducedMotion
                      ? { duration: 0 }
                      : { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="glass glass-hover rounded-xl p-5 transition-all duration-300"
              >
                {/* Icon badge */}
                <div
                  className="p-2.5 rounded-lg w-fit mb-4"
                  style={{ background: 'var(--chip-bg)', color: 'var(--p1)' }}
                  aria-hidden="true"
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{highlightItem.label}</h3>
                <p className="text-xs text-muted-fg">{highlightItem.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
