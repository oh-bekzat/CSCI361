import React, { useState, useEffect } from 'react';
import '../../components/cells/car/car_cell.css';
import axios from 'axios';
import CarCell from '../../components/cells/car/car_cell';
import { Link } from 'react-router-dom';

const AdminVehicles = () => {
  
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:3001/vehicles');
        console.log(response.data)
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };
    fetchVehicles();
    console.log("cars = ",cars)
  }, []); 

  return (
    <div className="auction-page">
      <Link to="/admin/vehicles/add">
        <button className="button-124">Add Vehicle</button>
      </Link>
      {cars.map((car, index) => (
        <CarCell key={index} car={car} />

      ))}
      {/* {cars.map((car)=> car)} */}
    </div>
  );
};

export default AdminVehicles;
