import React from "react";
import "../About.css";
import InChristJoy from "../components/InChristJoy/InChristJoy";
import WeServeGod from "../components/WeServeGod/WeServeGod";
import WeBelieve from "../components/WeBelieve/WeBelieve";
import OurApproach from "../components/OurApproach/OurApproach";
import ApproachImg from "../components/ApproachImg";
import AboutLeadPastor from "../components/AboutLeadPastor";
import MyCciExperience from "../components/MyCciExperience/MyCciExperience";
import Community from "../components/Community/Community";






function AboutPage() {
  return (
    <main className="pt-7">
      <InChristJoy />
      <WeServeGod />
      <WeBelieve />
      <OurApproach />
      <ApproachImg />
      <AboutLeadPastor />
      <MyCciExperience />
      <Community />
    </main>
  );
}

export default AboutPage;
