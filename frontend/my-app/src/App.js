import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import DriverHomePage from './components/pages/DriverHome';
import History from './components/pages/DriverHistory';
import Profile from './components/pages/Profile';
import Services from './components/pages/Services';
import VehicleInfo from './components/pages/VehicleInfo';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Your Navbar or any other components that are not part of the routes */}
        <Navbar /> 
        <Routes>
          <Route path="/" element={<DriverHomePage />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/vehicle-info" element={<VehicleInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
