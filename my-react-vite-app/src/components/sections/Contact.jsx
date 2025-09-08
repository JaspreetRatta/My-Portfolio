import React from "react";
import "../../styles/sections/contact.css";

const Contact = () => (
  <section id="contact" className="contact-section fade-up">
    <div className="form-wrapper">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </section>
);

export default Contact;
