import React from 'react';
import './style/LogoSection.css';
import Img1 from '../assets/1.png'
import Img2 from '../assets/2.png'
import Img3 from '../assets/3.png'
import Img4 from '../assets/4.png'
import Img5 from '../assets/5.png'


const LogoSection = () => {
  return (
    <div className="logo-section" style={{height:"5px"}}>

      <span> <img src={Img1} alt="Slack"/></span>
      <span> <img src={Img2} alt="Prudential"/></span>
      <span> <img src={Img3} alt="Aol"/></span>
      <span> <img src={Img4} alt="Zoover"/></span>
      <span> <img src={Img5} alt="DocuSign"/></span>

    </div>
  );
};

export default LogoSection;
