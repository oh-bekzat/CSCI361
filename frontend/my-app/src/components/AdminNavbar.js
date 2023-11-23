
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function AdminNavbar() {
 
  return (
    <header className="header navbar">
        <div className='logo-container'>
          <div>
          <Link to='/admin'>
          <span><img src={require('./assets/key.png')} alt="Home" /></span>
          </Link>
          </div>
          <div className="header-32-bold">VMS Project</div>
        </div>
        <ul className='navbar'>
          <li>
            <Link to='/admin' className='nav-links'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/admin/users' className='nav-links'>
              Users
            </Link>
          </li>
          <li>
            <Link to='/admin/vehicles' className='nav-links' >
              Vehicles
            </Link>
          </li>
          <li>
            <Link to='/admin/routes' className='nav-links' >
              Routes
            </Link>
          </li>
          <li>
            <Link to='/admin/tasks' className='nav-links' >
              Tasks
            </Link>
          </li>
        </ul>
      
    </header>
  );
}

export default AdminNavbar;

