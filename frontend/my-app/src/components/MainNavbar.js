import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function MainNavbar() {
 
  return (
    <header className="header navbar">
        <div className='logo-container'>
          <div>
          <Link to='/'>
          <span><img src={require('./assets/car.png')} alt="Home" /></span>
          </Link>
          </div>
          <div className="header-32-bold">VMS Project</div>
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

