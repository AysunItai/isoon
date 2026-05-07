const steps = [
  {
    title: 'Customer email arrives',
    body: 'The system detects new emails from your business inbox.',
  },
  {
    title: 'AI understands the request',
    body: 'It classifies the message as a lead, support request, billing question, spam, or something else.',
  },
  {
    title: 'Draft reply is created',
    body: 'A professional response is prepared in your Drafts folder, ready for review.',
  },
] as const

export function HowItWorks() {
  return (
    <section
      className="landing-section landing-section--how"
      aria-labelledby="how-heading"
    >
      <div className="landing-inner">
        <header className="landing-section-head">
          <h2 id="how-heading" className="landing-section-title">
            How it works
          </h2>
          <p className="landing-section-sub">
            From incoming email to ready-to-review reply in seconds.
          </p>
        </header>
        <ul className="landing-card-grid landing-card-grid--3">
          {steps.map((step, i) => (
            <li key={step.title} className="landing-card landing-card--step">
              <span className="landing-step-num" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="landing-card-title">{step.title}</h3>
              <p className="landing-card-body">{step.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
