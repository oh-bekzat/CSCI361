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
        <div key={index}>
          <Link to={`/admin/vehicles/fueling/${car.license_plate}`}><button className="button-vehicle">Show fueling history</button></Link>
            <span className="button-gap"/>
          <Link to={`/admin/vehicles/maintenance/${car.license_plate}`}><button className="button-vehicle">Show maintenance history</button></Link>
          <CarCell key={index} car={car} />
        </div>
      ))}
      {/* {cars.map((car)=> car)} */}
    </div>
  );
};

export default AdminVehicles;
