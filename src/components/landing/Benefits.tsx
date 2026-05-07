const benefits = [
  'Faster replies',
  'Fewer missed leads',
  'Less manual inbox work',
  'Uses your business data',
  'Simple setup',
  'Human review before sending',
] as const

export function Benefits() {
  return (
    <section
      className="landing-section landing-section--benefits"
      aria-labelledby="benefits-heading"
    >
      <div className="landing-inner">
        <header className="landing-section-head landing-section-head--narrow">
          <h2 id="benefits-heading" className="landing-section-title">
            Built for small businesses that live in their inbox
          </h2>
        </header>
        <ul className="landing-card-grid landing-card-grid--benefits">
          {benefits.map((title) => (
            <li key={title} className="landing-card landing-card--benefit">
              <span className="landing-benefit-dot" aria-hidden="true" />
              <h3 className="landing-card-title landing-card-title--compact">
                {title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
