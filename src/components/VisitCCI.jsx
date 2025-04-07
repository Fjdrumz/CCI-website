import React from 'react'
import MovingImages from './TestSlide';

function VisitCCI() {
  return (
    <section className="VisitCCiSection">
      <div className="visitCciImages">
        <MovingImages />
      </div>
      <section className="weBoastInChrist">
        <h2 className="weBoastInChristTitle">WE BOAST IN <br /> CHRIST JESUS</h2>
        <p className="weBoastInChristText">
          Our greatest success story at Celebration Church has been the 'grace'
          to <br /> effectively evangelize, make disciples of, and deploy people who
          once upon a <br /> time were mere seekers, as mature disciples and vibrant
          ministers of the gospel.
        </p>
        <button className="visitCciBtn">LEARN MORE</button>
      </section>
    </section>
  );
}

export default VisitCCI  