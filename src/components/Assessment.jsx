import React from 'react'

const Assessment = ({
  symptomOptions,
  startRanges,
  selections,
  startRange,
  notes,
  onToggle,
  onStartChange,
  onNotesChange,
  onDiagnose
}) => {
  const IconGeneral = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6.5 3h5v2.3H14V10h-2.5v2.3h-5V10H4V5.3h2.5V3Z" stroke="#0a4b99" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M5.2 5.3h1.5m4.6 0h1.5M9 6.9v2.6m-1.7 0H10.8" stroke="#0a4b99" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  const IconDigestive = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M9 2.6C6.8 2.6 5 4.4 5 6.6V10c0 1.6-.9 2.5-1.5 2.9 1.3 1.2 3 1.8 5.5 1.8 2.5 0 4.2-.6 5.5-1.8-.6-.4-1.5-1.3-1.5-2.9V8.4" stroke="#0a4b99" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 4.7v1.7M9 7.8v1.7" stroke="#0a4b99" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )

  const IconLongTerm = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M9 3.2A4.8 4.8 0 0 0 4.2 8c0 2.7 2.1 4.8 4.8 4.8 1.4 0 2.6-.5 3.5-1.4" stroke="#0a4b99" strokeWidth="1.4" strokeLinecap="round" />
      <path d="m11.8 4.5 1 1.6c.1.2 0 .4-.1.5l-1.6 1.1" stroke="#0a4b99" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  const iconMap = {
    general: <IconGeneral />,
    digestive: <IconDigestive />,
    longTerm: <IconLongTerm />
  }

  const renderCheckGroup = (title, key) => (
    <div className="check-card" key={key} role="group" aria-labelledby={`${key}-title`}>
      <div className="check-title">
        <span className="check-icon" aria-hidden="true">{iconMap[key]}</span>
        <span id={`${key}-title`}>{title}</span>
      </div>
      <div className="check-grid">
        {symptomOptions[key].map((option) => (
          <label key={option} className="symptom-item">
            <input
              type="checkbox"
              checked={selections[key].includes(option)}
              onChange={() => onToggle(key, option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  )

  return (
    <section className="about" id="about">
      <div className="section-header">
        <h2>Symptom Assessment</h2>
        <p>Select all symptoms that apply to your current condition for an initial clinical evaluation.</p>
      </div>
      <div className="assessment" id="assessment">
        <div className="checks">
          {renderCheckGroup('General', 'general')}
          {renderCheckGroup('Digestive', 'digestive')}
          {renderCheckGroup('Long-term', 'longTerm')}
        </div>
        <div className="controls">
          <div className="control">
            <label>When did it start?</label>
            <select value={startRange} onChange={(e) => onStartChange(e.target.value)}>
              {startRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
          <div className="control">
            <label>Additional Notes</label>
            <textarea
              placeholder="Provide more details about your condition..."
              value={notes}
              onChange={(e) => onNotesChange(e.target.value)}
            />
          </div>
        </div>
        <div className="diagnose-row">
          <button className="primary diagnose" onClick={onDiagnose}>
            <span className="diagnose-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 3H15V7H19V13H15V17H9V13H5V7H9V3Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.5 12H9.5L10.9 9L12.5 15L13.8 12H17.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Diagnose
          </button>
        </div>
      </div>
    </section>
  )
}

export default Assessment
