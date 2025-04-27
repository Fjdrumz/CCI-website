import React from "react";
import Navbar from "../components/NavBar/NavBar";
import Generosity from "../components/Generosity/Generosity";
import WaysToGive from "../components/WaysToGive/WaysToGive";
import AccountNumbers from "../components/AccountNumbers/AccountNumbers";
import GiveToSpecificCampuses from "../components/GiveToSpecificCampuses/GiveToSpecificCampuses";

function GivePage() {
  return (
    <main className="pt-7">
      <Navbar />
      <Generosity />
      <WaysToGive />
      <AccountNumbers />
      <GiveToSpecificCampuses />
    </main>
  );
}

export default GivePage;
