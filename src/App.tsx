import { useState } from 'react'
import heroAside from './assets/hero-aside.png'
import { BookingModal } from './components/BookingModal.jsx'
import { Benefits } from './components/landing/Benefits'
import { CtaSection } from './components/landing/CtaSection'
import { DemoSection } from './components/landing/DemoSection'
import { Footer } from './components/landing/Footer'
import { HowItWorks } from './components/landing/HowItWorks'
import { SiteHeader } from './components/landing/SiteHeader'
import './App.css'

function App() {
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <>
      <SiteHeader onBookDemo={() => setBookingOpen(true)} />
      <section
        id="top"
        className="hero-band"
        aria-labelledby="hero-heading"
      >
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 id="hero-heading" className="hero-title">
              Never miss a customer email again
            </h1>
            <p className="hero-lede">
              Isoon reads your inbox, understands customer requests, and
              prepares professional replies automatically.
            </p>
            <div className="hero-actions">
              <a className="hero-btn hero-btn-primary" href="#demo">
                Watch Demo
              </a>
              <button
                type="button"
                className="hero-btn hero-btn-ghost"
                onClick={() => setBookingOpen(true)}
              >
                Get Free Consultation
              </button>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-visual-glow" />
            <div className="hero-visual-frame-shell">
              <div className="hero-visual-frame">
                <img src={heroAside} alt="" width={560} height={640} />
              </div>
              <svg
                className="hero-visual-frame-edge"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <rect
                  x="1.25"
                  y="1.25"
                  width="97.5"
                  height="97.5"
                  rx="6"
                  ry="6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.25}
                  strokeLinejoin="round"
                  vectorEffect="nonScalingStroke"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.85}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="nonScalingStroke"
                  opacity={0.92}
                  points="6,11 50,45 94,11"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <main className="landing-main">
        <HowItWorks />
        <DemoSection />
        <Benefits />
        <CtaSection onBookDemo={() => setBookingOpen(true)} />
        <Footer />
      </main>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  )
}

export default App
