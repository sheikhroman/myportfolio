import React from 'react'
import './About.css'
import theme from '../../assets/theme.png'
import profile from '../../assets/profile.png'


const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img className='theme' src={theme} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>👋 I am a seasoned web developer with 4 years of experience. I specialize in crafting sleek, high-performance websites that make a statement. From coding to design, I'm passionate about every aspect of web development. Let's create something awesome together!</p>
            <p></p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS </p> <hr style={{ width: '95%' }} />
            </div>
            <div className="about-skill">
              <p>JavaScript </p> <hr style={{ width: '85%' }} />
            </div>
            <div className="about-skill">
              <p>ReactJS </p> <hr style={{ width: '90%' }} />
            </div>
            <div className="about-skill">
              <p>Python </p> <hr style={{ width: '75%' }} />
            </div>
            <div className="about-skill">
              <p>Wordpress </p> <hr style={{ width: '55%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-acivements">
        <div className="about-achivement">
          <h1>3+</h1>
          <p>Years Of Experience</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>70+</h1>
          <p>Project Completed</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>16+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  )
}

export default About