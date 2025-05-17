import React from 'react';
import './Services.scss';
import { FaBed, FaUtensils, FaSpa, FaGlassCheers, FaChild, FaSwimmingPool, FaDumbbell, FaUmbrellaBeach, FaConciergeBell } from 'react-icons/fa';

const services = [
  { title: 'Luxury Accommodation', desc: 'Spacious rooms with stunning views.', icon: <FaBed /> },
  { title: 'Gourmet Dining', desc: 'World-class cuisine for every palate.', icon: <FaUtensils /> },
  { title: 'Spa & Wellness', desc: 'Relax and rejuvenate with our spa treatments.', icon: <FaSpa /> },
  { title: 'Event Hosting', desc: 'Perfect venue for weddings and events.', icon: <FaGlassCheers /> },
  { title: 'Kids Activities', desc: 'Fun and safe activities for children.', icon: <FaChild /> },
  { title: 'Pool & Lounge', desc: 'Infinity pool and comfortable lounges.', icon: <FaSwimmingPool /> },
  { title: 'Fitness Center', desc: 'State-of-the-art equipment and trainers.', icon: <FaDumbbell /> },
  { title: 'Concierge', desc: 'Personalized service for your needs.', icon: <FaConciergeBell /> },
  { title: 'Beach Access', desc: 'Private beach access for our guests.', icon: <FaUmbrellaBeach /> },
];

const Services = () => (
  <section className="services" id="services">
    <div className="container">
      <h2>Our Services</h2>
      <p className="section-subtitle">Experience the best of luxury hospitality</p>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
      <button className="services-btn">View All Services</button>
    </div>
  </section>
);

export default Services;
