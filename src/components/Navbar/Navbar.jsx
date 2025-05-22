// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="navbar-content">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="navbar-center">
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <Link to="/" className="link">HOME</Link>
            <Link to="/about" className="link">ABOUT</Link>
            <Link to="/menu" className="link">MENU</Link>
            <Link to="/location" className="link">LOCATION</Link>
          </div>
        </div>

        <div className="navbar-right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
