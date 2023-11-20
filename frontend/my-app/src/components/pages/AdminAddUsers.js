// AdminAddUsers.js
import React from 'react';
import './AdminAddUsers.css';
import axios from 'axios';

const AddUserPage = () => {
  // Sample user data
  const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    // Add more users as needed
  ];

  return (
    <div className="add-user-page">
      {/* User List with Edit Buttons */}
      <div className="user-list">
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <span>{user.name}</span>
              <button>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddUserPage;
