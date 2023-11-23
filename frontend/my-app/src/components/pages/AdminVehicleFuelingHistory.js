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
          <h2>{fuelingData.gas_station_name}</h2>
          <p>Fuel Amount: {fuelingData.fuel_amount}</p>
          <p>Cost: {fuelingData.fuel_cost}</p>
          <p>Fueling Date: {new Date(fuelingData.fuelling_date).toLocaleString()}</p>
          <p>Vehicle ID: {fuelingData.vehicle_id}</p>
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
    fetchVehicleFueling();
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

export default AdminVehicles;
