import React from "react";
import "./WelcomeHome.css";

function WelcomeHome() {
  return (
    <section className="welcomeHome">
      <button className="buildingProjectBtn">BUILDING PROJECT</button>
      <div className="homeContent">
        <p className="welcomeHomeText">🙌🏽 Welcome to CCI</p>
        <h1 className="welcomeHomeTitle">WELCOME HOME!</h1>
        <p>
          Dive into our teachings, events and community. <br /> Your journey of
          faith begins here.
        </p>

        <div className="arrowDiv">
          <img src="/images/left-arrow.svg" alt="" />
          <img src="/images/left-arrow.svg" alt="" className="arrow" />
        </div>
      </div>
      <div className="aboutUs">
        
        <div className="imageDisplay whoWeAre">
          <p>WHO WE ARE</p>
          <h1>About Us</h1>
          <p className="learnMore">
            Learn more{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </p>
        </div>

        <div className="imageDisplay">
          <p>JOIN OUR COMMUNITY</p>
          <h1>Connect With Us</h1>
          <p className="learnMore">
            Sign up{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </p>
        </div>

        <div className="imageDisplay celebrations">
          <p>ENDLESS CELEBRATIONS</p>
          <h1>Celebrations</h1>
          <p className="learnMore">
            Learn more{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </p>
        </div>

      </div>
    </section>
  );
}

export default WelcomeHome;
