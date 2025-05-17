import React from 'react';
import './About.scss';

const About = () => (
  <section className="about" id="about">
    <div className="container">
      <div className="about-content">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80" alt="Resort view" />
        </div>
        <div className="about-text">
          <h2>About The Sleeks Resort</h2>
          <p>Discover a world of relaxation and luxury at The Sleeks Resort. Our commitment to excellence ensures a memorable stay for every guest.</p>
          <p>Located in a pristine environment with breathtaking views, our resort offers the perfect blend of comfort, luxury, and adventure.</p>
          <div className="about-features">
            <div className="feature">
              <span className="feature-number">100+</span>
              <span className="feature-text">Luxury Rooms</span>
            </div>
            <div className="feature">
              <span className="feature-number">5</span>
              <span className="feature-text">Restaurants</span>
            </div>
            <div className="feature">
              <span className="feature-number">24/7</span>
              <span className="feature-text">Service</span>
            </div>
          </div>
          <a href="#contact" className="about-btn">Learn More</a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
