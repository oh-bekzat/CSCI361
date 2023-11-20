// import React from "react";
// import { Link, Route } from "react-router-dom";
// import './Navbar.css';

// const MainNavbar = () => {
//   return (
//     <header>
//         <a href="/" className="logo-container">
//         <img src={require('./assets/home-icon.png')} alt="Home" />
//         <div className="header-32-bold">VMS Project</div>
//         </a>
//         <div className="navbar">
//             <a href="./">Home</a>
//             <a href="./auction">Auction</a>
//             <a href="./about-us">About Us</a>
//             <a href="./login">Login</a>
//         </div>
//     </header>
//   );
// };

// export default MainNavbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function MainNavbar() {
 
  return (
    <header className="header navbar">
      
        <div className='logo-container'>
          <Link to='/'>
          <span><img src={require('./assets/home-icon.png')} alt="Home" /></span>
            <span className="header-32-bold">VMS Project</span>
          </Link>
        </div>
        <ul className='navbar'>
          <li>
            <Link to='/' className='nav-links'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/auction' className='nav-links'>
              Auction
            </Link>
          </li>
          <li>
            <Link to='/about-us' className='nav-links' >
              About us
            </Link>
          </li>
          <li>
            <Link to='/login' className='nav-links' >
              Login
            </Link>
          </li>
        </ul>
      
    </header>
  );
}

export default MainNavbar;

