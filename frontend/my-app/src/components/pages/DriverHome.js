// DriverHomePage.js
import React, { useState, useEffect } from 'react';
import './DriverHome.css';
import axios from 'axios';

const DriverHomePage = () => {
  // Sample data for assigned tasks
//   const [assignedTasks, setAssignedTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null);

  const [assignedTasks, setAssignedTasks] = useState([
    { id: 1, title: 'Route 1', details: 'Details for Task 1', departure: 'Point A' },
    { id: 2, title: 'Route 2', details: 'Details for Task 2' }
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

  return (
    <div className="driver-home-page">
      <div className="task-list">
        <h2 className='body-24-bold'>Tasks</h2>
        <ul>
          {assignedTasks.map((task) => (
            <li key={task.id} onClick={() => handleTaskSelection(task)}>
              <div>
                <div className='body-20-bold'>{task.title}</div>
              </div>
              <div>
              <div>
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>Point of departure: </span> <span className='label-11'>{task.departure}</span>
            </div>
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
          <div>
            <div className='body-24-bold'>{selectedTask.title}</div>
            <p>{selectedTask.details}</p>
          </div>
        ) : (
          <div className='body-24'>Select a task to view details.</div>
        )}
      </div>
    </div>
  );
};

export default DriverHomePage;
