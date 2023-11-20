
import React, { useState, useEffect } from 'react';
import './car_cell.js'

const CarCell = ({ car }) => {
  const [isInAuction, setIsInAuction] = useState(false);

  useEffect(() => {
    // Fetch data from the database to check if the car is in the auction
    const fetchData = async () => {
      try {
        // Replace this with your actual fetch logic
        const response = await fetch(`/checkAuctionStatus/${car.vehicle_ID}`);
        const data = await response.json();
        setIsInAuction(data.isInAuction);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [car.vehicle_ID]);

  const handleAddToAuction = async () => {
    try {
      // Perform the action to add the car to the auction
      // Replace this with your actual fetch logic
      await fetch(`/addToAuction/${car.vehicle_ID}`, {
        method: 'POST',
      });

      // Update the state to indicate that the car is now in the auction
      setIsInAuction(true);
    } catch (error) {
      console.error('Error adding to auction:', error);
    }
  };
  return (
    

    <div className="car-details">
      <div className="car-image">
        <img src={require('../../assets/car_example.png')} alt={`${car.make} ${car.model}`} />
      </div>
      <div className="car-info-container">
        <div className="car-info">
          <div className="body-20-bold">{`${car.make} ${car.model} ${car.year} y.`}</div>
          <div className="car-property">
            <div>
              <span className="label-14-bold">id:</span>{' '}
              <span className="label-14">{car.id}</span>
            </div>
            <div>
              <span className="label-14-bold">Make:</span>{' '}
              <span className="label-14">{car.make}</span>
            </div>
            <div>
              <span className="label-14-bold">Model:</span>{' '}
              <span className="label-14">{car.model}</span>
            </div>
            <div>
              <span className="label-14-bold">Year:</span>{' '}
              <span className="label-14">{car.year}</span>
            </div>
            {/* Add more properties as needed */}
          </div>
        </div>
        <div className="car-info">
          <div className="car-property">
            {/* Display additional car properties here */}
            <div>
              <span className="label-14-bold">Fuel Volume:</span>{' '}
              <span className="label-14">{car.fuelVolume}</span>
            </div>
            <div>
              <span className="label-14-bold">Tank Volume:</span>{' '}
              <span className="label-14">{car.tankVolume}</span>
            </div>
            <div>
              <span className="label-14-bold">Mileage:</span>{' '}
              <span className="label-14">{car.mileage}</span>
            </div>
            {/* Add more properties as needed */}
          </div>
        </div>
        <div className="button-container-car">
            {isInAuction ? (
              <div className="in-auction-label">In Auction</div>
            ) : (
              <button className="button-124" onClick={handleAddToAuction}>
                Add to Auction
              </button>
            )}
          </div>
      </div>
    </div>
  );
};

export default CarCell;
