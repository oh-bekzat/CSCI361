import React, { useState, useEffect } from 'react';
import './FuelingHistory.css';
import axios from 'axios';

const FuelingHistory = ({fuelling_id}) => {
  // const [assignedTasks, setAssignedTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const fuelingId = localStorage.getItem("fuelling_id");


  const [assignedTasks, setAssignedTasks] = useState([
    { id: 1, title: 'Fueling Task 1', details: 'Details for Task 1', vehicleId: "A125FH",fuelling_date : '11.02.2023', fuel_cost:"12000 kzt", gas_station_name:'Sinoil' },
    { id: 2, title: 'Fueling Task 2', details: 'Details for Task 2', vehicleId: "S776JKN",fuelling_date : '21.11.2023', fuel_cost:"7500 kzt", gas_station_name:'Gelios'}
  ]);

  // useEffect(() => {
  //   // Fetch data from the localhost:3001/get-routes endpoint
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:3001/fuelling/${fuelingId}`);
  //       console.log(response.data);
  //       setAssignedTasks(response.data.routes);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // Function to handle task selection
  const handleTaskSelection = (task) => {
    setSelectedTask(task);
  };

  return (
    <div className="fueling-history">
      <div className="task-list">
        <ul>
          {Array.isArray(assignedTasks) && assignedTasks.map((task) => (
            <li key={task.id} onClick={() => handleTaskSelection(task)}>
              <div>
                <div className='body-20-bold'>Fueling Task {task.fuelingId}</div>
              </div>
              <div>
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>Licence Plate: </span> <span className='label-11'>{task.vehicleId}</span>
              </div>
              <div>
              <span className='label-11-bold' style={{ marginLeft: '20px' }}>Fueling Date: </span> <span className='label-11'>{task.fuelling_date}</span>
              </div>
              <div>
              <span className='label-11-bold' style={{ marginLeft: '20px' }}>Fueling Cost: </span> <span className='label-11'>{task.fuel_cost}</span>
              </div>
              <div>
              <span className='label-11-bold' style={{ marginLeft: '20px' }}>Gas Station Name: </span> <span className='label-11'>{task.gas_station_name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section - Detailed Information */}
      <div className="task-details">
        {selectedTask ? (
            <>
          <div>
            <div className='body-24-bold'>Fueling Task {selectedTask.fuelingId}</div>
          </div>
            <div>
                <span className='body-14-bold'>Licence Plate: </span> <span className='body-14'>{selectedTask.vehicleId}</span>
            </div>
            <div>
                <span className='body-14-bold'>Fueling Date:  </span> <span className='body-14'>{selectedTask.fuelling_date}</span>
            </div>
            <div>
                <span className='body-14-bold'>Fueling Cost: </span> <span className='body-14'>{selectedTask.fuel_cost}</span>
            </div>
            <div>
                <span className='body-14-bold'>Gas Station Name: </span> <span className='body-14'>{selectedTask.gas_station_name}</span>
            </div>
          </>
        ) : (
          <div className='body-24'>Select a fueling task to view details.</div>
        )}
      </div>
    </div>
  );
};

export default FuelingHistory