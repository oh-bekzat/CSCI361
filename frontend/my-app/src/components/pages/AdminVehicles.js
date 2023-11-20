import React, { useState, useEffect } from 'react';
import './Auction.css';
import axios from 'axios';
import CarCell from '../../components/cells/car/car_cell';

const AdminVehicles = () => {
  const cars = [{
    license_plate: '',
    make: '',
    model: '',
    manufacture_year: '',
    capacity: '',
    fuel_volume: '',
    tank_volume: '',
    vehicle_image: '',
    mileage: 0,
    last_fueled_date: new Date().toISOString().split('T')[0],
    last_maintained_date: new Date().toISOString().split('T')[0],
  },
  {
    license_plate: '',
    make: '',
    model: '',
    manufacture_year: '',
    capacity: '',
    fuel_volume: '',
    tank_volume: '',
    vehicle_image: '',
    mileage: 0,
    last_fueled_date: new Date().toISOString().split('T')[0],
    last_maintained_date: new Date().toISOString().split('T')[0],
  },
  {
    license_plate: '',
    make: '',
    model: '',
    manufacture_year: '',
    capacity: '',
    fuel_volume: '',
    tank_volume: '',
    vehicle_image: '',
    mileage: 0,
    last_fueled_date: new Date().toISOString().split('T')[0],
    last_maintained_date: new Date().toISOString().split('T')[0],
  },

  ];

  const [auctionCars, setAuctionCars] = useState(cars.slice(0, Math.max(cars.length, 0)));

  return (
    <div className="auction-page">
      {auctionCars.map((car, index) => (
        <CarCell key={index} car={car} />
      ))}
    </div>
  );
};

export default AdminVehicles;
