import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react'
import { personal, socials } from '../data/portfolio'

// Stagger container for child animations
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const socialLinks = [
  { icon: Github,   href: socials.github,   label: 'GitHub'   },
  { icon: Linkedin, href: socials.linkedin, label: 'LinkedIn' },
  { icon: Mail,     href: socials.email,    label: 'Email'    },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden"
    >
      <motion.div
        className="container max-w-4xl mx-auto text-center relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* "Open to opportunities" badge */}
        <motion.div variants={item} className="flex justify-center mb-6">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                       text-xs font-mono text-muted-fg"
            style={{
              background: 'hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.08)',
              border:     '1px solid hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.15)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {personal.available ? 'Open to opportunities' : 'Currently unavailable'}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.9] mb-6"
        >
          <span className="block text-white">{personal.name.split(' ')[0]}</span>
          <span className="block gradient-text glow-text">
            {personal.name.split(' ').slice(1).join(' ')}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-muted-fg max-w-2xl mx-auto leading-relaxed mb-3"
        >
          {personal.title}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="text-sm md:text-base text-muted-fg/70 max-w-lg mx-auto leading-relaxed mb-10"
        >
          {personal.subtitle}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          {/* View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                       bg-primary text-white font-medium text-sm
                       hover:brightness-110 active:scale-95
                       transition-all duration-200 glow-border"
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* Download CV */}
          <a
            href={socials.resume}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                       glass text-white font-medium text-sm
                       hover:border-primary/30 active:scale-95
                       transition-all duration-200"
          >
            Download CV
            <Download className="w-4 h-4" />
          </a>

          {/* Get in Touch */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                       glass text-white font-medium text-sm
                       hover:border-primary/30 active:scale-95
                       transition-all duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social icon links */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-5"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl glass glass-hover text-muted-fg
                         hover:text-white transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom divider */}
      <div className="section-line absolute bottom-0 left-0 right-0" />
    </section>
  )
}
