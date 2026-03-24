import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { personal, socials } from '../data/portfolio'

const contactLinks = [
  {
    icon:    Mail,
    label:   'Email',
    display: personal.email,
    href:    socials.email,
  },
  {
    icon:    Phone,
    label:   'Phone',
    display: personal.phone,
    href:    socials.phone,
  },
  {
    icon:    Linkedin,
    label:   'LinkedIn',
    display: 'linkedin.com/in/malla-balaraju',
    href:    socials.linkedin,
  },
  {
    icon:    Github,
    label:   'GitHub',
    display: 'github.com/MallaBalaRaju',
    href:    socials.github,
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-4 relative">
      <div className="container max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <p className="text-xs font-mono text-primary mb-3 tracking-[0.2em] uppercase">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-white mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-fg max-w-md mx-auto">
            I&apos;m always open to discussing new opportunities, collaborations,
            or just chatting about tech.
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' && link.label !== 'Phone' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass glass-hover rounded-xl p-5 flex items-center gap-4
                         transition-all duration-300 group"
            >
              {/* Icon */}
              <div
                className="p-2.5 rounded-lg flex-shrink-0"
                style={{ background: 'var(--chip-bg)', color: 'var(--p1)' }}
              >
                <link.icon className="w-5 h-5" />
              </div>

              {/* Label + value */}
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-mono text-muted-fg/60 uppercase tracking-widest">
                  {link.label}
                </p>
                <p className="text-sm text-white truncate">{link.display}</p>
              </div>

              {/* Arrow */}
              <ArrowUpRight
                className="w-4 h-4 text-muted-fg/30 group-hover:text-primary
                           transition-colors flex-shrink-0"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
