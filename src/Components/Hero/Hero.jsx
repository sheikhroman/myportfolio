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
        I am <span className={isEnglish ? "english" : "bengali"} style={{textShadow: '0 0 10px #369a3e, 0 0 10px #369a3e', transition: 'text-shadow 0.5s ease'}}>{isEnglish ? "Sheikh Roman" : "শেখ রোমান"}</span>, web developer based in Bangladesh
      </h1>
    </div>
  );
};

export default Hero;
