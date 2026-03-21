import React from 'react'

const Hero = ({ onStart, media }) => (
  <section className="hero">
    <div className="hero-text">
      <h1>
        Clinical Precision.
        <span>Human Centered Care.</span>
      </h1>
      <p className="subhead">
        MediCheck leverages advanced diagnostics and professional medical oversight to provide immediate clinical insights for your health journey.
      </p>
      <button className="primary" onClick={onStart}>
        Start Symptom Check <span className="arrow">?</span>
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
