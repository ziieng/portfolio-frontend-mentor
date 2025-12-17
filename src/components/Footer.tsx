import { Link } from 'react-router-dom';
import Logo from "../assets/images/logo.svg?react";

const Footer = () => (
  <footer>
    <nav>
    <Link to="/" className='logo'><Logo /></Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  </footer>
)

export default Footer;
