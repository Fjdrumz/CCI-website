import React from "react";
import Navbar from "../components/NavBar/NavBar";
import CampusesGlobally from "../components/CampusesGlobally/CampusesGlobally";
import VisitCciCountries from "../components/VisitCciCountries/VisitCciCountries";


function CampusesPage() {
  return (
    <main className="pt-7">
      <CampusesGlobally />
      <VisitCciCountries />
    </main>
  );
}

export default CampusesPage;
