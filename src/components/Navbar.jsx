import { motion, AnimatePresence } from 'framer-motion'
import { Download, Sun, Moon } from 'lucide-react'
import { navLinks, personal, socials } from '../data/portfolio'
import { useScrolled }        from '../hooks/useScrolled'
import { useActiveSection }   from '../hooks/useActiveSection'
import { useTheme }           from './ThemeContext'

/**
 * Fixed top navigation bar.
 * • Glass blur applied after scrolling past 20 px
 * • Active section highlighted with an animated background pill
 * • Resume download + Theme toggle + Let's Talk CTA buttons on the right
 */
export default function Navbar() {
  const scrolled = useScrolled(20)
  const active   = useActiveSection()
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">

        {/* Logo */}
        <a href="#" className="font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
          <span className="gradient-text">{personal.shortName}</span>
          <span className="text-[hsl(var(--primary-h),var(--primary-s),var(--primary-l))]">.</span>
        </a>

        {/* Nav links — desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm px-3 py-1.5 rounded-lg transition-colors duration-200 ${
                active === link.href.slice(1)
                  ? 'text-[var(--text-main)] font-medium'
                  : 'text-[var(--muted-text)] hover:text-[var(--text-main)]'
              }`}
            >
              {/* Animated active pill */}
              {active === link.href.slice(1) && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: 'hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.1)',
                    border:     '1px solid hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.2)',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Right-side CTAs */}
        <div className="flex items-center gap-2">
          {/* Resume download */}
          <a
            href={socials.resume}
            download
            className="hidden sm:inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg
                       border border-[hsla(var(--primary-h),var(--primary-s),var(--primary-l),0.3)] 
                       text-[var(--text-main)] hover:bg-[hsla(var(--primary-h),var(--primary-s),var(--primary-l),0.1)]
                       hover:border-[hsla(var(--primary-h),var(--primary-s),var(--primary-l),0.5)] transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>

          {/* Let's Talk */}
          <a
            href="#contact"
            className="inline-flex items-center text-sm px-4 py-2 rounded-lg 
                       bg-[hsl(var(--primary-h),var(--primary-s),var(--primary-l))] text-white
                       hover:brightness-110 transition-all duration-200 active:scale-95 glow-border"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
