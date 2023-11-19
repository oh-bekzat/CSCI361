import React from "react";
import { Link, Route } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
        <a href="/" className="logo-container">
        <img src={require('./assets/driver.png')} alt="Driver" />
        <div className="header-32-bold">VMS Project</div>
        </a>
        <div className="navbar">
            <a href="./">Tasks</a>
            <a href="./history">History</a>
            <a href="./vehicle-info">Vehicle Info</a>
            <a href="./profile">Profile</a>
        </div>
    </header>
  );
};

export default Navbar;