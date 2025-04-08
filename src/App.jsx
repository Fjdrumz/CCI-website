import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import WelcomeHome from "./components/WelcomeHome";
import Campuses from "./components/Campuses";
import VisitCCI from "./components/VisitCCI";
import Community from "./components/Community";
import OurLeadPastor from "./components/OurLeadPastor";
import AplaceForEveryone from "./components/AplaceForEveryone";
import GiveToCci from "./components/GiveToCci";
import Footer from "./components/Footer";




function App() {
  return (
    <div className="App">
      <main className="mt-[72px]">
        <NavBar />
        <HeroSection />
        <WelcomeHome /> 
        <Campuses />
        <VisitCCI />
        <Community />
        <OurLeadPastor />
        <AplaceForEveryone />
        <GiveToCci/>
        <Footer />
      </main>
    </div>
  );
}

export default App;
