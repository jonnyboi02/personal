import React, { useState } from 'react';
// import './ContactMe.css';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'your-email-address' with your actual email address
    const emailLink = `mailto:jonathanchiu02@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
    window.location.href = emailLink;
    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="section contact-section">
      <h2>Captivated by What You've Seen? Let's Collaborate!</h2>
      <p>If my portfolio has sparked your interest and you're enthused by the caliber of work I've showcased, I would be delighted to discuss how we can bring similar innovation and excellence to your projects. Don't hesitate to reach out and initiate a conversation. Let's explore the possibilities together and turn your vision into reality. I'm excited about the prospect of working with dynamic partners and clients like you, who value impactful and creative solutions. Contact me today, and let's embark on a journey of successful collaboration!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
};

export default ContactMe;
