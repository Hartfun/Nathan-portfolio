import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'


function Footer() {
  return (
    <div className='footer'>
      <div className="footer-top">
          <div className="footer-top-left">
              <img src={footer_logo} alt="" />
              <p>I am a Data Analyst from India, with a fresh beginning into Data Analysis & Data Science.</p>
            </div>
          <div className="footer-top-right">
              <div className="footer-email-input">
              </div>
          </div>
      </div>
      <hr />
      <div className="footer-bottom">
          <p className='footer-bottom-left'>© 2025 Nathan Furtado. All rights reserved </p>
          <div className="footer-bottom-right">
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Connect with me</p>
          </div>
      </div>
    </div>
  )
}

export default Footer
