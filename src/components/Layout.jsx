// src/components/Layout.jsx

import Navbar from "./NavBar/NavBar";
import GiveToCci from "./GiveToCci/GiveToCci";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom"; // This is the placeholder for the dynamic content

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This will render the content of the current route */}
      <GiveToCci />
      <Footer />
    </div>
  );
}

export default Layout;
