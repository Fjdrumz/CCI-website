import React from "react";
import "../App.css";
import HeroSection from "../components/HeroSection/HeroSection";
import WelcomeHome from "../components/WelcomeHome/WelcomeHome";
import Campuses from "../components/Campuses/Campuses";
import VisitCCI from "../components/VisitCci/VisitCCI";
import Community from "../components/Community/Community";
import OurLeadPastor from "../components/OurLeadPastor/OurLeadPastor";
import AplaceForEveryone from "../components/AplaceForEveryone/AplaceForEveryone";

function HomePage() {
  return (
    <main className="mt-[72px]">
      <HeroSection />
      <WelcomeHome />
      <Campuses />
      <VisitCCI />
      <Community />
      <OurLeadPastor />
      <AplaceForEveryone />
    </main>
  );
}

export default HomePage;
