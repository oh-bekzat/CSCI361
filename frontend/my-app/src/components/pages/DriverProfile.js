import React, { useState, useEffect } from 'react';
import './DriverProfile.css';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [driverRating, setDriverRating] = useState(null);
  const navigate = useNavigate();


  const userId = localStorage.getItem("driverId");
  // useEffect(() => {
  //   // Simulating a fetch request to an API endpoint
  //   const driverId = localStorage.getItem("driverId");
  //   fetch(`http://localhost:3001/users/${driverId}`)
  //     .then(response => response.json())
  //     .then(data => setUserData(data))
  //     .catch(error => console.error('Error fetching data:', error));
  
  useEffect(() => {
    // Fetch user data
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/users/${userId}`);
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };


  // Fetch driver rating data
  const fetchDriverRating = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/drivers/${userId}/rating`);
      setDriverRating(response.data.rating); // Assuming the response has a 'rating' property

      console.log(response.data);
    } catch (error) {
      console.error('Error fetching driver rating:', error);
    }
  };
   // Call both fetch functions
   fetchUserData();
   fetchDriverRating();
 }, [userId]);


  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
    localStorage.removeItem("driverId");
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
            <img src={require('../assets/star.png')} style={{ width: '20pt' }} alt="Star" />
            {driverRating !== null && (
              <div className="rating-container">
                <span className="rating">{driverRating}</span>
              </div>
            )}
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
          <div className="info-item">
            <span className="body-14"><strong>Dispatcher contact:</strong> {userData?.dispatcherContact || '+7 (718) 221-41-41'}</span>
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
