import { motion } from 'framer-motion'
import { Download, Sun, Moon, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navLinks, personal, socials } from '../data/portfolio'
import { useScrolled }      from '../hooks/useScrolled'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme }         from './ThemeContext'

// Respect prefers-reduced-motion
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Fixed top navigation bar.
 * • Glass blur applied after scrolling past 20 px
 * • Active section highlighted with an animated background pill
 * • Resume download + Theme toggle + Let's Talk CTA buttons on the right
 * • Mobile hamburger menu at < md breakpoint
 */
export default function Navbar() {
  const scrolled = useScrolled(20)
  const active   = useActiveSection()
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header>
      <motion.nav
        initial={{ y: prefersReducedMotion ? 0 : -100 }}
        animate={{ y: 0 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">

          {/* Logo */}
          <a
            href="#hero"
            className="font-bold text-lg tracking-tight hover:opacity-80 transition-opacity
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
            aria-label={`${personal.name} — back to top`}
          >
            <span className="gradient-text">{personal.shortName}</span>
            <span className="text-[hsl(var(--primary-h),var(--primary-s),var(--primary-l))]">.</span>
          </a>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Desktop navigation">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm px-3 py-1.5 rounded-lg transition-colors duration-200
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
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
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 400, damping: 30 }
                    }
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Right-side CTAs */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-lg text-muted-fg hover:text-white transition-colors duration-200
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              {theme === 'dark'
                ? <Sun  className="w-4 h-4" aria-hidden="true" />
                : <Moon className="w-4 h-4" aria-hidden="true" />
              }
            </button>

            {/* Resume download — visible at ≥ 360px */}
            <a
              href={socials.resume}
              download
              aria-label="Download resume PDF"
              className="inline-flex items-center gap-1.5 text-sm px-3 sm:px-4 py-2 rounded-lg
                         border border-[hsla(var(--primary-h),var(--primary-s),var(--primary-l),0.3)]
                         text-[var(--text-main)] hover:bg-[hsla(var(--primary-h),var(--primary-s),var(--primary-l),0.1)]
                         hover:border-[hsla(var(--primary-h),var(--primary-s),var(--primary-l),0.5)] transition-all duration-200
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span className="hidden xs:inline">Resume</span>
            </a>

            {/* Let's Talk */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center text-sm px-4 py-2 rounded-lg
                         bg-[hsl(var(--primary-h),var(--primary-s),var(--primary-l))] text-white
                         hover:brightness-110 transition-all duration-200 active:scale-95 glow-border
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Let&apos;s Talk
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className="md:hidden p-2 rounded-lg text-muted-fg hover:text-white transition-colors
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              {mobileOpen
                ? <X    className="w-5 h-5" aria-hidden="true" />
                : <Menu className="w-5 h-5" aria-hidden="true" />
              }
            </button>
          </div>
        </div>

        {/* Mobile nav drawer */}
        {mobileOpen && (
          <div
            id="mobile-nav"
            className="md:hidden glass-nav border-t border-[var(--glass-border)] px-4 py-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm px-3 py-2.5 rounded-lg transition-colors duration-200
                              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    active === link.href.slice(1)
                      ? 'text-[var(--text-main)] font-medium bg-[hsla(var(--primary-h),var(--primary-s),var(--primary-l),0.1)]'
                      : 'text-[var(--muted-text)] hover:text-[var(--text-main)]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={socials.resume}
                download
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center gap-2 text-sm px-3 py-2.5 rounded-lg
                           border border-[hsla(var(--primary-h),var(--primary-s),var(--primary-l),0.3)]
                           text-[var(--text-main)] hover:bg-[hsla(var(--primary-h),var(--primary-s),var(--primary-l),0.1)]
                           transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </motion.nav>
    </header>
  )
}
