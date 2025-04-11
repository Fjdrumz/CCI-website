import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import CampusesPage from "./Pages/CampusesPage";
import MinistriesPage from "./Pages/MinistriesPage";
import SermonsPage from "./Pages/SermonsPage";
import GivePage from "./Pages/GivePage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/campuses" element={<CampusesPage />} />
        <Route path="/ministries" element={<MinistriesPage />} />
        <Route path="/sermons" element={<SermonsPage />} />
        <Route path="/give" element={<GivePage />} />
      </Routes>
    </Router>
  );
}

export default App;
