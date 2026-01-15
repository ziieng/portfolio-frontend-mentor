import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg?react";
import "./Footer.css";

const Footer = () => (
  <footer>
    <div className="content">
      <Link to="/" className="logo">
        <Logo />
      </Link>
      <nav>
        <ul>
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
    </div>
  </footer>
);

export default Footer;
