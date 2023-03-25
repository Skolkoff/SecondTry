import React from "react";
import '../App.css';

const Contact = () => {
    return(
        <section className="contact">
      <div className="contact__inner">
        <div className="contact__form">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact__details">
          <h3>Contact Details</h3>
          <p><strong>Address:</strong> 123 Main St, Anytown, USA 12345</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> info@example.com</p>
        </div>
        </div>
      </section>
    );
};
export default Contact;