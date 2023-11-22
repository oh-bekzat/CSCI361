// VehicleInfoPage.js
import React, { useState } from 'react';
import './DriverVehicleInfo.css';
import axios from 'axios';

const VehicleInfo = ({ vehicle_id }) => {
  const [assignedTasks] = useState([
    {
      id: 1,
      carId: '202030300',
      title: 'Hyundai Sonata 2021 y.',
      model: 'Sonata',
      Make: 'Hyundai',
      year: '2021',
      color: 'white',
      plate: '777 AAA 01',
      capacity: '5 passengers',
      volume: '60 lites',
      mileage: '24990',
    },
  ]);

  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskSelection = (task) => {
    setSelectedTask(task);
  };

  return (
    <div className="auction-page">
      <div className="car-details">
        <ul>
          {assignedTasks.map((task) => (
            <li key={task.id} onClick={() => handleTaskSelection(task)}>
              <div className="car-info-container">
                <div className="car-image">
                  <img src={require('../assets/car_example.png')} alt="Car" />
                </div>
                <div className="car-info">
                  <div className="body-20-bold">{task.title}</div>
                  <div className="car-property">
                    <div>
                      <span className="body-14-bold">ID:</span>{' '}
                      <span className="body-14">{task.carId}</span>
                    </div>
                    <div>
                      <span className="label-14-bold">Make:</span>{' '}
                      <span className="body-14">{task.Make}</span>
                    </div>
                    <div>
                      <span className="label-14-bold">Model:</span>{' '}
                      <span className="body-14">{task.model}</span>
                    </div>
                    <div>
                      <span className="label-14-bold">Year:</span>{' '}
                      <span className="body-14">{task.year}</span>
                    </div>
                    <div>
                      <span className="label-14-bold">License Plate:</span>{' '}
                      <span className="body-14">{task.plate}</span>
                    </div>
                    <div>
                      <span className="label-14-bold">Capacity:</span>{' '}
                      <span className="body-14">{task.capacity}</span>
                    </div>
                    <div>
                      <span className="label-14-bold">Tank Volume:</span>{' '}
                      <span className="body-14">{task.volume}</span>
                    </div>
                    <div>
                      <span className="label-14-bold">Mileage:</span>{' '}
                      <span className="body-14">{task.mileage}</span>
                    </div>
                    <div>
                      <span className="label-14-bold">Color:</span>{' '}
                      <span className="body-14">{task.color}</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VehicleInfo;
