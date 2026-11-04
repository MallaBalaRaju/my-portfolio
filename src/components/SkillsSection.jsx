import { motion } from 'framer-motion'
import {
  Cloud,
  Code2,
  Server,
  Database,
  Wrench,
} from 'lucide-react'
import { skills } from '../data/portfolio'

// Respect prefers-reduced-motion
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Map category names → icon components
const categoryIconMap = {
  'Cloud & DevOps':       Cloud,
  'Frontend':             Code2,
  'Backend':              Server,
  'Data Science & ML':    Database,
  'Languages & Tools':    Wrench,
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-4 relative">
      <div className="container max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
          }
        >
          <p className="text-xs font-mono text-primary mb-3 tracking-[0.2em] uppercase">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-white mb-12">
            My <span className="gradient-text">Technical Stack</span>
          </h2>
        </motion.div>

        {/* Skill grid — 1 col mobile, 2 col md, up to 2 col all sizes but full-width for DevOps */}
        <div className="grid md:grid-cols-2 gap-5">
          {skills.map((cat, i) => {
            const Icon = categoryIconMap[cat.category] ?? Code2
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
                }
                className={`glass glass-hover rounded-xl p-6 transition-all duration-300 ${
                  // Cloud & DevOps spans full width to emphasise it
                  cat.category === 'Cloud & DevOps' ? 'md:col-span-2' : ''
                }`}
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-5">
                  <div
                    className="p-1.5 rounded-md"
                    style={{ background: 'var(--chip-bg)', color: 'var(--p1)' }}
                    aria-hidden="true"
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-mono text-primary uppercase tracking-[0.15em]">
                    {cat.category}
                  </h3>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-2" aria-label={`${cat.category} skills`}>
                  {cat.items.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { delay: i * 0.1 + j * 0.03, duration: 0.3 }
                      }
                      className="skill-chip"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
