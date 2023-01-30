import React, { useState } from 'react';
import './ContactUs.css'

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormSubmitted(true);
      // send form data to server here
    }
    return (
        <div className="contact-page">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <input type="submit" value="Submit" />
      </form>
      {formSubmitted && <p>Thanks for your message! We will get back to you soon.</p>}
    </div>
    );
};

export default ContactUs;