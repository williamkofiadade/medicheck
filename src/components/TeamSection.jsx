import React from 'react'

const TeamSection = ({ team, media }) => (
  <section className="team" id="team">
    <div className="section-header">
      <h2>Meet the Team</h2>
      <p>The minds behind MediCheck clinical platform.</p>
    </div>
    <div className="team-grid">
      {team.map((member) => (
        <div key={member.name} className="team-card">
          <img src={member.image || media.teamPhoto} alt={member.name} />
          <div className="team-info">
            <div className="team-name">{member.name}</div>
            <div className="team-role">{member.role}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default TeamSection
