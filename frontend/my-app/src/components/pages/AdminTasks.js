// AdminTasks.js
import React, { useState, useEffect } from 'react';
import './AdminTasks.css';
import axios from 'axios';

const AdminTasks = ({driverId}) => {
  // Sample data for assigned tasks
//   const [assignedTasks, setAssignedTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null);

  const [assignedTasks, setAssignedTasks] = useState([
    { id: 1, title: 'Route 1', details: 'Details for Task 1', date: '20.11.2023', time: '10:00', departure: 'Point A', arrival: 'Point B', status: 'Active', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    { id: 2, title: 'Route 2', details: 'Details for Task 2', date: '21.11.2023', time: '13:00', departure: 'Point A', arrival: 'Point B', status: 'Active', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
  ]);
  // State to track the selected task
  const [selectedTask, setSelectedTask] = useState(null);

    // useEffect(() => {
    // // Fetch data from the localhost:3001/get-routes endpoint
    //     const fetchData = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:3001/get-routes');
    //         setAssignedTasks(response.data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    //     };
    // fetchData();
    // }, []);

  // Function to handle task selection
  const handleTaskSelection = (task) => {
    setSelectedTask(task);
  };

  // Function to handle assigning the task
  const handleAssignTask = () => {
    // Implement your logic for assigning the task
    console.log('Task assigned:', selectedTask);
  };


  return (
    <div className="driver-home-page">
      <div className="task-list">
        <ul>
          {assignedTasks.map((task) => (
            <li key={task.id} onClick={() => handleTaskSelection(task)}>
              <div>
                <div className='body-20-bold'>{task.title}</div>
              </div>
              <div>
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>Point of departure: </span> <span className='label-11'>{task.departure}</span>
              </div>
              <div>
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>Point of arrival: </span> <span className='label-11'>{task.departure}</span>
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
            <div className='body-24-bold'>{selectedTask.title}</div>
          </div>
            <div>
                <span className='body-14-bold'>Date: </span> <span className='body-14'>{selectedTask.date}</span>
            </div>
            <div>
                <span className='body-14-bold'>Time: </span> <span className='body-14'>{selectedTask.time}</span>
            </div>
            <div>
                <span className='body-14-bold'>Point of departure: </span> <span className='body-14'>{selectedTask.departure}</span>
            </div>
            <div>
                <span className='body-14-bold'>Point of arrival: </span> <span className='body-14'>{selectedTask.arrival}</span>
            </div>
            <div>
                <span className='body-14-bold'>Status: </span> <span className='body-14'>{selectedTask.status}</span>
            </div>
            <div>
                <span className='body-14-bold'>Description: </span> <span className='body-14'>{selectedTask.description}</span>
            </div>
            <div className="button-container">
              <button onClick={handleAssignTask}>Assign Task</button>
            </div>
          </>
        ) : (
          <div className='body-24'>Select a route to view details.</div>
        )}
      </div>
    </div>
  );
};

export default AdminTasks;
