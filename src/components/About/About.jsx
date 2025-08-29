import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profile.svg'


const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={about_profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>details of user Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p>more detailsEst, ex qui modi sequi, inventore aperiam officiis maiores minima</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Python</p><hr style={{width:"40%"}} /></div>
                <div className="about-skill"><p>Tableau</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Power BI</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Sci-kit learn</p><hr style={{width:"40%"}} /></div>
                <div className="about-skill"><p>SQL</p><hr style={{width:"60%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>Fresher</h1>
            <p>No relative work experience in the industry</p>
        </div>
        <div className="about-achievement">
            <h1>5+</h1>
            <p>Projects in Data Anakysis, Visualization and Machine Learning</p>
        </div>
      </div>
    </div>
  )
}

export default About
