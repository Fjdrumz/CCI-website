import React from "react";
import Navbar from "../components/NavBar";
import SermonsSection from "../components/SermonsSection";
import LatestSermons from "../components/LatestSermons";
import GiveToCci from "../components/GiveToCci";
import Footer from "../components/Footer";



function SermonsPage() {
  return (
    <main className="pt-7">
      <Navbar />
      <SermonsSection />
      <LatestSermons />
      <GiveToCci />
      <Footer />
    </main>
  );
}

export default SermonsPage;
