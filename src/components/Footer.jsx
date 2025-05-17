import React from 'react';
import './Footer.scss';
import { FaFacebookF, FaTwitter, FaInstagram, FaHotel } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-logo"><FaHotel /> The Sleeks Resort</div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#testimonials">Experiences</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} The Sleeks Resort. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
