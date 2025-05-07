import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use BrowserRouter
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import CampusesPage from "./Pages/CampusesPage";
import MinistriesPage from "./Pages/MinistriesPage";
import SermonsPage from "./Pages/SermonsPage";
import GivePage from "./Pages/GivePage";
import Navbar from "./components/NavBar/NavBar"; 
import GiveToCci from "./components/GiveToCci/GiveToCci";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      {" "}
      {/* Router wraps the whole app */}
      <main>
        <Navbar /> {/* Navbar will have access to router context */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/campuses" element={<CampusesPage />} />
          <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/sermons" element={<SermonsPage />} />
          <Route path="/give" element={<GivePage />} />
        </Routes>
        <GiveToCci />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
