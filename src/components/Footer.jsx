import { personal } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 pt-8 pb-10 px-4 overflow-hidden">
      {/* Glowing orb at the top center — matches the screenshot dot */}
      <div className="flex justify-center mb-6">
        <div style={{
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          border: '2px solid hsl(var(--primary-h) var(--primary-s) var(--primary-l))',
          boxShadow: `
            0 0 8px hsl(var(--primary-h) var(--primary-s) var(--primary-l)),
            0 0 20px hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.5),
            inset 0 0 6px hsl(var(--primary-h) var(--primary-s) var(--primary-l))
          `,
          background: 'hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.25)',
          animation: 'footerPulse 2.5s ease-in-out infinite',
        }} />
      </div>

      {/* Divider line */}
      <div className="section-line mb-6" />

      {/* Built by text — centered, monospace, minimal */}
      <p
        className="text-center font-mono text-xs tracking-widest"
        style={{ color: 'var(--muted-text)' }}
      >
        Built by{' '}
        <a
          href="https://github.com/MallaBalaRaju"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold transition-colors duration-200"
          style={{ color: 'hsl(var(--primary-h) var(--primary-s) var(--primary-l))' }}
          onMouseEnter={e => e.target.style.textShadow = '0 0 12px hsl(var(--primary-h) var(--primary-s) var(--primary-l))'}
          onMouseLeave={e => e.target.style.textShadow = 'none'}
        >
          {personal.name}
        </a>
        {' '}·{' '}React · Django · {year}
      </p>

      {/* Pulse keyframe injected via style tag */}
      <style>{`
        @keyframes footerPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px hsl(var(--primary-h) var(--primary-s) var(--primary-l)), 0 0 20px hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.5); }
          50%       { opacity: 0.6; box-shadow: 0 0 4px hsl(var(--primary-h) var(--primary-s) var(--primary-l)), 0 0 10px hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.3); }
        }
      `}</style>
    </footer>
  )
}
