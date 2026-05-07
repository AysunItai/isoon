type CtaSectionProps = {
  onBookDemo: () => void
}

export function CtaSection({ onBookDemo }: CtaSectionProps) {
  return (
    <section
      id="book"
      className="landing-section landing-section--cta"
      aria-labelledby="cta-heading"
    >
      <div className="landing-inner landing-inner--cta">
        <h2 id="cta-heading" className="landing-section-title">
          Ready to automate your inbox?
        </h2>
        <p className="landing-section-sub landing-section-sub--cta">
          Claim your free consultation today and see how this could work for
          your business.
        </p>
        <button
          type="button"
          className="hero-btn hero-btn-primary landing-cta-btn"
          onClick={onBookDemo}
        >
          Get Free Consultation
        </button>
      </div>
    </section>
  )
}
