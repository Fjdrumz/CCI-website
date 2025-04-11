import React from "react";
import Navbar from "../components/NavBar";
import "../About.css";
import InChristJoy from "../components/InChristJoy";
import WeServeGod from "../components/WeServeGod";
import WeBelieve from "../components/WeBelieve";
import OurApproach from "../components/OurApproach";
import ApproachImg from "../components/ApproachImg";
import AboutLeadPastor from "../components/AboutLeadPastor";
import MyCciExperience from "../components/MyCciExperience";
import Community from "../components/Community";
import GiveToCci from "../components/GiveToCci";
import Footer from "../components/Footer";


function AboutPage() {
  return (
    <main className="pt-7">
      <Navbar />
      <InChristJoy/>
      <WeServeGod/>
      <WeBelieve/>
      <OurApproach/>
      <ApproachImg/>
      <AboutLeadPastor/>
      <MyCciExperience/>
      <Community/>
      <GiveToCci/>
      <Footer/>
    </main>
  );
}

export default AboutPage;


