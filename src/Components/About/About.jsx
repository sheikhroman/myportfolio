import React from 'react'
import './About.css'
import theme from '../../assets/theme.png'
const About = () => {
  return (
      <div className='about'>
          <div className="about-title">
              <h1>About Me <img className='theme' src={theme} alt="" /></h1>
              
          </div>
    </div>
  )
}

export default About