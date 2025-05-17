import React from 'react';
import './Header.scss';
import { FaHotel } from 'react-icons/fa';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="logo"><FaHotel /> The Sleeks Resort</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#testimonials">Experiences</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;
