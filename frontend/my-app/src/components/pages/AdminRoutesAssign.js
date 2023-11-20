// AdminRoutesAssign.js
import React, { useState, useEffect } from 'react';
import './AdminRoutesAssign.css'; // assuming the AdminRoutes.css also contains styles for SelectDrivers

const SelectDrivers = () => {
    // Mock data for available drivers
    const mockDrivers = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Bob Johnson' },
      // Add more drivers as needed
    ];
  
    const [drivers, setDrivers] = useState([]);
    const [selectedDriver, setSelectedDriver] = useState(null);
    const [showDriverList, setShowDriverList] = useState(false);
  
    useEffect(() => {
      // Set mock drivers when the component mounts
      setDrivers(mockDrivers);
    }, []);
  
    const handleSelectClick = () => {
      setShowDriverList(!showDriverList);
    };
  
    const handleDriverSelection = (driver) => {
      setSelectedDriver(driver);
      setShowDriverList(false);
    };

  return (
    <div className="select-drivers-container">
      <div>
        <button className="assign-button" onClick={handleSelectClick}>Select</button>
      </div>

      {showDriverList && (
        <ul>
          {drivers.map((driver) => (
            <li key={driver.id} onClick={() => handleDriverSelection(driver)}>
              {driver.name}
            </li>
          ))}
        </ul>
      )}

      {selectedDriver && (
        <div>
          <p>Selected Driver: {selectedDriver.name}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default SelectDrivers;