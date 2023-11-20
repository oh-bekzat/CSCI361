// AdminUsers.js
import React, { useState, useEffect } from 'react';
import './AdminHome.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminUsers = ({userId}) => {
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <div className="admin-home-page">
      <div className="button-container left">
        <Link to="/admin/users/add"> 
            <button onClick={() => console.log('Add User')}>Add User</button>
        </Link>
        <Link to="/admin/users/driver">
            <button onClick={() => console.log('Manage Drivers')}>Manage Drivers</button>
        </Link>
      </div>
      <div className="button-container right">
        <Link to="/admin/users/maintening">
            <button onClick={() => console.log('Manage Maintening')}>Manage Maintening</button>
        </Link>
        <Link to="/admin/users/fueling">
            <button onClick={() => console.log('Manage Fueling')}>Manage Fueling</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminUsers;