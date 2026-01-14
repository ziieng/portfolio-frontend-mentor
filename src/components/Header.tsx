import { Link, NavLink } from 'react-router-dom';
import Logo from "../assets/images/logo.svg?react";

const Header = () => (
  <header>
    <div className='content'>
      <Link to="/" className='logo'><Logo /></Link>
      <nav>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""}>Portfolio</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact Me</NavLink></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header;
