// AdminHomePage.js
import React, { useState, useEffect } from 'react';
import './AdminHome.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminHomePage = ({adminId}) => {
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <div className="admin-home-page">
      <div className="button-container left">
        <Link to="/admin/users">
            <button onClick={() => console.log('Manage Users clicked')}>Manage Users</button>
        </Link>
        <Link to="/admin/vehicles">
            <button onClick={() => console.log('Vehicles clicked')}>Vehicles</button>
        </Link>
      </div>
      <div className="button-container right">
        <Link to="/admin/routes">
            <button onClick={() => console.log('Routes clicked')}>Routes</button>
        </Link>
        <Link to="/admin/tasks">
            <button onClick={() => console.log('Tasks clicked')}>Tasks</button>
        </Link>
      </div>
      <button className="logout-button" onClick={() => console.log('Logout clicked')}>
        Logout
      </button>
    </div>
  );
};

export default AdminHomePage;