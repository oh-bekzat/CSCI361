import React, { useState, useEffect } from 'react';
import './DriverProfile.css'; // Include your styles
import { useNavigate } from 'react-router-dom';

const ClientProfile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating a fetch request to an API endpoint
    const clientId = localStorage.getItem("clientId");
    fetch(`http://localhost:3001/users/${clientId}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
    localStorage.removeItem("clientId");
    navigate('/');
  };

  return (
    <div className="profile-container">
      <div className="left-section">
        {/* Profile Photo */}
        <div className="profile-info-container">
          <div className="profile-photo-container">
            <img
              src={userData?.profilePhotoUrl || 'https://placekitten.com/200/200'}
              alt="Profile"
              className="profile-photo"
            />
            <div className="user-name-container">
            <h2>{userData?.firstname + ' ' + userData?.lastname || 'User Name'}</h2>
          </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="personal-info-container">
          <div className="info-item">
            <span className="body-14"><strong>Email:</strong> {userData?.email || 'Not available'}</span>
          </div>
          <div className="info-item">
            <span className="body-14"><strong>Phone Number:</strong> {userData?.phone_number || 'Not available'}</span>
          </div>
          <div className="info-item">
            <span className="body-14"><strong>Government ID:</strong> {userData?.iin || 'Not available'}</span>
          </div>
        </div>

        {/* Logout Button */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button className="button-124" onClick={handleLogout}>
            Logout
            </button>
        </div>

      </div>
    </div>
  );
};

export default ClientProfile;
