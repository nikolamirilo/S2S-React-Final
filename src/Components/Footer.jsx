import React from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-left">
          <h3>NBA Info</h3>
          <p className="footer-company-name">nba-info © 2021</p>
        </div>
        <div className="footer-center">
          <div className="location">
            <FaMapMarkerAlt size={24} style={{margin: "5px 10px 0 0"}} />
            <p>Jove Ilica 15 Belgrade, Serbia</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
