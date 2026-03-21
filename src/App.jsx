import React, { useMemo, useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Assessment from './components/Assessment'
import ResultsBox from './components/ResultsBox'
import TeamSection from './components/TeamSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { symptomOptions, startRanges, team, media } from './content'

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function App() {
  const [selected, setSelected] = useState({ general: [], digestive: [], longTerm: [] })
  const [startRange, setStartRange] = useState(startRanges[0])
  const [notes, setNotes] = useState('')
  const [diagnosis, setDiagnosis] = useState('No diagnosis yet. Select symptoms and click Diagnose to see insights.')
  const [activeNav, setActiveNav] = useState('home')

  const totalSelected = useMemo(
    () => selected.general.length + selected.digestive.length + selected.longTerm.length,
    [selected]
  )

  const handleToggle = (category, option) => {
    setSelected((prev) => {
      const exists = prev[category].includes(option)
      const updated = exists ? prev[category].filter((item) => item !== option) : [...prev[category], option]
      return { ...prev, [category]: updated }
    })
  }

  const handleDiagnose = () => {
    if (totalSelected === 0) {
      setDiagnosis('Please select at least one symptom to generate an assessment.')
      return
    }

    const dominantCategory = Object.entries(selected).reduce(
      (top, [key, arr]) => (arr.length > top.count ? { key, count: arr.length } : top),
      { key: 'general', count: 0 }
    )

    const categoryLabels = {
      general: 'general wellness',
      digestive: 'digestive health',
      longTerm: 'long-term or chronic concerns'
    }

    const narrative = `You selected ${totalSelected} symptom${totalSelected > 1 ? 's' : ''} across categories, with a focus on ${
      categoryLabels[dominantCategory.key]
    }. Start timeframe: ${startRange}.`

    const guidance =
      totalSelected >= 5
        ? 'We recommend booking a same-week consultation with a licensed clinician.'
        : totalSelected >= 3
        ? 'Monitor closely and schedule a routine visit within 7 days.'
        : 'Consider home care first steps and monitor changes over the next 48 hours.'

    const noteLine = notes.trim() ? ` Your note has been attached for the clinician: "${notes.trim()}"` : ''

    setDiagnosis(`${narrative} ${guidance}${noteLine}`)
  }

  const handleNavigate = (target) => {
    setActiveNav(target)
    scrollToSection(target)
  }

  return (
    <div className="app">
      <NavBar active={activeNav} onNavigate={handleNavigate} />

      <main>
        <Hero onStart={() => handleNavigate('assessment')} media={media} />
        <Assessment
          symptomOptions={symptomOptions}
          startRanges={startRanges}
          selections={selected}
          startRange={startRange}
          notes={notes}
          onToggle={handleToggle}
          onStartChange={setStartRange}
          onNotesChange={setNotes}
          onDiagnose={handleDiagnose}
        />
        <ResultsBox diagnosis={diagnosis} />
        <TeamSection team={team} media={media} />
        <ContactSection />
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App
