import React from 'react'
import logo from '../assets/images/nbaInfo-logo.png'

const Navbar = () => {
  return (
    <div className="main-navbar">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo Nba" className="bg-image" />
      </div>
      <div className="link-wrapper">
        <ul>
          <li>Games</li>
          <li>Players</li>
          <li>Teams</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
