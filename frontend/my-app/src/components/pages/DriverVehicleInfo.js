// VehicleInfoPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VehicleInfo = () => {
  const [vehicleInfo, setVehicleInfo] = useState(null);
  // const [isStarted, setIsStarted] = useState(false);
  const user_id = localStorage.getItem("driverId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/routes/assigned/${user_id}`);
        const startedRoute = response.data.routes.filter((vehicleInfo) => vehicleInfo.status === 'started');
        if (startedRoute) {
          // setIsStarted(true);
          const vehicleId = startedRoute[0].vehicle_id;
          console.log(vehicleId)
          const response2 = await axios.get(`http://localhost:3001/vehicles/${vehicleId}`);
          console.log(response2.data);
          setVehicleInfo(response2.data);
        } 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="auction-page">
      <div className="car-details">
      { vehicleInfo ? (
        <div className="car-info-container">
          <div className="car-image">
              {vehicleInfo && <img src={vehicleInfo.vehicle_image} alt="Car" />}
          </div>
                <div className="car-info" style={{ marginLeft: '20px' }}>
                  <div className="body-20-bold">{vehicleInfo.make} {vehicleInfo.model}</div>
                  <div className="car-property">
                    <div>
                      <span className="label-14-bold">Make:</span>{' '}
                      <span className="body-14">{vehicleInfo.make}</span>
                    </div>
                    <div>
                      <span className="label-14-bold">Model:</span>{' '}
                      <span className="body-14">{vehicleInfo.model}</span>
                    </div>
                    <div>
                      <span className="label-14-bold">Year:</span>{' '}
                      <span className="body-14">{vehicleInfo.manufacture_year }</span>
                    </div>
                    <div>
                      <span className="label-14-bold">License Plate:</span>{' '}
                      <span className="body-14">{vehicleInfo.license_plate}</span>
                    </div>
                    <div>
                      <span className="label-14-bold">Capacity:</span>{' '}
                      <span className="body-14">{vehicleInfo.capacity} passengers</span>
                    </div>
                    <div>
                      <span className="label-14-bold">Tank Volume:</span>{' '}
                      <span className="body-14">{vehicleInfo.tank_volume}</span>
                    </div>
                    <div>
                      <span className="label-14-bold">Mileage:</span>{' '}
                      <span className="body-14">{vehicleInfo.mileage}</span>
                    </div>
                    <div>
                      <span className="label-14-bold">Last maintained date:</span>{' '}
                      <span className="body-14">{vehicleInfo.last_maintained_date}</span>
                    </div>
                    <div>
                      <span className="label-14-bold">Last fueled date:</span>{' '}
                      <span className="body-14">{vehicleInfo.last_fueled_date}</span>
                    </div>
                  </div>
                </div>
              </div>)  : (
        <div>No route started</div>
      )}
      </div>
    </div>
  );
};

export default VehicleInfo;
