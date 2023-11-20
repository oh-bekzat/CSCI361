import React, { useState, useEffect } from 'react';
import './Auction.css';
import axios from 'axios';

const AuctionPage = ({ driverId }) => {
  const [auctionCars, setAuctionCars] = useState(null);

  return (
    <div className="auction-page">
      <div className="car-details">
        <div className="car-image">
          <img src={require('../assets/car_example.png')} alt="Car"></img>
        </div>
        <div className="car-info-container">
          <div className="car-info">
            <div className="body-20-bold">Hyundai Sonata 2021 y.</div>
            <div className="car-property">
              <div>
                <span className="label-14-bold">id:</span>{' '}
                <span className="label-14">202030300</span>
              </div>
              <div>
                <span className="label-14-bold">Make:</span>{' '}
                <span className="label-14">Hyundai</span>
              </div>
              <div>
                <span className="label-14-bold">Model:</span>{' '}
                <span className="label-14">Sonata</span>
              </div>
              <div>
                <span className="label-14-bold">Year:</span>{' '}
                <span className="label-14">2021</span>
              </div>
              <div>
                <span className="label-14-bold">License Plate:</span>{' '}
                <span className="label-14">777 AAA 01</span>
              </div>
              <div>
                <span className="label-14-bold">Capacity:</span>{' '}
                <span className="label-14">5 passengers</span>
              </div>
              <div>
                <span className="label-14-bold">Status:</span>{' '}
                <span className="label-14">Available</span>
              </div>
            </div>
          </div>
          <div className="car-info">
            <div className="car-property">
      
              <div>
                <span className="label-14-bold">Tank Volume:</span>{' '}
                <span className="label-14">60 liters</span>
              </div>
              <div>
                <span className="label-14-bold">Mileage:</span>{' '}
                <span className="label-14">10,000 miles</span>
              </div>
              <div>
                <span className="label-14-bold">Cost:</span>{' '}
                <span className="label-14">2023-11-20</span>
              </div>
              <div>
                <span className="label-14-bold">Contact:</span>{' '}
                <span className="label-14" style={{ textDecoration: 'underline' }}>+7771-555-11-22</span>
              </div>

              <div>
                <span className="label-14-bold">Description:</span>{' '}
                <span className="label-14" >Alloy wheels, tinted windows, wind deflectors, daytime running lights, leather seats, combination upholstery, audio system, Bluetooth, MP3, USB, climate control, power steering (ГУР), ABS, SRS, alarm system, central locking, cruise control, heated seats, rearview camera, tax paid, passed technical inspection, no additional investment required.</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionPage;