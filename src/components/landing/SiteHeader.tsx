import logo from '../../assets/logo.png'

type SiteHeaderProps = {
  onBookDemo: () => void
}

export function SiteHeader({ onBookDemo }: SiteHeaderProps) {
  return (
    <header className="site-header" role="banner">
      <div className="site-header-inner">
        <a className="site-brand" href="#top" aria-label="Isoon — home">
          <img
            className="site-brand-logo"
            src={logo}
            alt="Isoon"
            width={160}
            height={64}
          />
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a className="site-nav-link" href="#how-heading">
            How it works
          </a>
          <a className="site-nav-link" href="#demo">
            Demo
          </a>
          <a className="site-nav-link" href="#benefits-heading">
            Benefits
          </a>
        </nav>

        <button
          type="button"
          className="hero-btn hero-btn-primary site-header-cta"
          onClick={onBookDemo}
        >
          Get Free Consultation
        </button>
      </div>
    </header>
  )
}
