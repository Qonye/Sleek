import React from 'react';
import './Testimonials.scss';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jessica A.',
      text: 'A truly unforgettable experience! The staff were amazing and the resort was breathtaking.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'David P.',
      text: 'Perfect getaway for our family. The kids loved it and so did we! Will definitely be coming back.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Sophie L.',
      text: 'Luxury and comfort at its best. The spa treatments were incredible and the food was divine!',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2>Guest Experiences</h2>
        <p className="section-subtitle">What our guests say about their stay</p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
