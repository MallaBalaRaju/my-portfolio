import { useState, useCallback } from 'react'

// Layout & global UI
import Preloader         from './components/Preloader'
import ScrollProgress    from './components/ScrollProgress'
import ParticleBackground from './components/ParticleBackground'
import Navbar            from './components/Navbar'
import Footer            from './components/Footer'

// Page sections
import HeroSection       from './components/HeroSection'
import AboutSection      from './components/AboutSection'
import SkillsSection     from './components/SkillsSection'
import ProjectsSection   from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection  from './components/EducationSection'
import ContactSection    from './components/ContactSection'

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
        />
        <div
          className="floating-orb"
          style={{ background: 'var(--p2)', bottom: '25%', right: '-10%' }}
        />

        {/* ── Navigation ── */}
        <Navbar />

        {/* ── Page sections ── */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </main>

        {/* ── Footer ── */}
        <Footer />

      </div>
    </>
  )
}
