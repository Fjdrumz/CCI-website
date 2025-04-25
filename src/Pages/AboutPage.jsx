import React from "react";
import Navbar from "../components/NavBar/NavBar";
import "../About.css";
import InChristJoy from "../components/InChristJoy/InChristJoy";
import WeServeGod from "../components/WeServeGod/WeServeGod";
import WeBelieve from "../components/WeBelieve/WeBelieve";
import OurApproach from "../components/OurApproach/OurApproach";
import ApproachImg from "../components/ApproachImg";
import AboutLeadPastor from "../components/AboutLeadPastor";
import MyCciExperience from "../components/MyCciExperience/MyCciExperience";
import Community from "../components/Community/Community";
import GiveToCci from "../components/GiveToCci/GiveToCci";
import Footer from "../components/Footer/Footer";






function AboutPage() {
  return (
    <main className="pt-7">
      <Navbar />
      <InChristJoy />
      <WeServeGod />
      <WeBelieve />
      <OurApproach />
      <ApproachImg />
      <AboutLeadPastor />
      <MyCciExperience />
      <Community />
      <GiveToCci />
      <Footer />
    </main>
  );
}

export default AboutPage;
