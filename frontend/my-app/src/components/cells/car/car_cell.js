import React from 'react';

const CarCell = ({ car }) => {
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
      </div>
    </div>
  );
};

export default CarCell;
