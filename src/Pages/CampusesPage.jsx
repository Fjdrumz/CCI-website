import React from "react";
import Navbar from "../components/NavBar/NavBar";
import CampusesGlobally from "../components/CampusesGlobally/CampusesGlobally";
import VisitCciCountries from "../components/VisitCciCountries/VisitCciCountries";
import GiveToCci from "../components/GiveToCci/GiveToCci";
import Footer from "../components/Footer/Footer";


function CampusesPage() {
  return (
    <main className="pt-7">
      <Navbar />
      <CampusesGlobally />
      <VisitCciCountries />
      <GiveToCci />
      <Footer />
    </main>
  );
}

export default CampusesPage;
