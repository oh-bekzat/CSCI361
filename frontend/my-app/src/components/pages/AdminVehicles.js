import React, { useState, useEffect } from 'react';
import '../../components/cells/car/car_cell.css';
import axios from 'axios';
import CarCell from '../../components/cells/car/car_cell';
import { Link } from 'react-router-dom';

const AdminVehicles = () => {
  
  const [cars, setCars] = useState([]);
  const [auctionedCars, setAuctionedCars] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:3001/vehicles');
        const auctionedResponse = await axios.get('http://localhost:3001/auction');
        console.log(auctionedResponse.data.auctions);
        setCars(response.data);
        setAuctionedCars(auctionedResponse.data.auctions);
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

      {cars.map((car, index) => {
        // Check if the car is in the auctionedCars array
        const isInAuction = auctionedCars.some((auction) => auction.auctioned_vehicle_id === car.license_plate);
        console.log(isInAuction, car.license_plate)

        return (
          <React.Fragment key={index}>
            <CarCell car={car} isAuctioned={isInAuction} />
              <>
                <Link to={`/admin/vehicles/fueling/${car.license_plate}`}>
                  <button className="button-124">Show fueling history</button>
                </Link>
                <Link to={`/admin/vehicles/maintenance/${car.license_plate}`}>
                  <button className="button-124">Show maintenance history</button>
                </Link>
              </>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AdminVehicles;
