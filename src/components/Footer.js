import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons from the free brands icon package
import { faInstagram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/Overview">Overview</a></li>
        <li><a href="/Aboutme">About Me</a></li>
        <li><a href="/SkilldanPengalaman">Skill & Pengalaman</a></li>
        <li><a href="/Login">Join</a></li>
      </ul>

<div className="social-icons">
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
      <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} size="1x" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="1x" />
      </a>

    </div>
      <p><h5>copyright By Gadis Arivia</h5></p>
    </footer>
  );
};

export default Footer;