import React from "react";
import { Link, Route } from "react-router-dom";
import './Navbar.css';

const MainNavbar = () => {
  return (
    <header>
        <a href="/" className="logo-container">
        <img src={require('./assets/driver.png')} alt="Driver" />
        <div className="header-32-bold">VMS Project</div>
        </a>
        <div className="navbar">
            <a href="./">Home</a>
            <a href="./auction">Auction</a>
            <a href="./about-us">About Us</a>
            <a href="./login">Login</a>
        </div>
    </header>
  );
};

export default MainNavbar;