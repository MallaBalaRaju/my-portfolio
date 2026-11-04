import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink, X, Github, AlertTriangle } from 'lucide-react'
import { projects } from '../data/portfolio'

// Respect prefers-reduced-motion
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function makeVariants(delay = 0) {
  return {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
    },
  }
}

/* ── Project card ── */
function ProjectCard({ project, onClick, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={makeVariants(index * 0.1)}
      onClick={onClick}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onClick()}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      className="glass glass-hover rounded-xl p-6 cursor-pointer group transition-all duration-300
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          {/* Title + Featured badge */}
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            {project.featured && (
              <span
                className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5
                           rounded-full border"
                style={{
                  background:  'var(--chip-bg)',
                  color:       'var(--p2)',
                  borderColor: 'var(--chip-border)',
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
          aria-hidden="true"
        />
      </div>

      {/* One-line outcome */}
      {project.outcome && (
        <p className="text-sm text-emerald-400/90 font-medium mb-2 leading-snug">
          ✦ {project.outcome}
        </p>
      )}

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

      {/* Quick-action links */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div className="flex gap-2 mt-4" onClick={e => e.stopPropagation()}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} GitHub repository`}
          onClick={e => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg
                     glass text-muted-fg hover:text-white hover:border-primary/30 transition-all
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Github className="w-3.5 h-3.5" aria-hidden="true" /> GitHub
        </a>
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            onClick={e => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg
                       bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" /> Live Demo
          </a>
        ) : (
          <span
            className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg
                       border border-dashed border-muted-fg/20 text-muted-fg/40"
            title="Live demo URL not yet added"
          >
            <AlertTriangle className="w-3.5 h-3.5" aria-hidden="true" /> No live link
          </span>
        )}
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
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.id}`}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal box */}
      <motion.div
        className="relative glass rounded-2xl p-6 md:p-8 max-w-lg w-full z-10 glow-border"
        initial={prefersReducedMotion ? {} : { scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1,   opacity: 1, y: 0  }}
        exit={prefersReducedMotion   ? {} : { scale: 0.9, opacity: 0, y: 20 }}
        transition={prefersReducedMotion ? { duration: 0 } : { type: 'spring', damping: 25, stiffness: 300 }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close project details modal"
          className="absolute top-4 right-4 p-2 rounded-lg text-muted-fg
                     hover:text-white hover:bg-muted/50 transition-colors
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <X size={18} aria-hidden="true" />
        </button>

        {/* Header */}
        <div className="mb-1">
          <h3 id={`modal-title-${project.id}`} className="text-2xl font-bold text-white pr-8">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-primary">{project.subtitle}</p>
        </div>

        {/* Outcome */}
        {project.outcome && (
          <p className="text-sm text-emerald-400/90 font-medium mt-3 mb-1">
            ✦ {project.outcome}
          </p>
        )}

        <p className="text-sm text-muted-fg leading-relaxed mt-3 mb-4">{project.desc}</p>

        {/* Bullet details */}
        <ul className="space-y-2 mb-6" aria-label="Project details">
          {project.details.map((d, i) => (
            <li key={i} className="text-sm text-muted-fg flex items-start gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ background: 'var(--p1)' }}
                aria-hidden="true"
              />
              {d}
            </li>
          ))}
        </ul>

        {/* Full stack chips */}
        <div className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
          {project.stack.map(tag => (
            <span key={tag} className="skill-chip text-xs">{tag}</span>
          ))}
        </div>

        {/* Action links */}
        <div className="flex gap-3 flex-wrap">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub repository (opens in new tab)`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                       glass text-sm text-white hover:border-primary/30
                       transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Github size={16} aria-hidden="true" /> GitHub
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo (opens in new tab)`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                         bg-primary/10 border border-primary/30 text-primary text-sm
                         hover:bg-primary/20 transition-all
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ExternalLink size={16} aria-hidden="true" /> Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                             border border-dashed border-muted-fg/20 text-muted-fg/40 text-sm">
              <AlertTriangle size={16} aria-hidden="true" /> Live link missing
            </span>
          )}
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
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={makeVariants()}
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
