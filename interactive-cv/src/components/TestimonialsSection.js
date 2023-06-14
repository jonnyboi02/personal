import React, { useState } from 'react';

const TestimonialsSection = () => {
  const testimonialsData = [
    {
      id: 1,
      quote: 'Testimonial 1',
      author: 'Author 1',
    },
    {
      id: 2,
      quote: 'Testimonial 2',
      author: 'Author 2',
    },
    {
      id: 3,
      quote: 'Testimonial 3',
      author: 'Author 3',
    },
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleNextTestimonial = () => {
    setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePreviousTestimonial = () => {
    setTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="section testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonial">
        <p className="quote">{testimonialsData[testimonialIndex].quote}</p>
        <p className="author">- {testimonialsData[testimonialIndex].author}</p>
      </div>
      <div className="testimonial-buttons">
        <button onClick={handlePreviousTestimonial}>&lt; Previous</button>
        <button onClick={handleNextTestimonial}>Next &gt;</button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
