import React from "react";

function Generosity() {
  return (
    <section className="generositySection">
      <div className="generosityDiv">
        <button className="giveCash">💸 give</button>
        <h2>
          <span>YOUR</span> GENEROSITY. OUR <span>MISSION.</span>
        </h2>
        <p>
          Give towards our mission to reach a billion souls in ten thousand
          cities with the message of the gospel.
        </p>
      </div>
      <div>
        <button className="giveNowBtn">GIVE NOW</button>
        <button className="othersGive">OTHER WAYS TO GIVE</button>
      </div>
    </section>
  );
}

export default Generosity;
