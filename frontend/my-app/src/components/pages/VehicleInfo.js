// VehicleInfoPage.js
import React, { useState, useEffect } from 'react';
import './VehicleInfo.css'; // Create or import your CSS file

const VehicleInfo = () => {
  const [vehicleData, setVehicleData] = useState(null);

  // useEffect(() => {
  //   // Fetch vehicle data from an API endpoint or other data source
  //   // Update the API endpoint or data fetching logic based on your project
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3001/get-vehicle-info');
  //       const data = await response.json();
  //       setVehicleData(data);
  //     } catch (error) {
  //       console.error('Error fetching vehicle data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array ensures useEffect runs once after the initial render

  const handleChangeDetails = () => {
    // Logic to handle changing vehicle details
    console.log('Change Details button clicked');
  };

  return (
    <div className="vehicle-info-page">
      {/* Left Section - Stack of Vehicle Photos */}
      
      <div className="photo-stack">
        <img src={require('../assets/car_example.png')}></img>
      </div>

      {/* Right Section - General Information */}
      <div className="general-info">
        {vehicleData ? (
          <div>
            <h2>{vehicleData.model}</h2>
            <p>Make: {vehicleData.make}</p>
            <p>Year: {vehicleData.year}</p>
            <p>Color: {vehicleData.color}</p>
            {/* Add more details as needed */}
            <button onClick={handleChangeDetails}>Change Details</button>
          </div>
        ) : (
          <p>Loading vehicle information...</p>
        )}
      </div>
    </div>
  );
};

export default VehicleInfo;