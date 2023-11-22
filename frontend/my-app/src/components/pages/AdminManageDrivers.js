import React, { useState, useEffect } from 'react';
import './ClientRequest.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AdminManageDrivers = ({driverId}) => {
  const [userData, setUserData] = useState([]);
  const [driverData, setDriverData] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);

  useEffect(() => {
    // Fetch user data
    const fetchDriverData = async () => {
        try {
        const response = await axios.get(`http://localhost:3001/users/drivers`);
        console.log(response.data);
        setDriverData(response.data);
      } catch (error) {
        console.error('Error fetching driver data:', error);
      }
    };


    // Fetch driver rating data
    fetchDriverData();
  }, []);

  const fetchUserData = async (driver) => {
    try {
      const response = await axios.get(`http://localhost:3001/users/drivers/${driver.user_id}`);
      setUserData(response.data); 

      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };





  // Function to handle Driver selection
  const handleDriverSelection = async (driver) => {
    console.log("pressed");
    console.log("sel.driver   ", driver)
    setSelectedDriver(driver);
    await fetchUserData(driver);
  };


  // Function to handle button click
  const handleEditDriverClick = () => {
    if (selectedDriver) {
      // Save driver_id to local storage
      localStorage.setItem('selectedDriverId', selectedDriver.user_id);
    }
  };



  return (
    
    <div className="client-home-page">
      <div className="task-list">
        <ul>
          {Array.isArray(driverData) && driverData.map((Driver) => (
            <li key={Driver.user_id} onClick={() => handleDriverSelection(Driver)}>
              <div>
                  <span className='body-14-bold' style={{ marginLeft: '20px' }}>Driver </span> <span className='body-14'>{Driver.firstname} {Driver.lastname}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section - Detailed Information */}
      <div className="task-details">
        {selectedDriver ? (
            <>
          <div>
            <div className='body-24-bold'>Driver Information : </div>
          </div>
            <div>
                <span className='body-14-bold'>Id: </span> <span className='body-14'>{selectedDriver.user_id}</span>
            </div>
            <div>
                <span className='body-14-bold'>Name: </span> <span className='body-14'>{selectedDriver.firstname}</span>
            </div>
            <div>
                <span className='body-14-bold'>Lastname: </span> <span className='body-14'>{selectedDriver.lastname}</span>
            </div>
            <div>
                <span className='body-14-bold'>Email: </span> <span className='body-14'>{selectedDriver.email}</span>
            </div>
            <div>
                <span className='body-14-bold'>Phone Number: </span> <span className='body-14'>{selectedDriver.phone_number}</span>
            </div>
            <div>
                <span className='body-14-bold'>IIN: </span> <span className='body-14'>{selectedDriver.iin}</span>
            </div>
            <div>
                <span className='body-14-bold'>Licence Code: </span> <span className='body-14'>{userData.license_code}</span>
            </div>
            <div>
                <span className='body-14-bold'>Rating: </span> <span className='body-14'>{userData.rating} ({userData.n_ratings})</span>
            </div>
            <div>
            <Link to="/admin/users/driver/update">
              <button className="button-124" onClick={handleEditDriverClick}>
                Edit Driver
              </button>
            </Link>
            </div>

          </>
        ) : (
          <div className='body-24'>Select a Driver to view details.</div>
        )}
      </div>
    </div>
    
  );
};

export default AdminManageDrivers
