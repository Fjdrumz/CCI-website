import React from "react";
import Navbar from "../components/NavBar/NavBar";
import SermonsSection from "../components/SermonsSection/SermonsSection";
import LatestSermons from "../components/LatestSermons/LatestSermons";
import GiveToCci from "../components/GiveToCci/GiveToCci";
import Footer from "../components/Footer/Footer";



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
