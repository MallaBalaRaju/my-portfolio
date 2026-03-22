import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-4 relative">
      <div className="container max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-mono text-primary mb-3 tracking-[0.2em] uppercase">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-white mb-12">
            My <span className="gradient-text">Technical Stack</span>
          </h2>
        </motion.div>

        {/* 2-column skill grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass glass-hover rounded-xl p-6 transition-all duration-300"
            >
              {/* Category label */}
              <h3 className="text-xs font-mono text-primary uppercase tracking-[0.15em] mb-5">
                {cat.category}
              </h3>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.03, duration: 0.3 }}
                    className="skill-chip"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
