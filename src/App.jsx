import { lazy, Suspense, useState, useCallback } from 'react'

// Layout & global UI — eagerly loaded (above the fold)
import Preloader          from './components/Preloader'
import ScrollProgress     from './components/ScrollProgress'
import ParticleBackground from './components/ParticleBackground'
import Navbar             from './components/Navbar'
import HeroSection        from './components/HeroSection'
import Footer             from './components/Footer'

// Below-the-fold sections — lazy loaded for faster initial render
const AboutSection      = lazy(() => import('./components/AboutSection'))
const SkillsSection     = lazy(() => import('./components/SkillsSection'))
const ProjectsSection   = lazy(() => import('./components/ProjectsSection'))
const ExperienceSection = lazy(() => import('./components/ExperienceSection'))
const EducationSection  = lazy(() => import('./components/EducationSection'))
const ContactSection    = lazy(() => import('./components/ContactSection'))

// Minimal fallback — invisible height placeholder so layout doesn't jump
function SectionFallback() {
  return <div className="py-28 px-4" aria-hidden="true" />
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const handleLoaded = useCallback(() => setLoading(false), [])

  return (
    <>
      {/* ── Preloader (removed from DOM once done) ── */}
      {loading && <Preloader onComplete={handleLoaded} />}

      <div className="min-h-screen relative">
        {/* ── Global UI overlays ── */}
        <ScrollProgress />
        <ParticleBackground />

        {/* Fixed gradient orbs */}
        <div
          className="floating-orb"
          style={{ background: 'var(--p1)', top: '25%', left: '-10%' }}
          aria-hidden="true"
        />
        <div
          className="floating-orb"
          style={{ background: 'var(--p2)', bottom: '25%', right: '-10%' }}
          aria-hidden="true"
        />

        {/* ── Navigation ── */}
        <Navbar />

        {/* ── Page sections ── */}
        <main id="main-content">
          {/* Hero is above the fold — eagerly loaded */}
          <HeroSection />

          {/* Below-fold sections wrapped in Suspense */}
          <Suspense fallback={<SectionFallback />}>
            <AboutSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <SkillsSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ProjectsSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ExperienceSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <EducationSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ContactSection />
          </Suspense>
        </main>

        {/* ── Footer ── */}
        <Footer />
      </div>
    </>
  )
}
