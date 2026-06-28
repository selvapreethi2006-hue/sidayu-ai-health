import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import ChatInterface from './pages/ChatInterface';
import AgentWorkflow from './pages/AgentWorkflow';
import KnowledgeBase from './pages/KnowledgeBase';
import DoctorConsultation from './pages/DoctorConsultation';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatInterface />} />
        <Route path="/agents" element={<AgentWorkflow />} />
        <Route path="/treatments" element={<KnowledgeBase />} />
        <Route path="/doctors" element={<DoctorConsultation />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
