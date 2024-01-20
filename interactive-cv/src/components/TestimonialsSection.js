import React, { useState } from 'react';

const TestimonialsSection = () => {
  const testimonialsData = [
    {
      id: 1,
      quote:
        '"Jonathan worked in a field that was completely new to him and became knowledgeable in it in a very short period. He showed remarkable determination and was able to adapt to a difficult project which combined elements from theory of program verification with practical smart-contract programming."',
      author: 'Dr Nikos Tzevelekos (Senior Lecturer), Supervisor for Blockchain Research Internship & Final Year Project',
      image: 'https://media.licdn.com/dms/image/C5603AQGIS53VZNyPOw/profile-displayphoto-shrink_800_800/0/1561972479119?e=2147483647&v=beta&t=6AdVv64lPBB8Q3_9v02T5UaqpXO8kMYsvq_iOgQkHBw', // Add the path to the image for the first testimonial
    },
    {
      id: 2,
      quote: '"Jonathan was a colleague of mine as a teaching assistant, and he demonstrated not only a strong grasp of core computer science concepts we were tasked with explaining to students, but also a very elegant way of passing those same concepts down to the students in very clear and simple terms so that students that learned from him had a very high success rate"',
      author: 'Pedro de Camara, Teaching Assistant QMUL',
      image: 'https://media.licdn.com/dms/image/C4D03AQH2xZ6VhQPNBQ/profile-displayphoto-shrink_400_400/0/1599930091295?e=2147483647&v=beta&t=mwyNp98s_axwJsGUz6T0QABvCGnpmvUqjrN0UvwFD44', // Add the path to the image for the second testimonial
    },
    // {
    //   id: 3,
    //   quote: 'Testimonial 3',
    //   author: 'Author 3',
    //   image: 'path/to/image3.jpg', // Add the path to the image for the third testimonial
    // },
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
        <img src={testimonialsData[testimonialIndex].image} alt="Testimonial" className="testimonial-image" />
        <p className="quote">{testimonialsData[testimonialIndex].quote}</p>
        <p className="author">- {testimonialsData[testimonialIndex].author}</p>
      </div>
      <br></br>
      <div className="testimonial-buttons">
        <button onClick={handlePreviousTestimonial}>&lt; Previous</button>
        <button onClick={handleNextTestimonial}>Next &gt;</button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
