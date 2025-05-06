// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // 引入 CSS 樣式
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-content">
            <img src={logo} alt="Logo" className="logo" />
        
            <div className="nav-links">
                <Link to="/" className="link">HOME</Link>
                <Link to="/about" className="link">ABOUT</Link>
                <Link to="/menu" className="link">MENU</Link>
                <Link to="/location" className="link">LOCATION</Link>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
