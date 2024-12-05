import { useState } from 'react';
import './style/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="navbar-logo">
        <span className="logo-box">Be Logo</span>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li className="hide-login"> 
          <button className="login-btn">Login</button>
        </li>
        <li className="hide-login">
           <button className="signin-btn">SignUp</button>
        </li>
        
      </ul>
      <div className="navbar-buttons">
        <button className="login-btn">Login</button>
        <button className="signin-btn">Sign In</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
