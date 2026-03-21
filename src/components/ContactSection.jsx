import React from 'react'

const ContactSection = () => (
  <section className="contact" id="contact">
    <div className="section-header">
      <h2>Contact Us</h2>
      <p>We are here to help. Reach out any time.</p>
    </div>
    <div className="contact-grid">
      <div className="contact-info">
        <h3>Email</h3>
        <p>support@medicheck.com</p>
        <h3>Address</h3>
        <p>123 Health Avenue, Suite 400<br />San Francisco, CA 94107</p>
      </div>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>
        <div className="form-row">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email" required />
        </div>
        <div className="form-row">
          <label>Subject</label>
          <input type="text" placeholder="Subject" />
        </div>
        <div className="form-row">
          <label>Message</label>
          <textarea rows={4} placeholder="Your message" />
        </div>
        <button className="primary full" type="submit">Send Inquiry</button>
      </form>
    </div>
  </section>
)

export default ContactSection
