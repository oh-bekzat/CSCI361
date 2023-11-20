import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function ClientNavbar() {
 
  return (
    <header className="header navbar">
      
        <div className='logo-container'>
          <Link to='/client'>
          <span><img src={require('./assets/home-icon.png')} alt="Home" /></span>
            <span className="header-32-bold">VMS Project</span>
          </Link>
        </div>
        <ul className='navbar'>
          <li>
            <Link to='/client' className='nav-links'>
              Requests
            </Link>
          </li>
          <li>
            <Link to='/client/make-request' className='nav-links'>
              Make request
            </Link>
          </li>
          
          <li>
            <Link to='/client/logout' className='nav-links' >
              Logout
            </Link>
          </li>
        </ul>
      
    </header>
  );
}

export default ClientNavbar;

