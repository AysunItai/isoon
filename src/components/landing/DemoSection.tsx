export function DemoSection() {
  return (
    <section
      id="demo"
      className="landing-section landing-section--demo"
      aria-labelledby="demo-heading"
    >
      <div className="landing-inner">
        <header className="landing-section-head">
          <h2 id="demo-heading" className="landing-section-title">
            See it in action
          </h2>
          <p className="landing-section-sub">
            Watch how a customer email becomes a ready-to-review draft reply
            automatically.
          </p>
        </header>
        <div className="landing-video-frame">
          <video
            className="landing-video"
            controls
            playsInline
            preload="metadata"
            aria-label="Demo: customer email to draft reply"
          >
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </div>
      </div>
    </section>
  )
}
