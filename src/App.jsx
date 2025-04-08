import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import ProjectDetails from './components/ProjectDetails';
import ProjectDetails2 from './components/ProjectDetails2';
import ProjectDetails3 from './components/ProjectDetails3';
import ProjectDetails4 from './components/ProjectDetails4';
import DP1Page from "./components/DP1Page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          }
        />

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
