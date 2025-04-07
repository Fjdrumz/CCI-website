import React from 'react'

function OurLeadPastor() {
  return (
    <section className="ourLeadPastor">
      <div className="pastorContainer">
        <img
          className="pastorImg"
          src="https://joincci.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpastey.c7520b0d.webp&w=3840&q=75"
          alt=""
        />
        <div className="aboutPastor">
          <img
            src="https://joincci.org/_next/static/media/Global_mini_white.797c0092.svg"
            alt="" 
            className="globalLogo"
          />
          <h2 className="leadPastorTitle">OUR LEAD PASTOR</h2>
          <p>
            Apostle Emmanuel Iren is the visionary founder and lead pastor of
            Celebration Church International, a dynamic teaching ministry
            dedicated to spreading the gospel and helping people discover their
            purpose in Christ. With a passion for the Word of God and a heart
            for missions, Apostle Iren has led the church to establish Over 30
            campuses across Nigeria, North America, and the UK, all while
            inspiring countless lives to grow in their faith and embrace the
            life-changing power of Christ.
          </p>
          <button className='readPastor'>READ MORE</button>
        </div>
      </div>
    </section>
  );
}

export default OurLeadPastor