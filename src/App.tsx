import { useState } from 'react'
import heroBg from './assets/mybusiness.png'
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
        className="hero-band hero-band--full"
        aria-labelledby="hero-heading"
      >
        <img
          className="hero-bg-image"
          src={heroBg}
          alt=""
          aria-hidden="true"
        />
        <div className="hero-bg-overlay" aria-hidden="true" />

        <div className="hero-inner hero-inner--single">
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
                Schedule Consultation
              </button>
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
