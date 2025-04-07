import React from "react";

function HeroSection() {
  return (
    <section className="video-background">
      <video autoPlay loop muted playsInline className="video-hero">
        <source src="https://joincci.org/Church.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="heroContent">
        <div className="video-overlay"></div>
        <div className="video-content">
          <span className="ourVision">🌍 our vision</span>
          <h1 className="my-3 text-center font-anton text-white tracking-[-0.1em] leading-[1.2] text-[2rem] sm:text-4xl md:text-6xl">
            We envision all men
            <br />
            celebrating endless
            <br />
            <span className="text-textRed">life in Christ</span>
          </h1>
          <button className="watchLive">WATCH LIVE</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
