import React from 'react';
import './style/Hero.css';

import icon from '../assets/icon.png';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Business with <br /> <span>Digital Marketing</span>
        </h1>
        <div className="hero-buttons">
          <button className="register-btn">Registration</button>
          <a href="#how" className="how-it-works-link">
            See How It Work →
          </a>
        </div>
      </div>
      {/* <div>
         <p style={{border:"2px solid black", backgroundColor:"purple", paddingTop:"50px", paddingBottom:"50px", borderRadius:"10%", paddingLeft:"10px", paddingRight:"10px"}}>creative digital agency image</p>
       </div> */}

      {/* testing */}
      <div className="graphic-container">
          <div className="image-container">
            <img src={icon} alt="icon" />
          </div>
      </div>

      {/* testing ends */}
    </section>
  );
}

export default Hero;
