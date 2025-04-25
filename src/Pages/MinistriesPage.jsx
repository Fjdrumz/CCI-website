import React from "react";
import Navbar from "../components/NavBar/NavBar";
import GetInvolved from "../components/GetInvolved/GetInvolved";
import SubContent from "../components/SubContent/SubContent";
import GiveToCci from "../components/GiveToCci/GiveToCci";
import Footer from "../components/Footer/Footer";

function MinistriesPage() {
  return (
    <main className="pt-7">
      <Navbar />
      <GetInvolved />
      <SubContent />
      <GiveToCci />
      <Footer />
    </main>
  );
}

export default MinistriesPage;
