import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg?react";
import GitHub from "../../assets/images/icons/github.svg?react";
import LinkedIn from "../../assets/images/icons/linkedin.svg?react";
import Twitter from "../../assets/images/icons/twitter.svg?react";
import "./Footer.css";

const Footer = () => (
  <footer>
    <div className="content">
      <Link to="/" className="icon" aria-label="Homepage">
        <Logo />
      </Link>
      <nav>
        <ul className="left">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </nav>
      <div className="social-links">
        <ul className="right">
          <li>
            <Link
              to="https://www.github.com"
              className="icon"
              aria-label="GitHub"
            >
              <GitHub />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.twitter.com"
              className="icon"
              aria-label="Twitter"
            >
              <Twitter />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com"
              className="icon"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
