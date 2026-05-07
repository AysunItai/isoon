import logo from '../../assets/logo.png'

export function Footer() {
  return (
    <footer className="landing-footer">
      <div className="landing-inner landing-inner--footer landing-footer-row">
        <a className="landing-footer-brand" href="#top" aria-label="Isoon — home">
          <img
            className="landing-footer-logo"
            src={logo}
            alt="Isoon"
            width={120}
            height={40}
          />
        </a>
        <p className="landing-footer-text">
          AutoEmail AI — AI email automation for small businesses
        </p>
      </div>
    </footer>
  )
}
