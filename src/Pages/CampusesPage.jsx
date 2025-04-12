import React from "react";
import Navbar from "../components/NavBar";
import CampusesGlobally from "../components/CampusesGlobally";
import VisitCciCountries from "../components/VisitCciCountries";
import GiveToCci from "../components/GiveToCci";
import Footer from "../components/Footer";


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
