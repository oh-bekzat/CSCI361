import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/DriverNavbar';
import Home from './components/pages/Home';
import DriverHomePage from './components/pages/DriverHome';
import History from './components/pages/DriverHistory';
import Profile from './components/pages/DriverProfile';
import VehicleInfo from './components/pages/VehicleInfo';
import LoginPage from './components/pages/Login';
import MainNavbar from './components/MainNavbar';
import AboutUs from './components/pages/AboutUs';
import Auction from './components/pages/Auction';
import RegistrationForm from './components/pages/registerUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/driver/" element={<><Navbar /><DriverHomePage /></>} />
        <Route path="/driver/history" element={<><Navbar /><History /></>} />
        <Route path="/driver/profile" element={<><Navbar /><Profile /></>} />
        <Route path="/driver/vehicle-info" element={<><Navbar /><VehicleInfo /></>} />
        <Route path="/login" element={<><MainNavbar /><LoginPage /></>} />
        {/* Add a default route to redirect to home if none of the above routes match */}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<><MainNavbar /><Home /></>} />
        <Route path="/about-us" element={<><MainNavbar /><AboutUs /></>} />
        <Route path="/auction" element={<><MainNavbar /><Auction /></>} />
        <Route path="/admin/register" element={<><RegistrationForm/></>} />
      </Routes>
    </Router>
  );
}

export default App;
