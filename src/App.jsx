import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';
import ProjectDetails from './components/ProjectDetails';
import ProjectDetails2 from './components/ProjectDetails2';
import ProjectDetails3 from './components/ProjectDetails3';
import ProjectDetails4 from './components/ProjectDetails4';
import DP1Page from "./components/DP1Page";
import References from "./components/References";
import InteractiveBackground from "./components/InteractiveBackground";


const MainPage = () => {
  // Controls which main "subpage" is visible on the single-page layout
  const [activePage, setActivePage] = useState("about");

  return (
    <div className="relative z-0 bg-primary min-h-screen overflow-hidden">
      <InteractiveBackground />
      <div className="relative">
        <Navbar currentPage={activePage} onChangePage={setActivePage} />
        <Hero />
      </div>

      {activePage === "about" && <About />}
      {activePage === "work" && <Experience />}
      {activePage === "projects" && <Works />}
      {activePage === "references" && <References />}
      {activePage === "contact" && (
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/0" element={<ProjectDetails />} />
        <Route path="/project/1" element={<ProjectDetails2 />} />
        <Route path="/project/2" element={<ProjectDetails3 />} />
        <Route path="/project/3" element={<ProjectDetails4 />} />
        <Route path="/dp1" element={<DP1Page />} />
      </Routes>
    </Router>
  );
};

export default App;
