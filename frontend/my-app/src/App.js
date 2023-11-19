import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import DriverHomePage from './components/pages/DriverHome';
import History from './components/pages/DriverHistory';
import Profile from './components/pages/Profile';
import Services from './components/pages/Services';
import VehicleInfo from './components/pages/VehicleInfo';
import LoginPage from './components/pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><DriverHomePage /></>} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<Services />} />
        <Route path="/vehicle-info" element={<VehicleInfo />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Add a default route to redirect to home if none of the above routes match */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
