import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import { education } from '../data/portfolio'

export default function EducationSection() {
  return (
    <section id="education" className="py-28 px-4 relative">
      <div className="container max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-mono text-primary mb-3 tracking-[0.2em] uppercase">
            Education
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-white mb-12">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        {/* Education cards */}
        <div className="grid gap-5">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass glass-hover rounded-xl p-6 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="p-2.5 rounded-lg mt-0.5 flex-shrink-0"
                  style={{ background: 'hsla(250,90%,65%,0.1)', color: 'hsl(250 90% 65%)' }}
                >
                  <GraduationCap className="w-5 h-5" />
                </div>

                <div className="flex-1">
                  {/* Degree + period */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                      {edu.field && (
                        <p className="text-sm text-muted-fg">{edu.field}</p>
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-muted-fg/60 whitespace-nowrap mt-1">
                      {edu.period}
                    </span>
                  </div>

                  {/* School */}
                  <p className="text-sm text-muted-fg mt-1">{edu.school}</p>

                  {/* Location */}
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-muted-fg/50" />
                    <span className="text-xs text-muted-fg/50">{edu.location}</span>
                  </div>

                  {/* Grade + highlight chips */}
                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    <span className="skill-chip text-xs" style={{ color: 'hsl(250 90% 65%)' }}>
                      {edu.grade}
                    </span>
                    {edu.highlight && (
                      <span className="skill-chip text-xs text-white">
                        {edu.highlight}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
