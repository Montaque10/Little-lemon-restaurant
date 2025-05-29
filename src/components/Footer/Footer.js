import React from "react";
import small_logo from "../../assets/logo-small.png";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-content">
        <div className="footer-logo">
          <img src={small_logo} alt="Little Lemon Logo" />
          <p className="footer-tagline">Authentic Mediterranean Flavors</p>
        </div>
        
        <div className="footer-column">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/booking">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>123 Lemon Street</li>
            <li>Chicago, IL 60601</li>
            <li>+1 (312) 555-0199</li>
            <li>info@littlelemon.com</li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter className="social-icon" />
            </a>
          </div>
          <p className="newsletter-text">Subscribe to our newsletter</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email" 
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">
              Join
            </button>
          </form>
        </div>
      </section>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;