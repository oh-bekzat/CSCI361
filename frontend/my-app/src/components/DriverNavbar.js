// import React from "react";
// import { Link, Route } from "react-router-dom";
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <header>
//         <a href="/" className="logo-container">
//         <img src={require('./assets/driver.png')} alt="Driver" />
//         <div className="header-32-bold">VMS Project</div>
//         </a>
//         <div className="navbar">
//             <a href="/driver">Tasks</a>
//             <a href="/driver/history">History</a>
//             <a href="/driver/vehicle-info">Vehicle Info</a>
//             <a href="/driver/profile">Profile</a>
//         </div>
//     </header>




//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
 
  return (
    <header className="header navbar">
      
        <div className='logo-container'>
          <Link to='/driver'>
          <span><img src={require('./assets/driver.png')} alt="Driver" /></span>
            <span className="header-32-bold">VMS Project</span>
          </Link>
        </div>
        <ul className='navbar'>
          <li>
            <Link to='/driver' className='nav-links'>
              Tasks
            </Link>
          </li>
          <li>
            <Link to='/driver/history' className='nav-links'>
              History
            </Link>
          </li>
          <li>
            <Link to='/driver/vehicle-info' className='nav-links' >
              Vehicle Info
            </Link>
          </li>
          <li>
            <Link to='/driver/profile' className='nav-links' >
              Profile
            </Link>
          </li>
        </ul>
      
    </header>
  );
}

export default Navbar;

