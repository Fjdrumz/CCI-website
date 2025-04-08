import React from "react";

function GiveToCci() {
  return (
    <section className="giveSection">
      <div className="giveNow">
        <h1 className="giveTitle">Give to celebration church</h1>
        <p>Your generosity Keeps blessing lives, thank you for giving,</p>
        <div className="btns">
          <button className="giveBtn">GIVE NOW</button>
          <button className="projectBtn">BUILDING PROJECT</button>
        </div>
      </div>

      <h1 className="mailing-list">JOIN OUR MAILING LIST</h1>
      <p className="notification">
        We promise not to spam you, but send you edifying and amazing <br />{" "}
        content regularly from Celebration Church International.
      </p>

      <div className="mailing-list-form">
        <input type="email" 
        placeholder="Email address"
        />
        <button type="submit" className="submit">SUBMIT</button>
      </div>
      <hr className="hr"/>
    </section>
  );
}

export default GiveToCci;
