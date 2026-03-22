import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X, Github } from 'lucide-react'
import { projects } from '../data/portfolio'

/* ── Project card ── */
function ProjectCard({ project, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="glass glass-hover rounded-xl p-6 cursor-target group transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          {/* Title + Featured badge */}
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            {project.featured && (
              <span
                className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5
                           rounded-full border"
                style={{
                  background:   'hsla(250,90%,65%,0.1)',
                  color:        'hsl(250 90% 65%)',
                  borderColor:  'hsla(250,90%,65%,0.2)',
                }}
              >
                Featured
              </span>
            )}
          </div>
          <p className="text-xs font-mono text-primary">{project.subtitle}</p>
        </div>

        {/* Arrow icon */}
        <ArrowUpRight
          className="w-5 h-5 text-muted-fg group-hover:text-primary
                     group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                     transition-all duration-300 flex-shrink-0"
        />
      </div>

      <p className="text-sm text-muted-fg leading-relaxed mb-4">{project.desc}</p>

      {/* Tech tags + date */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map(tag => (
            <span
              key={tag}
              className="text-[11px] font-mono text-muted-fg/70 px-2 py-1 rounded-md"
              style={{ background: 'hsla(220,15%,15%,0.5)' }}
            >
              {tag}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="text-[11px] font-mono text-muted-fg/50 px-2 py-1">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
        <span className="text-xs font-mono text-muted-fg/50">{project.date}</span>
      </div>
    </motion.div>
  )
}

/* ── Modal overlay ── */
function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal box */}
      <motion.div
        className="relative glass rounded-2xl p-6 md:p-8 max-w-lg w-full z-10 glow-border"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1,   opacity: 1, y: 0  }}
        exit={{    scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-muted-fg
                     hover:text-white hover:bg-muted/50 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="mb-1">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className="text-sm font-mono text-primary">{project.subtitle}</p>
        </div>

        <p className="text-sm text-muted-fg leading-relaxed mt-4 mb-4">{project.desc}</p>

        {/* Bullet details */}
        <ul className="space-y-2 mb-6">
          {project.details.map((d, i) => (
            <li key={i} className="text-sm text-muted-fg flex items-start gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ background: 'hsl(250 90% 65%)' }}
              />
              {d}
            </li>
          ))}
        </ul>

        {/* Full stack chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map(tag => (
            <span key={tag} className="skill-chip text-xs">{tag}</span>
          ))}
        </div>

        {/* GitHub link */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                       glass text-sm text-white hover:border-primary/30
                       transition-all"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Section ── */
export default function ProjectsSection() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-28 px-4 relative">
      <div className="container max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-mono text-primary mb-3 tracking-[0.2em] uppercase">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-white mb-12">
            Selected <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
