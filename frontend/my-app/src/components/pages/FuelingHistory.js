import React, { useState, useEffect } from 'react';
import './FuelingHistory.css';
import axios from 'axios';

const FuelingHistory = ({}) => {
  // const [assignedTasks, setAssignedTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [fuelingDetail, setFuelingDetail] = useState(null);
  const fuelId = localStorage.getItem("fuelId");


  const [assignedTasks, setAssignedTasks] = useState([]);

  useEffect(() => {
    // Fetch data from the localhost:3001/get-routes endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/tasks/assigned/${fuelId}`);
        console.log(response.data);
        setAssignedTasks(response.data.taskDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  const fetchFueilngDetail = async (task) => {
    console.log(task);
    if (task && task.vehicle_id) {
      try {
        const response = await axios.get(`http://localhost:3001/tasks/fueling/${task.vehicle_id}`);
        const matchingFuelingDetail = response.data.FuellingDetail.find(
          (detail) => detail.task_id === task.task_id
        );
  
        setFuelingDetail
    (matchingFuelingDetail);
        console.log("fuelingDetail:", matchingFuelingDetail);
      } catch (error) {
        console.error('Error fetching fueling Detail data:', error);
      }
    }
  };
  

  // Function to handle task selection
  const handleTaskSelection = (task) => {
    console.log("Task selected:", task);
     setSelectedTask(task);
     fetchFueilngDetail(task);
    console.log("maint = ",fuelingDetail)
  };

  const filteredTasks = Array.isArray(assignedTasks) ? assignedTasks.filter((task) => task.status === 'completed') : [];

  const sortedTasks = filteredTasks.sort((a, b) => a.task_id - b.task_id);

  return (
    <div className="fueling-history">
      <div className="task-list">
        <ul>
          {Array.isArray(sortedTasks) && sortedTasks.map((task) => (
            <li key={task.task_id} onClick={() => handleTaskSelection(task)}>
              <div>
                <div className='body-20-bold'>fueling Task {task.task_id}</div>
              </div>
              <div>
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>Licence Plate: </span> <span className='label-11'>{task.vehicle_id}</span>
              </div>
              <div>
              <span className='label-11-bold' style={{ marginLeft: '20px' }}>fueling Date: </span> <span className='label-11'>{task.date.split("T")[0]}</span>
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
            <div className='body-24-bold'>fueling Task {selectedTask.task_id}</div>
          </div>
            <div>
                <span className='body-14-bold'>Licence Plate: </span> <span className='body-14'>{selectedTask.vehicle_id}</span>
            </div>
            <div>
                <span className='body-14-bold'>Fueling Date:  </span> <span className='body-14'>{selectedTask.date.split("T")[0]}</span>
            </div>
            <div>
                <span className='body-14-bold'>Fueling Cost: </span> <span className='body-14'>{fuelingDetail ? fuelingDetail.fuel_cost : 'N/A'}</span>
            </div>
            <div>
                <span className='body-14-bold'>Fueling Amount: </span> <span className='body-14'>{fuelingDetail ? fuelingDetail.fuel_amount : 'N/A'}</span>
            </div>
            <div>
                <span className='body-14-bold'>Gas Station Name: </span> <span className='body-14'>{fuelingDetail ? fuelingDetail.gas_station_name : 'N/A'}</span>
            </div>
            <div>
                <span className='body-14-bold'>Status:  </span> <span className='body-14'>{selectedTask.status}</span>
            </div>
            <div>
                <span className='body-14-bold'>Description: </span> <span className='body-14'>{fuelingDetail ? fuelingDetail.description : 'N/A'}</span>
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