import React from "react";
import "./Hero.css";
import hero from "../assets/hero-logo.svg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>
      <div className="hero-img">
        <img src={hero}></img>
      </div>
    </div>
  );
};

export default Hero;
