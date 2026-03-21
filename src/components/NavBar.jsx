import React from 'react'

const NavBar = ({ active, onNavigate }) => {
  const makeHandler = (id) => () => onNavigate(id)

  return (
    <header className="nav" id="home">
      <div className="logo">MediCheck</div>
      <nav>
        <button className={active === 'home' ? 'active' : ''} onClick={makeHandler('home')}>
          Home
        </button>
        <button className={active === 'team' ? 'active' : ''} onClick={makeHandler('team')}>
          About Us
        </button>
        <button className={active === 'contact' ? 'active' : ''} onClick={makeHandler('contact')}>
          Contact Us
        </button>
      </nav>
    </header>
  )
}

export default NavBar
