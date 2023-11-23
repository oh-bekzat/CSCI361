import React, { useState, useEffect } from 'react';
import '../../components/cells/car/car_cell.css';
import axios from 'axios';
import CarCell from '../../components/cells/car/car_cell';
import { Link } from 'react-router-dom';

const AuctionPage = () => {
  
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all vehicles
        const vehiclesResponse = await axios.get('http://localhost:3001/vehicles');
        const allCars = vehiclesResponse.data;
  
        // Fetch auctioned vehicles
        const auctionedResponse = await axios.get('http://localhost:3001/auction');
        const auctionedCarIds = auctionedResponse.data.auctions.map((auction) => auction.vehicleId);
  
        // Filter vehicles to select only auctioned ones
        const auctionedCars = allCars.filter((car) => auctionedCarIds.includes(car.id));
  
        setCars(auctionedCars);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div className="auction-page">
      {cars.map((car, index) => (
        <CarCell key={index} car={car} page={'auction'} />
      ))}
    </div>
  );
};

export default AuctionPage;
