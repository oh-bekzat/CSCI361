import React, { useState, useEffect } from 'react';
import './ClientRequest.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AdminManageMainten = ({userId}) => {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch user data
    const fetchUserData = async (user) => {
      try {
        const response = await axios.get(`http://localhost:3001/users/maintenance`);
        setUserData(response.data); 
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };


    // Fetch driver rating data
    fetchUserData();
  }, []);

  





  // Function to handle Driver selection
  const handleUserSelection = async (user) => {
    console.log("pressed");
    setSelectedUser(user);
  };


  // Function to handle button click
  const handleEditUserClick = () => {
    if (selectedUser) {
      // Save driver_id to local storage
      localStorage.setItem('selectedMaintenanceId', selectedUser.user_id);
      const selectedMaintenanceId = localStorage.getItem('selectedMaintenanceId');
      console.log("selectedMaintenanceId = ",selectedMaintenanceId )
    }
  };



  return (
    
    <div className="client-home-page">
      <div className="task-list">
        <ul>
          {Array.isArray(userData) && userData.map((User) => (
            <li key={User.user_id} onClick={() => handleUserSelection(User)}>
              <div>
                  <span className='body-14-bold' style={{ marginLeft: '20px' }}>User </span> <span className='body-14'>{User.firstname} {User.lastname}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section - Detailed Information */}
      <div className="task-details">
        {selectedUser ? (
            <>
          <div>
            <div className='body-24-bold'>Maintenance Person Information : </div>
          </div>
            <div>
                <span className='body-14-bold'>Id: </span> <span className='body-14'>{selectedUser.user_id}</span>
            </div>
            <div>
                <span className='body-14-bold'>Name: </span> <span className='body-14'>{selectedUser.firstname}</span>
            </div>
            <div>
                <span className='body-14-bold'>Lastname: </span> <span className='body-14'>{selectedUser.lastname}</span>
            </div>
            <div>
                <span className='body-14-bold'>Email: </span> <span className='body-14'>{selectedUser.email}</span>
            </div>
            <div>
                <span className='body-14-bold'>Phone Number: </span> <span className='body-14'>{selectedUser.phone_number}</span>
            </div>
            <div>
                <span className='body-14-bold'>IIN: </span> <span className='body-14'>{selectedUser.iin}</span>
            </div>
            
            
            <div>
            <Link to="/admin/users/mainten/update">
              <button className="button-264" onClick={handleEditUserClick}>
                Edit Maintenance Person
              </button>
            </Link>
            </div>

          </>
        ) : (
          <div className='body-24'>Select a Maintenance person to view details.</div>
        )}
      </div>
    </div>
    
  );
 };

export default AdminManageMainten
