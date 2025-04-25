import React from "react";
import "./AplaceForEveryone.css";

function AplaceForEveryone() {
  return (
    <section className="forEverybody">
      <div className="everybodyContainer">
        <div className="everybody everybodyText">
          <p>MINISTRIES</p>
          <h2 className="everybodyTitle">
            THERE'S A PLACE FOR <span>EVERYONE</span>
          </h2>
          <button className="ministryBtn">SEE ALL MINISTRIES</button>
        </div>

        <div className="everybody everybodyImg">
          <img
            src="https://joincci.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcelebkids.601f776b.webp&w=3840&q=75"
            alt=""
          />
          <h3>Celeb Kids & Teens</h3>
          <p>Youth Ministry</p>
        </div>

        <div className="everybody everybodyImg">
          <img
            src="https://joincci.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsalaam.61eb451d.webp&w=640&q=75"
            alt=""
          />
          <h3>Finding Salam</h3>
          <p>Outreach Islam</p>
        </div>

        <div className="everybody everybodyImg">
          <img
            src="https://joincci.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fccw.3a529aa2.webp&w=3840&q=75"
            alt=""
          />
          <h3>Finding Salam</h3>
          <p>Outreach Islam</p>
        </div>

        
      </div>
    </section>
  );
}

export default AplaceForEveryone;
