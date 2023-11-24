import React, { useState, useEffect } from 'react';
import '../../components/cells/car/car_cell.css';
import axios from 'axios';
import CarCell from '../../components/cells/car/car_cell';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const AdminVehicles = () => {
    const car = useParams()
    const [history, setHistory] = useState([]);
    const [photos, setPhotos] = useState([]);
  
  const MaintenanceHistory = ({ maintenanceData }) => {
    return (
      <div className="fueling-card">
        <div className="fueling-info">
          <h2>{maintenanceData.description}</h2>
          <p>Cost: {maintenanceData.maintenance_cost}</p>
          <p>Date: {new Date(maintenanceData.maintenance_date).toLocaleString()}</p>
          <p>Vehicle ID: {maintenanceData.vehicle_id}</p>
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
            const response = await axios.get(`http://localhost:3001/tasks/maintenance/${car.vehicleId}`);
            setHistory(response.data.maintenanceDetails); 
            console.log(response.data.maintenanceDetails);
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
    fetchPhotos(1)
    console.log(history)
  }, []); 

  const fetchPhotos = async(taskId) =>{
    try {
      const response = await axios.get(`http://localhost:3001/tasks/photos/${taskId}`);
      setPhotos(response.data.allTasks);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  return (
    <div className="history-page">
    <h1>Maintenance History</h1>
      <div className="maintenance-cards">
        {history.map((maintenanceData, index) => (
          <MaintenanceHistory key={index} maintenanceData={maintenanceData} />
        ))}
      </div>
    </div>
  );
};

export default AdminVehicles;
