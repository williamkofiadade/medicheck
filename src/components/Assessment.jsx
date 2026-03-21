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
  const renderCheckGroup = (title, key, icon) => (
    <div className="check-card" key={key}>
      <div className="check-title">
        <span className="check-icon" aria-hidden="true">
          {icon}
        </span>
        {title}
      </div>
      <div className="check-grid">
        {symptomOptions[key].map((option) => (
          <label key={option} className="check-item">
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
        <p>Answer a few quick questions to guide your personal health insights.</p>
      </div>
      <div className="assessment" id="assessment">
        <div className="checks">
          {renderCheckGroup('General', 'general', '🩺')}
          {renderCheckGroup('Digestive', 'digestive', '⚕️')}
          {renderCheckGroup('Long-term', 'longTerm', '↻')}
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
            ⊕ Diagnose
          </button>
        </div>
      </div>
    </section>
  )
}

export default Assessment
