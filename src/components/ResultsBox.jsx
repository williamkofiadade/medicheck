import React from 'react'

const ResultsBox = ({ diagnosis }) => (
  <section className="results" id="results">
    <div className="section-header">
      <h2>Results</h2>
      <p>Personalized guidance is generated from your selections.</p>
    </div>
    <div className="result-box">
      <div className="result-icon" aria-hidden="true">📊</div>
      <div className="result-label">Your Diagnosis Results</div>
      <div className="result-skel wide"></div>
      <div className="result-skel mid"></div>
      <div className="result-skel short"></div>
      <p style={{ opacity: 0.85, marginTop: 16 }}>
        {diagnosis}
      </p>
    </div>
  </section>
)

export default ResultsBox
