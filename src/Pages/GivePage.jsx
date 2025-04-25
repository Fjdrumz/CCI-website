import React from "react";
import Navbar from "../components/NavBar/NavBar";
import Generosity from "../components/Generosity/Generosity";

function GivePage() {
  return (
    <main className="p-5 pt-7">
      <Navbar />
      <Generosity />
    </main>
  );
}

export default GivePage;
