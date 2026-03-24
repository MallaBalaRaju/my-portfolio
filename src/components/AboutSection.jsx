import { motion } from 'framer-motion'
import { Code2, Database, Brain } from 'lucide-react'
import { about } from '../data/portfolio'

// Map icon name strings → Lucide components
const iconMap = { Code2, Database, Brain }

// Shared viewport-triggered animation
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
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
            Passionate about building
            <span className="gradient-text"> impactful software</span>
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
          {about.highlights.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Code2
            return (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: {
                    opacity: 1, y: 0,
                    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="glass glass-hover rounded-xl p-5 transition-all duration-300"
              >
                {/* Icon badge */}
                <div className="p-2.5 rounded-lg w-fit mb-4"
                     style={{ background: 'var(--chip-bg)', color: 'var(--p1)' }}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{item.label}</h3>
                <p className="text-xs text-muted-fg">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
