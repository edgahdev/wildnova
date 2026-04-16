import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        
        <div className="contact-info">
          <a 
            href="https://wa.me/254792157566?text=Hello%20Wildnova%2C%20I%20would%20like%20to%20inquire%20about%20your%20tour%20packages." 
            className="contact-item"
          >
            <FaPhoneAlt className="contact-icon" />
            <span>+254 792 157566</span>
          </a>

          <a href="mailto:wildnovatravel@gmail.com" className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>wildnovatravel@gmail.com</span>
          </a>             
        </div>
        
        <div className="social-links">
          <a href="https://www.facebook.com/share/1KLuitoBoK/" className="social-link" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/wildnovatravel?igsh=MWU4Y3g0cWRvYzdm" className="social-link" aria-label="Instagram">
            <FaInstagram />
          </a>
          
        </div>

      </div>
    </div>
  );
};

export default Topbar;