import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function ClientNavbar() {
 
  return (
    <header className="header navbar">
      
        <div className='logo-container'>
          <div>
          <Link to='/client'>
          <span><img src={require('./assets/client.png')} alt="Home" /></span>
          </Link>
          </div>
          <div className="header-32-bold">VMS Project</div>
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
            <Link to='/client/profile' className='nav-links' >
              Profile
            </Link>
          </li>
        </ul>
      
    </header>
  );
}

export default ClientNavbar;

