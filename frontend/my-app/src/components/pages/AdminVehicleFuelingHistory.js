// AdminVehicleFuelingHistory.js

import React, { useState, useEffect } from 'react';
import '../../components/cells/car/car_cell.css';
import axios from 'axios';
import CarCell from '../../components/cells/car/car_cell';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const AdminVehiclesFuelingHistory = () => {
  const car = useParams()
  const [history, setHistory] = useState([]);
  const [photos, setPhotos] = useState([]);
  const FuelingHistory = ({ fuelingData }) => {
    return (
      <div className="fueling-card">
        <div className="fueling-info">
          <h2>{fuelingData.gas_station_name}</h2>
          <p>Fuel Amount: {fuelingData.fuel_amount}</p>
          <p>Cost: {fuelingData.fuel_cost}</p>
          <p>Fueling Date: {new Date(fuelingData.fuelling_date).toLocaleString()}</p>
          <p>Vehicle ID: {fuelingData.vehicle_id}</p>
          {photos.length > 0 && (
              <div>
                <label>Photos:</label>
                <div>
                  {photos.map((photo_data, index) => (
                    <img key={index} src={photo_data.photo_data} alt={`Photo ${index + 1}`} style={{ maxWidth: '100%' }} />
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }

  useEffect(() => {
    const fetchVehicleFueling = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/tasks/fueling/${car.vehicleId}`);
            setHistory(response.data.fuellingDetails); 
            console.log(response.data.fuellingDetails);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
    };
    const fetchPhotos = async(taskId) =>{
      try {
        const response = await axios.get(`http://localhost:3001/tasks/photos/${taskId}`);
        setPhotos(response.data.allTasks);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    fetchVehicleFueling();
    fetchPhotos(2)
    console.log(history)
  }, []); 

  return (
    <div className="history-page">
    <h1>Fueling History</h1>
      <div className="fueling-cards">
        {history.map((fuelingData, index) => (
          <FuelingHistory key={index} fuelingData={fuelingData} />
        ))}
      </div>
    </div>
  );
};

export default AdminVehiclesFuelingHistory;
