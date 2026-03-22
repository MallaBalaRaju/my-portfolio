import { Github, Linkedin, Mail } from 'lucide-react'
import { personal, socials } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 px-4 pb-10">
      <div className="container max-w-4xl mx-auto">
        {/* Divider */}
        <div className="section-line mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-muted-fg font-mono">
            © {year} {personal.name}. Crafted with ❤️
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-fg hover:text-primary transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-fg hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={socials.email}
              aria-label="Email"
              className="text-muted-fg hover:text-primary transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Built with */}
          <p className="text-xs text-muted-fg/50 font-mono">
            Built with React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
