import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <nav className="site-nav" aria-label="Primary">
          <Link to="/coming-soon" className="site-nav__link">
            What to do?
          </Link>
          <Link to="/coming-soon" className="site-nav__link">
            Information
          </Link>
          <Link to="/coming-soon" className="site-nav__link">
            Contact
          </Link>
        </nav>

        <Link to="/" className="site-logo" aria-label="Logo">
          <img
            src="/images/logo.png"
            alt="Buenos Aires Ciudad logo"
            className="site-logo__image"
          />
        </Link>
      </div>
    </header>
  );
}
