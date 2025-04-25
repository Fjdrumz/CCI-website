import React from "react";
import "../App.css";
import NavBar from "../components/NavBar/NavBar";
import HeroSection from "../components/HeroSection/HeroSection";
import WelcomeHome from "../components/WelcomeHome/WelcomeHome";
import Campuses from "../components/Campuses/Campuses";
import VisitCCI from "../components/VisitCci/VisitCCI";
import Community from "../components/Community/Community";
import OurLeadPastor from "../components/OurLeadPastor/OurLeadPastor";
import AplaceForEveryone from "../components/AplaceForEveryone/AplaceForEveryone";
import GiveToCci from "../components/GiveToCci/GiveToCci";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <main className="mt-[72px]">
      <NavBar />
      <HeroSection />
      <WelcomeHome />
      <Campuses />
      <VisitCCI />
      <Community />
      <OurLeadPastor />
      <AplaceForEveryone />
      <GiveToCci />
      <Footer />
    </main>
  );
}

export default HomePage;
