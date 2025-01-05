import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import ProjectDetails from './components/ProjectDetails'; // Import the new ProjectDetails component
import DP1Page from "./components/DP1Page";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Page with all sections */}
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

        {/* Project Details Page */}
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/dp1" element={<DP1Page />} />
      </Routes>
    </Router>
  );
};

export default App;
