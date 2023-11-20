import React, { useState, useEffect } from 'react';
import '../../components/cells/car/car_cell.css';
import axios from 'axios';
import CarCell from '../../components/cells/car/car_cell';
import { Link } from 'react-router-dom';

const AdminVehicles = () => {
  
  const [cars, setCars] = useState([]);

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
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:3001/vehicles');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };
    fetchVehicles();
  }, []); 

  const [auctionCars, setAuctionCars] = useState(cars.slice(0, Math.max(cars.length, 0)));

  return (
    <div className="auction-page">
      <Link to="/admin/vehicles/add">
        <button className="button-124">Add Vehicle</button>
      </Link>
      {cars.map((car, index) => (
        <CarCell key={index} car={car} />
      ))}
    </div>
  );
};

export default AdminVehicles;
