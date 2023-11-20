import React, { useState, useEffect } from 'react';
import './DriverProfile.css'; // Include your styles

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Simulating a fetch request to an API endpoint
    fetch('https://api.example.com/userdata')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out'); // For example, you can log a message or call a logout API
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
            <h2>{userData?.name || 'User Name'}</h2>
            <img src={require('../assets/star.png')} style={{ width: '20pt' }} alt="Star" />
          </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="personal-info-container">
          <div className="info-item">
            <span className="body-14"><strong>Email:</strong> {userData?.email || 'Not available'}</span>
          </div>
          <div className="info-item">
            <span className="body-14"><strong>Address:</strong> {userData?.address || 'Not available'}</span>
          </div>
          <div className="info-item">
            <span className="body-14"><strong>Phone Number:</strong> {userData?.phoneNumber || 'Not available'}</span>
          </div>
          <div className="info-item">
            <span className="body-14"><strong>Government ID:</strong> {userData?.governmentId || 'Not available'}</span>
          </div>
          <div className="info-item">
            <span className="body-14"><strong>Dispatcher contact:</strong> {userData?.dispatcherContact || '+77182214141'}</span>
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

export default Profile;
