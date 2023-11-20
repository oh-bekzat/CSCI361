
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function MaintenNavbar() {
 
  return (
    <header className="header navbar">
      
        <div className='logo-container'>
          <Link to='/mainten'>
          <span><img src={require('./assets/maintain.png')} alt="Driver" /></span>
            <span className="header-32-bold">VMS Project</span>
          </Link>
        </div>
        <ul className='navbar'>
          <li>
            <Link to='/mainten' className='nav-links'>
              Tasks
            </Link>
          </li>
          <li>
            <Link to='/mainten/history' className='nav-links'>
              History
            </Link>
          </li>
          
          <li>
            <Link to='/mainten/profile' className='nav-links' >
              Profile
            </Link>
          </li>
        </ul>
      
    </header>
  );
}

export default MaintenNavbar;

