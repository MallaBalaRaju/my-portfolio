import { motion } from 'framer-motion'
import { Briefcase, Award, BookOpen } from 'lucide-react'
import { experience } from '../data/portfolio'

// Map icon name string → Lucide component
const iconMap = { Briefcase, Award, BookOpen }

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 px-4 relative">
      <div className="container max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-mono text-primary mb-3 tracking-[0.2em] uppercase">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-white mb-12">
            Journey &amp; <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gradient line */}
          <div className="timeline-line absolute left-[19px] top-2 bottom-2 hidden md:block" />

          <div className="space-y-6">
            {experience.map((item, i) => {
              const Icon = iconMap[item.icon] ?? Award
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-5 group"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center pt-1.5">
                    <div className="timeline-dot" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 glass glass-hover rounded-xl p-5 transition-all duration-300">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <Icon
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: 'hsl(250 90% 65%)' }}
                        />
                        <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                      </div>
                      <span className="text-[11px] font-mono text-muted-fg/60 whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-xs font-mono mb-2" style={{ color: 'hsla(250,90%,65%,0.7)' }}>
                      {item.org}
                    </p>
                    <p className="text-sm text-muted-fg leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
