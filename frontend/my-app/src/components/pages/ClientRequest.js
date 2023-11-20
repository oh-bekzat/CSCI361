import React, { useState } from 'react';
import axios from 'axios';

const ClientRequest = () => {
  const [startPoint, setStartPoint] = useState('');
  const [finishPoint, setFinishPoint] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Retrieve user_id from localStorage
      const user_id = localStorage.getItem("user_id");

      // Validate user inputs if needed

      // Create request data
      const requestData = {
        user_id: user_id,
        start_point: startPoint,
        finish_point: finishPoint
      };

      // Make a POST request
      const response = await axios.post('http://localhost:3001/routes', requestData);

      console.log('Route request successful:', response.data);
      // Handle the response data as needed

      // Clear the form inputs after submission
      setStartPoint('');
      setFinishPoint('');
    } catch (error) {
      console.error('Error submitting route request:', error);
      // Handle the error as needed
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="startPoint">Start Point:</label>
      <input
        type="text"
        id="startPoint"
        name="startPoint"
        value={startPoint}
        onChange={(e) => setStartPoint(e.target.value)}
        required
      />

      <label htmlFor="finishPoint">Finish Point:</label>
      <input
        type="text"
        id="finishPoint"
        name="finishPoint"
        value={finishPoint}
        onChange={(e) => setFinishPoint(e.target.value)}
        required
      />

      <button type="submit">Submit Route Request</button>
    </form>
  );
};

export default ClientRequest;
