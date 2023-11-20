// AdminHomePage.js
import React, { useState, useEffect } from 'react';
import './AdminHome.css';
import axios from 'axios';

const AdminHomePage = ({adminId}) => {
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <div className="admin-home-page">
      <div className="button-container left">
        <button onClick={() => console.log('Manage Users clicked')}>Manage Users</button>
        <button onClick={() => console.log('Vehicles clicked')}>Vehicles</button>
      </div>
      <div className="button-container right">
        <button onClick={() => console.log('Routes clicked')}>Routes</button>
        <button onClick={() => console.log('Tasks clicked')}>Tasks</button>
      </div>
      <button className="logout-button" onClick={() => console.log('Logout clicked')}>
        Logout
      </button>
    </div>
  );
};

export default AdminHomePage;