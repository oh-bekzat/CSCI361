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
  const FuelingHistory = ({ fuelingData }) => {
    return (
      <div className="fueling-card">
        <div className="fueling-info">
          <h2>Fueling Details</h2>
          <p>Fueling ID: {fuelingData.fuelling_id}</p>
          <p>Fuel Amount: {fuelingData.fuel_amount}</p>
          <p>Fuel Cost: {fuelingData.fuel_cost}</p>
          <p>Fueling Date: {new Date(fuelingData.fuelling_date).toLocaleString()}</p>
          <p>Gas Station: {fuelingData.gas_station_name}</p>
          <p>Task ID: {fuelingData.task_id}</p>
          <p>User ID: {fuelingData.user_id}</p>
          <p>Vehicle ID: {fuelingData.vehicle_id}</p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    const fetchVehicleFueling = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/tasks/fueling/${car.vehicleId}`);
            setHistory(response.data); 
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
    <h1>Fueling History</h1>
      <div className="fueling-cards">
        {history.map((fuellingData, index) => (
          <FuelingHistory key={index} fuelingData={fuellingData} />
        ))}
      </div>
    </div>
  );
};

export default AdminVehicles;
