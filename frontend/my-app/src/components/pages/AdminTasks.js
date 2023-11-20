// AdminTasks.js
import React, { useState, useEffect } from 'react';
import './AdminTasks.css';
import axios from 'axios';

import { Link } from 'react-router-dom';

const AdminTasks = ({UserId}) => {
  // Sample data for assigned tasks
//   const [assignedTasks, setAssignedTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null);



// user_id, maintenance_description, maintenance_date, maintenance_cost, images
  const [assignedTasks, setAssignedTasks] = useState([
    { id: 1, title: 'Task 1', details: 'Details for Task 1', date: '13.11.2023', time: '10:00',  description: 'Fuel this car until next week', type : 'Fueling',assignedPerson:'John Doe', vehicleId:'P198JJN', status:'active'},
    { id: 2, title: 'Task 2', details: 'Details for Task 2', date: '24.11.2023', time: '13:00', description: 'Requires ordering new objects' ,type : 'Maintence',assignedPerson:'Emily Thompson',  vehicleId:'T129NNN', status:'active'},
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
    
    <div className="driver-home-page-button">
      <Link to="/">
        <button className="button-124">Add Task</button>
      </Link>
      <div className="driver-home-page">
      <div className="task-list">
        <ul>
          {assignedTasks.map((task) => (
            <li key={task.id} onClick={() => handleTaskSelection(task)}>
              <div>
                <div className='body-20-bold'>{task.title}</div>
              </div>
              <div>
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>Type </span> <span className='label-11'>{task.type}</span>
              </div>
              <div>
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>Date: </span> <span className='label-11'>{task.date}</span>
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
                <span className='body-14-bold'>Vehicle: </span> <span className='body-14'>{selectedTask.vehicleId}</span>
            </div>
            
            <div>
                <span className='body-14-bold'>Status: </span> <span className='body-14'>{selectedTask.status}</span>
            </div>
            <div>
                <span className='body-14-bold'>Assigned Person: </span> <span className='body-14'>{selectedTask.assignedPerson}</span>
            </div>
            <div>
                <span className='body-14-bold'>Description: </span> <span className='body-14'>{selectedTask.description}</span>
            </div>
            
          </>
        ) : (
          <div className='body-24'>Select a route to view details.</div>
        )}
      </div>
    </div>
    </div>
  );
};

export default AdminTasks;
