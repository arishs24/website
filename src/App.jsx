import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './site/Home';
import Page from './site/Page';
import Articles from './site/Articles';
import ProjectDetails2 from './components/ProjectDetails2';
import ProjectDetails3 from './components/ProjectDetails3';
import ProjectDetails4 from './components/ProjectDetails4';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/m/:slug" element={<Page />} />
        <Route path="/articles" element={<Articles />} />
        {/* DP1 removed — indices shifted: 0=DP2, 1=DP3, 2=DP4 */}
        <Route path="/project/0" element={<ProjectDetails2 />} />
        <Route path="/project/1" element={<ProjectDetails3 />} />
        <Route path="/project/2" element={<ProjectDetails4 />} />
      </Routes>
    </Router>
  );
};

export default App;
