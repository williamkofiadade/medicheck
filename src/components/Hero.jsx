import React from 'react'

const Hero = ({ onStart, media }) => (
  <section className="hero">
    <div className="hero-text">
      <h1>
        Clinical Precision.
        <span>Human Centered Care.</span>
      </h1>
      <button className="primary" onClick={onStart}>
        Start Symptom Check
        <span className="arrow" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 4.25V9.25" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M5.5 8.75L8 11.75L10.5 8.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
    </div>
    <div className="hero-media">
      <img src={media.heroPhoto} alt="Clinician using tablet" className="hero-img" />
      <div className="badge">
        <img src={media.badgeIcon} alt="Shield" />
        <div>
          <div className="badge-title">Trusted Data</div>
          <div className="badge-sub">Medical Accuracy</div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
