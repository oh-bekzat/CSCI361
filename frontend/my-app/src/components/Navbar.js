import React from "react";
import { Link, Route } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
        <a href="/">
            <div className="header-32-bold">VMS Project</div>
        </a>
        <div className="navbar">
            <a href="./">Home</a>
            <a href="./Services">Services</a>
            <a href="./vehicle-info">Vehicle Info</a>
            <a href="./history">History</a>
        </div>
    </header>
  );
};

export default Navbar;