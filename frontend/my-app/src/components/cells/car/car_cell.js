
import React, { useState, useEffect } from 'react';
import './car_cell.js'
import axios from 'axios';

const CarCell = ({ car }) => {
  const [isInAuction, setIsInAuction] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [finishTime, setFinishTime] = useState('')

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

  const generateReport = async (vehicleId) => {
    try {
      // Your API endpoint URL
      const apiUrl = `http://localhost:3001/reports/${vehicleId}`

      // Example data to send in the request body
      const requestData = {
        start_time: startTime,
        finish_time: finishTime,
      }

      // Make an Axios POST request
      const response = await axios.post(apiUrl, requestData, { responseType: 'arraybuffer' });

      // Log the response or handle it as needed
      const blob = new Blob([response.data], { type: 'application/pdf' });

    // Create a data URL from the Blob
    const url = URL.createObjectURL(blob);

    // Open the PDF in a new window
    window.open(url, '_blank');
  } catch (error) {
    console.error('Error generating report:', error);
  }
  }

  return (
    

    <div className="car-details">
      <div className="car-image">
        <img src={car.vehicle_image} alt={`${car.make} ${car.model}`} />
      </div>
      <div className="car-info-container">
        <div className="car-info">
          <div className="body-20-bold">{`${car.make} ${car.model} ${car.manufacture_year} y.`}</div>
          <div className="car-property">
            <div>
              <span className="label-14-bold">License Plate:</span>{' '}
              <span className="label-14">{car.license_plate}</span>
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
              <span className="label-14-bold">Manufacture Year:</span>{' '}
              <span className="label-14">{car.manufacture_year}</span>
            </div>
            {/* Add more properties as needed */}
          </div>
        </div>
        <div className="car-info">
          <div className="car-property">
            {/* Display additional car properties here */}
            <div>
              <span className="label-14-bold">Fuel Volume:</span>{' '}
              <span className="label-14">{car.fuel_volume}</span>
            </div>
            <div>
              <span className="label-14-bold">Tank Volume:</span>{' '}
              <span className="label-14">{car.tank_volume}</span>
            </div>
            <div>
              <span className="label-14-bold">Mileage:</span>{' '}
              <span className="label-14">{car.mileage}</span>
            </div>
            <div>
              <span className="label-14-bold">Capacity:</span>{' '}
              <span className="label-14">{car.capacity} passengers</span>
            </div>
            <div>
              <span className="label-14-bold">Last fueled date:</span>{' '}
              <span className="label-14">{car.last_fueled_date}</span>
            </div>
            <div>
              <span className="label-14-bold">Last maintained date:</span>{' '}
              <span className="label-14">{car.last_maintained_date}</span>
            </div>
            {/* Add more properties as needed */}
          </div>
        </div>
        <div className="button-container-car">
            {isInAuction ? (
              <div className="in-auction-label">In Auction</div>
            ) : (
              <div>
                <button className="button-124" onClick={handleAddToAuction}>
                  Add to Auction
                </button>
                <label>Start time:</label>
                <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                <label>Finish time:</label>
                <input type="datetime-local" value={finishTime} onChange={(e) => setFinishTime(e.target.value)} />
                <button className="reportButton" onClick={() => generateReport(car.license_plate)}>
                  Generate report
                </button>
              </div>
            )}
          </div>
      </div>
    </div>
  );
};

export default CarCell;
