import React from 'react';
import './Hero.scss';

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-overlay">
      <h1>Welcome to The Sleeks Resort</h1>
      <p>Experience luxury, comfort, and unforgettable moments at our exclusive resort.</p>
      <a href="#contact" className="hero-btn">Book Now</a>
    </div>
  </section>
);

export default Hero;
