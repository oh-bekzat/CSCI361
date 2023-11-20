
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function FuelingNavbar() {
 
  return (
    <header className="header navbar">
      
        <div className='logo-container'>
          <Link to='/fueling'>
          <span><img src={require('./assets/fueling.png')} alt="Driver" /></span>
            <span className="header-32-bold">VMS Project</span>
          </Link>
        </div>
        <ul className='navbar'>
          <li>
            <Link to='/fueling' className='nav-links'>
              Tasks
            </Link>
          </li>
          <li>
            <Link to='/fueling/history' className='nav-links'>
              History
            </Link>
          </li>
          
          <li>
            <Link to='/fueling/profile' className='nav-links' >
              Profile
            </Link>
          </li>
        </ul>
      
    </header>
  );
}

export default FuelingNavbar;

