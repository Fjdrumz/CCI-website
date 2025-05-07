import React from "react";
import SermonsSection from "../components/SermonsSection/SermonsSection";
import LatestSermons from "../components/LatestSermons/LatestSermons";


function SermonsPage() {
  return (
    <main className="pt-7">
      <SermonsSection />
      <LatestSermons />
    </main>
  );
}

export default SermonsPage;
