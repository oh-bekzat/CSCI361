// AssignDriverModal.js
// AssignDriverModal.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './AdminRoutesPopUp.css'

Modal.setAppElement('#root');

const AssignDriverModal = ({ isOpen, onRequestClose, onDriverSelect, onCarSelect, cars, drivers, onAssignDriver }) => {
    const handleAssign = () => {
      // Call the provided onAssignDriver function with the selected driver
      onAssignDriver();
      // Close the modal
      onRequestClose();
    };
  
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Assign Driver Modal"
      >
        <h2>Choose a Driver</h2>
        <select onChange={(e) => onDriverSelect(e.target.value)}>
          <option key="default" value="">
            Select a Driver
          </option>
          {drivers.map((driver) => (
            <option key={driver.user_id} value={driver.user_id}>
              {driver.firstname} {driver.lastname}
            </option>
          ))}
        </select>
        <h2>Choose a Car</h2>
        <select onChange={(e) => onCarSelect(e.target.value)}>
          <option key="default" value="">
            Select a Car
          </option>
          {cars.map((car) => (
            <option key={car.license_plate} value={car.license_plate}>
              {car.license_plate}
            </option>
          ))}
        </select>
        <button onClick={handleAssign}>Assign</button>
        <button onClick={onRequestClose}>Cancel</button>
      </Modal>
    );
  };
  
  export default AssignDriverModal;