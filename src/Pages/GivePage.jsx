import React from "react";
import Generosity from "../components/Generosity/Generosity";
import WaysToGive from "../components/WaysToGive/WaysToGive";
import AccountNumbers from "../components/AccountNumbers/AccountNumbers";
import GiveToSpecificCampuses from "../components/GiveToSpecificCampuses/GiveToSpecificCampuses";
import Accordion from "../components/Accordion/Accordion";

function GivePage() {
  return (
    <main className="pt-7">
      <Generosity />
      <WaysToGive />
      <AccountNumbers />
      <GiveToSpecificCampuses />
      <Accordion />
    </main>
  );
}

export default GivePage;
