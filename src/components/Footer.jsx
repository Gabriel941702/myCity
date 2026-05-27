import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__col">
          <p className="site-footer__brand">©Turismo Buenos Aires</p>
          <Link to="/coming-soon" className="site-footer__link">
            Subscribe to our newsletter
          </Link>
          <Link to="/coming-soon" className="site-footer__link">
            Contact us
          </Link>
        </div>

        <div className="site-footer__col site-footer__col--right">
          <p>Created by Sofía Diástola</p>
          <p>© 2022</p>
        </div>
      </div>
    </footer>
  );
}
