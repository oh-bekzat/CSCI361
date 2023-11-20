// AssignDriverModal.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root'); // Set the root element for accessibility

const AssignDriverModal = ({ isOpen, onRequestClose, onDriverSelect }) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users/drivers');
        setDrivers(response.data);
      } catch (error) {
        console.error('Error fetching drivers:', error);
      }
    };
    fetchDrivers();
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Assign Driver Modal"
    >
      <h2>Choose a Driver</h2>
      <select onChange={(e) => onDriverSelect(e.target.value)}>
        <option value="">Select a Driver</option>
        {drivers.map((driver) => (
          <option key={driver.driver_id} value={driver.driver_id}>
            {driver.driver_name}
          </option>
        ))}
      </select>
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
};

export default AssignDriverModal;
