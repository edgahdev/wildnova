import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col">
            <h2 className="footer-logo">WildNova</h2>
            <p className="footer-description">
              Creating unforgettable safari experiences across East Africa. 
              Luxury, authenticity, and adventure since 2008.
            </p>
            

<div className="social-links">
  <a 
    href="https://www.facebook.com/share/1KLuitoBoK/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a 
    href="https://www.instagram.com/wildnovatravel?igsh=MWU4Y3g0cWRvYzdm" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-link"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  {/* Add later when ready */}
  {/* 
  <a href="#" className="social-link"><FaTwitter /></a>
  <a href="#" className="social-link"><FaYoutube /></a> 
  */}
</div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/tour-packages">Tour Packages</Link></li>
            </ul>
          </div>

          {/* Tour Packages */}
          <div className="footer-col">
            <h3 className="footer-title">Tour Packages</h3>
            <ul className="footer-links">
              <li><Link to="/tour-packages/day-trips">Day Trips</Link></li>
              <li><Link to="/tour-packages/nairobi-tours">Nairobi Tours</Link></li>
              <li><Link to="/tour-packages/mombasa-tours">Mombasa Tours</Link></li>
              <li><Link to="/tour-packages/kenya-tanzania-safaris">Kenya - Tanzania Safaris</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="contact-info">
              <li>
      <FaMapMarkerAlt className="contact-icon" />
      <span>Mombasa, Diani</span>
    </li>

    <li>
      <FaPhoneAlt className="contact-icon" />
      <a href="tel:+254792157566">+254 792 157566</a>
    </li>

    <li>
      <FaEnvelope className="contact-icon" />
      <a href="mailto:wildnovatravel@gmail.com">
        wildnovatravel@gmail.com
      </a>
    </li>

    <li>
      <FaClock className="contact-icon" />
      <span>Mon-Fri: 8AM - 6PM</span>
    </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} WildNova Safaris. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;