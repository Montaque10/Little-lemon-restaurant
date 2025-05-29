import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/logo.jpg';
import './Nav.css';

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Little Lemon Logo" />
        </Link>
        
        <ul className="navbar-menu">
          <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/menu' ? 'active' : ''}`}>
            <Link to="/menu" className="navbar-link">Menu</Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/booking' ? 'active' : ''}`}>
            <Link to="/booking" className="navbar-link">Reservations</Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/order' ? 'active' : ''}`}>
            <Link to="/order" className="navbar-link">Order Online</Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/login' ? 'active' : ''}`}>
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;