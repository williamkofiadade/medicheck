import React from 'react'

const Footer = ({ onNavigate }) => (
  <footer className="footer">
    <div className="logo">MediCheck</div>
    <div className="footer-links">
      <button onClick={() => onNavigate('home')}>Home</button>
      <button onClick={() => onNavigate('about')}>About Us</button>
      <button onClick={() => onNavigate('contact')}>Contact Us</button>
    </div>
    <div className="copyright">© {new Date().getFullYear()} MediCheck</div>
  </footer>
)

export default Footer
