import React, { useState } from 'react';
import axios from 'axios';

const ClientRequest = () => {
  const [startPoint, setStartPoint] = useState('');
  const [finishPoint, setFinishPoint] = useState('');
  const [dateTime, setDateTime] = useState('');

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
        start_point: startPoint,
        finish_point: finishPoint,
        requested_time: dateTime,
        requested_date: date
      };

      // Make a POST request
      const response = await axios.post('http://localhost:3001/routes', requestData);

      console.log('Route request successful:', response.data);
      // Handle the response data as needed

      // Clear the form inputs after submission
      setStartPoint('');
      setFinishPoint('');
      setDateTime('');
    } catch (error) {
      console.error('Error submitting route request:', error);
      // Handle the error as needed
    }
  };

  return (
    <div className="request-container">
    <form onSubmit={handleSubmit}>
      <label htmlFor="startPoint">Point of departure:</label>
      <input
        type="text"
        id="startPoint"
        name="startPoint"
        value={startPoint}
        onChange={(e) => setStartPoint(e.target.value)}
        required
      />

      <label htmlFor="finishPoint">Point of arrival:</label>
      <input
        type="text"
        id="finishPoint"
        name="finishPoint"
        value={finishPoint}
        onChange={(e) => setFinishPoint(e.target.value)}
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

      <button type="submit" className="button-124 request-button">Submit Route Request</button>
    </form>
    </div>
  );
};

export default ClientRequest;
