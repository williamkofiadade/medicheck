import React from 'react'

const ContactSection = () => (
  <section className="contact contact-hero" id="contact">
    <div className="contact-inner">
      <div className="contact-copy">
        <h2>Contact Us</h2>
        <p>Our clinical support team is available for inquiries regarding our diagnostic tools and institutional partnerships.</p>
        <div className="contact-list">
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <div>
              <div className="contact-label">Email Support</div>
              <div className="contact-value">clinical@medicheck.io</div>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <div className="contact-label">Headquarters</div>
              <div className="contact-value">Clinical Excellence Center, Medical District</div>
            </div>
          </div>
        </div>
      </div>

      <form className="contact-form hero-card" onSubmit={(e) => e.preventDefault()}>
        <div className="form-row two">
          <div className="form-field">
            <label>Full Name</label>
            <input type="text" placeholder="" />
          </div>
          <div className="form-field">
            <label>Email Address</label>
            <input type="email" placeholder="" />
          </div>
        </div>
        <div className="form-row two">
          <div className="form-field">
            <label>Subject</label>
            <input type="text" placeholder="" />
          </div>
          <div className="form-field">
            <label>Your Message</label>
            <textarea rows={3} placeholder="" />
          </div>
        </div>
        <button className="primary full" type="submit">Send Inquiry</button>
      </form>
    </div>
  </section>
)

export default ContactSection
