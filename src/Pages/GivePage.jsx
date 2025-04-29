import React from "react";
import Navbar from "../components/NavBar/NavBar";
import Generosity from "../components/Generosity/Generosity";
import WaysToGive from "../components/WaysToGive/WaysToGive";
import AccountNumbers from "../components/AccountNumbers/AccountNumbers";
import GiveToSpecificCampuses from "../components/GiveToSpecificCampuses/GiveToSpecificCampuses";
import Accordion from "../components/Accordion/Accordion";
import GiveToCci from "../components/GiveToCci/GiveToCci";
import Footer from "../components/Footer/Footer";

function GivePage() {
  return (
    <main className="pt-7">
      <Navbar />
      <Generosity />
      <WaysToGive />
      <AccountNumbers />
      <GiveToSpecificCampuses />
      <Accordion />
      <GiveToCci />
      <Footer />
    </main>
  );
}

export default GivePage;
