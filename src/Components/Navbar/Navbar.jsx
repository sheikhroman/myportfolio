import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">Sheikh Roman</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li id='#portfolio'>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">
        <a href="https://www.linkedin.com/in/sheikh-roman/" target="_blank" rel="noopener noreferrer">Connect With Me</a>
      </div>
    </div>
  )
}

export default Navbar