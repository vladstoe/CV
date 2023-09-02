import React from 'react';
import './App.css';
import InfoPage from './InfoPage';
import ProjectsPage from './ProjectsPage';
import EducationPage from './EducationPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalProjectsPage from './PersonalProjectsPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="left-section">
          <InfoPage />
        </div>
        <div className="right-section">
          <Routes>
            <Route path="/" element={<ProjectsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/personal" element={<PersonalProjectsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
