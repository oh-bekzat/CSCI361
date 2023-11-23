import React, { useState, useEffect } from 'react';
import '../../components/cells/car/car_cell.css';
import axios from 'axios';
import CarCell from '../../components/cells/car/car_cell';
import { Link } from 'react-router-dom';

const AdminVehicles = ({car}) => {
  
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

  useEffect(() => {
    const fetchVehicleFueling = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/vehicles/fueling/${car.vehicle_id}`);
            setHistory(response.data); 
      
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
    };
    fetchVehicleFueling();
  }, []); 

  return (
    <div className="auction-page">
        {history}
      {/* {history.map((car, index) => (
        <CarCell key={index} car={car} />
      ))} */}
    </div>
  );
};

export default AdminVehicles;
