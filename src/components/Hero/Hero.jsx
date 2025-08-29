import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";


const Hero = () => {
  return (
    <div className='hero'id='home'>
      <img src={profile_img} alt="Profile Image" />
      <h1><span>I'm Nathan Furtado, </span>Data Analyst & Data Engineer based in India </h1>
      <p>Add Description........ </p>
      <div className='hero-action'>
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero