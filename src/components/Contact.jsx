import React from 'react';
import './Contact.scss';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => (
  <section className="contact" id="contact">
    <div className="container">
      <h2>Get in Touch</h2>
      <p className="section-subtitle">We'd love to hear from you</p>
      <div className="contact-content">
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="info-item">
            <span className="info-icon"><FaEnvelope /></span>
            <div>
              <span className="info-label">Email:</span>
              <span className="info-text">info@sleeksresort.com</span>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon"><FaPhone /></span>
            <div>
              <span className="info-label">Phone:</span>
              <span className="info-text">+123 456 7890</span>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon"><FaMapMarkerAlt /></span>
            <div>
              <span className="info-label">Address:</span>
              <span className="info-text">123 Beachside Ave, Paradise City</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
