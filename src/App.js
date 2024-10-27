import React, { useEffect } from 'react';
import './App.css';
import InfoPage from './InfoPage';
import ProjectsPage from './ProjectsPage';
import EducationPage from './EducationPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import PersonalProjectsPage from './PersonalProjectsPage';

const App = () => {
  useEffect(() => {
    document.title = "Vlad Stoenescu"; // Set your universal tab title here
  }, []);

  return (
    <Router>
      <div className="app">

        <video autoPlay="autoplay" loop="loop" muted playsInline className="video-background">
          <source src="/5K Shooting Stars ★ 1-Hour Night-Sky ★ Video Background - UHD Animation ║ HD Longest FREE 4K - Trim.mp4" type="video/mp4" />
        </video>

        <div className="left-section">
          <InfoPage />
        </div>
        <div className="right-section">
          <Routes>
            <Route path="/" element={<Navigate to="/projects" />} />
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
