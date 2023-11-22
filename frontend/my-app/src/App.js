import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
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
import RegistrationFormUser from './components/pages/registerUser';
import RegistrationFormVehicle from './components/pages/registerVehicle';
import AdminManageDrivers from './components/pages/AdminManageDrivers';
import AdminHomePage from './components/pages/AdminHome';
import AdminNavbar from './components/AdminNavbar';
import AdminTasks from './components/pages/AdminTasks';
import AdminUsers from './components/pages/AdminUsers';
import AddUserPage from './components/pages/AdminAddUsers';
import AdminVehicles from './components/pages/AdminVehicles';
import AdminRoutes from './components/pages/AdminRoutes';
import FuelingNavbar from './components/FuelingNavbar';
import FuelingHistory from './components/pages/FuelingHistory';
import FuelingTasks from './components/pages/FuelingTasks';
import FuelProfile from './components/pages/FuelingProfile';
import MaintenNavbar from './components/MaintenNavbar';
import MaintenHistory from './components/pages/MaintenHistory';
import MaintenTasks from './components/pages/MaintenTasks';
import ClientNavbar from './components/ClientNavbar';
import ClientHome from './components/pages/ClientHome';
import ClientRequest from './components/pages/ClientRequest';
import ClientProfile from './components/pages/ClientProfile';


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        {/* <Route path="/driver" render={(props) => <><Navbar /><DriverHomePage {...props} /></>} /> */}
        
        <Route path="/driver/" element={<><Navbar /><DriverHomePage /></>} />
        <Route path="/driver/history" element={<><Navbar /><History /></>} />
        <Route path="/driver/profile" element={<><Navbar /><Profile /></>} />
        <Route path="/driver/vehicle-info" element={<><Navbar /><VehicleInfo /></>} />
        <Route path="/login" element={<><MainNavbar /><LoginPage /></>} />
        {/* Add a default route to redirect to home if none of the above routes match */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        <Route path="/" element={<><MainNavbar /><Home /></>} />
        <Route path="/about-us" element={<><MainNavbar /><AboutUs /></>} />
        <Route path="/auction" element={<><MainNavbar /><Auction /></>} />
        <Route path="/admin/" element={<><AdminNavbar /><AdminHomePage /></>} />
        <Route path="/admin/tasks" element={<><AdminNavbar /><AdminTasks /></>} />
        <Route path="/admin/routes" element={<><AdminNavbar /><AdminRoutes /></>} />
        <Route path="/admin/users" element={<><AdminNavbar /><AdminUsers /></>} />
        <Route path="/admin/users/add" element={<><AdminNavbar /><RegistrationFormUser/></>} />
        <Route path="/admin/users/driver" element={<><AdminNavbar /><AdminManageDrivers/></>} />
        <Route path="/admin/vehicles/add" element={<><AdminNavbar /><RegistrationFormVehicle/></>} />
        <Route path="/admin/vehicles" element={<><AdminNavbar /><AdminVehicles /></>} />
        <Route path="/fueling/profile" element={<><FuelingNavbar /><FuelProfile /></>} />
        <Route path="/fueling/history" element={<><FuelingNavbar /><FuelingHistory /></>} />
        <Route path="/fueling/" element={<><FuelingNavbar /><FuelingTasks /></>} />
        <Route path="/mainten/profile" element={<><MaintenNavbar /><Profile /></>} />
        <Route path="/mainten/history" element={<><MaintenNavbar /><MaintenHistory /></>} />
        <Route path="/mainten/" element={<><MaintenNavbar /><MaintenTasks /></>} />
        <Route path="/client/" element={<><ClientNavbar /><ClientHome /></>} />
        <Route path="/client/make-request" element={<><ClientNavbar /><ClientRequest /></>} />
        <Route path="/client/profile" element={<><ClientNavbar /><ClientProfile /></>} />
        
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;
