// AdminHomePage.js
import React, { useState, useEffect } from 'react';
import './AdminHome.css';
import axios from 'axios';

  const AdminHomePage = ({adminId}) => {
    const [selectedTask, setSelectedTask] = useState(null);

  return (
    <div className="admin-home-page">
      <div className="button-container">
        <button onClick={() => console.log('Manage Users clicked')}>Manage Users</button>
        <button onClick={() => console.log('Vehicles clicked')}>Vehicles</button>
        <button onClick={() => console.log('Routes clicked')}>Routes</button>
        <button onClick={() => console.log('Tasks clicked')}>Tasks</button>
      </div>
    </div>
  );
};

export default AdminHomePage;