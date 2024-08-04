import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
const Hero = () => {
  return (
    <div className="container-fluids">
      <div className="row ">
        <div className="hero-sec d-flex align-items-center justify-content-center">
          <video autoPlay loop muted playsInline className="back-video">
            <source src="images/video.mp4" type="video/mp4" />
          </video>
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Hero;
