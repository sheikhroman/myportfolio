import React, { useState, useEffect } from 'react';
import './Hero.css';
import profile from '../../assets/profile.png';

const Hero = () => {
  const [name, setName] = useState("Sheikh Roman");
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEnglish(prev => !prev);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hero'>
      <img src={profile} alt="" />
      <h1>
        I am <span className={isEnglish ? "english" : "bengali"} style={{textShadow: '0 0 10px #369a3e, 0 0 10px #369a3e', transition: 'text-shadow 0.5s ease', color: 'rgb(6, 245, 149)'}}>{isEnglish ? "Sheikh Roman" : "শেখ রোমান"}</span>
      </h1>
      <p>Web developer skilled in crafting user-friendly websites with HTML, CSS, and JavaScript for optimal functionality and design.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
