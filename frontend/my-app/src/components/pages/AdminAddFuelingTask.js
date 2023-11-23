import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AdminAddFuelingTask = () => {
  const [licensePlate, setLicencePlate] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [fuelId, setfuelId] = useState('');
  const [fuelers] = useState([
    { user_id:1, firstname: 'Assem', lastname: 'Alieva' },
  ]);
  const handleAssign = () => {
        // Call the provided onAssignfueler function with the selected fueler
        // onAssignfueler();
      };


  const handleSubmit = async (e) => {
    e.preventDefault();

  
    try {
      // Retrieve user_id from localStorage
      const user_id = localStorage.getItem("clientId");
      console.log(dateTime);
      const [date, time] = dateTime.split('T');

      // Create request data
      const requestData = {
        user_id: user_id,
        license_plate: licensePlate,
        requested_time: dateTime,
        requested_date: date
      };

      // Make a POST request
      const response = await axios.post('http://localhost:3001/routes', requestData);

      

      console.log('Route request successful:', response.data);
      // Handle the response data as needed

      // Clear the form inputs after submission
      setLicencePlate('');
      setDateTime('');
      console.log(dateTime);
    } catch (error) {
      console.error('Error submitting route request:', error);
      // Handle the error as needed
    }
  };
  
  const handleFuelSelect = (mId) => {
    setfuelId(mId);
    console.log(mId);
  };

  return (
    <div className="request-container">
    <form onSubmit={handleSubmit}>
      <label htmlFor="startPoint">License Plate:</label>
      <input
        type="text"
        id="licensePlate"
        name="licensePlate"
        value={licensePlate}
        onChange={(e) => setLicencePlate(e.target.value)}
        required
      />

      <label htmlFor="dateTime">Date and Time:</label>
        <input
          type="datetime-local"  // Use "datetime-local" type for date and time input
          id="dateTime"
          name="dateTime"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          required
        />

      <label>Choose a fueling person:</label>
        <select onChange={(e) => handleFuelSelect(e.target.value)}>
          <option key="default" value="">
            Select a fueling person
          </option>
          {fuelers.map((fueler) => (
            <option key={fueler.user_id} value={fueler.user_id}>
              {fueler.firstname} {fueler.lastname}
            </option>
          ))}
        </select>
        <button onClick={handleAssign}>Assign</button>
    </form>
    </div>

    
  );
};

export default AdminAddFuelingTask;
