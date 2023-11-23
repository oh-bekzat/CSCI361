import React, { useState, useEffect } from 'react';
import '../../components/cells/car/car_cell.css';
import axios from 'axios';
import CarCell from '../../components/cells/car/car_cell';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const AdminVehicles = () => {
    const car = useParams()
  const [history, setHistory] = useState([]);
  // const cars = [{
  //   license_plate: '',
  //   make: '',
  //   model: '',
  //   manufacture_year: '',
  //   capacity: '',
  //   fuel_volume: '',
  //   tank_volume: '',
  //   vehicle_image: '',
  //   mileage: 0,
  //   last_fueled_date: new Date().toISOString().split('T')[0],
  //   last_maintained_date: new Date().toISOString().split('T')[0],
  // },
  // {
  //   license_plate: '',
  //   make: '',
  //   model: '',
  //   manufacture_year: '',
  //   capacity: '',
  //   fuel_volume: '',
  //   tank_volume: '',
  //   vehicle_image: '',
  //   mileage: 0,
  //   last_fueled_date: new Date().toISOString().split('T')[0],
  //   last_maintained_date: new Date().toISOString().split('T')[0],
  // },
  // {
  //   license_plate: '',
  //   make: '',
  //   model: '',
  //   manufacture_year: '',
  //   capacity: '',
  //   fuel_volume: '',
  //   tank_volume: '',
  //   vehicle_image: '',
  //   mileage: 0,
  //   last_fueled_date: new Date().toISOString().split('T')[0],
  //   last_maintained_date: new Date().toISOString().split('T')[0],
  // },
  // ];
  const MaintenanceHistory = ({ maintenanceData }) => {
    return (
      <div className="fueling-card">
        <div className="fueling-info">
          <h2>{maintenanceData.description}</h2>
          <p>Cost: {maintenanceData.maintenance_cost}</p>
          <p>Date: {new Date(maintenanceData.maintenance_date).toLocaleString()}</p>
          <p>Vehicle ID: {maintenanceData.vehicle_id}</p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    const fetchVehicleFueling = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/tasks/maintenance/${car.vehicleId}`);
            setHistory(response.data.maintenanceDetails); 
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
    };
    fetchVehicleFueling();
    console.log(history)
  }, []); 

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
