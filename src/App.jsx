import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
} from './components';
import News from './components/News';
import ProjectDetails2 from './components/ProjectDetails2';
import ProjectDetails3 from './components/ProjectDetails3';
import ProjectDetails4 from './components/ProjectDetails4';

const MainPage = () => {
  const [activePage, setActivePage] = useState("about");

  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <Navbar currentPage={activePage} onChangePage={setActivePage} />
      <Hero />
      {activePage === "about" && <About />}
      {activePage === "work" && <Experience />}
      {activePage === "projects" && <Works />}
      {activePage === "news" && <News />}
      {activePage === "contact" && <Contact />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* DP1 removed — indices shifted: 0=DP2, 1=DP3, 2=DP4 */}
        <Route path="/project/0" element={<ProjectDetails2 />} />
        <Route path="/project/1" element={<ProjectDetails3 />} />
        <Route path="/project/2" element={<ProjectDetails4 />} />
      </Routes>
    </Router>
  );
};

export default App;
