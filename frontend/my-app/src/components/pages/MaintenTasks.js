// MaintenTasks.js
import React, { useState, useEffect } from 'react';
import './MaintenTasks.css';
import axios from 'axios';

const MaintenTasks = ({ maintenId }) => {
  // Sample data for assigned tasks
  const [assignedTasks, setAssignedTasks] = useState([
    { id: 1, title: 'Task 1', details: 'Details for Task 1', vehicle: 'Hyundai Sonata 2021 y.', date: '20.11.2023', time: '12:00', issue: 'Lorum Ipsum', departure: 'Point A', arrival: 'Point B', status: 'Active', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 2, title: 'Task 2', details: 'Details for Task 2', vehicle: 'Toyota Camry 2022 y.', date: '21.11.2023', time: '22:00', issue: 'Lorum Ipsum', departure: 'Point A', arrival: 'Point B', status: 'Active', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  ]);
  // State to track the selected task
  const [selectedTask, setSelectedTask] = useState(null);

  // State for input values
  const [cost, setCost] = useState('');
  const [image, setImage] = useState(null);
  const [maintenanceDescription, setMaintenanceDescription] = useState('');

  // Function to handle task selection
  const handleTaskSelection = (task) => {
    setSelectedTask(task);
  };

  // Function to handle assigning the task
  const handleAssignTask = () => {
    // Implement your logic for assigning the task
    console.log('Task assigned:', selectedTask);
    console.log('Cost:', cost);
    console.log('Image:', image);
    console.log('Maintenance Description:', maintenanceDescription);
  };

  // Function to handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
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
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>Date: </span> <span className='label-11'>{task.date}</span>
              </div>
              <div>
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>Title: </span> <span className='label-11'>{task.title}</span>
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
              <span className='body-14-bold'>Title: </span> <span className='body-14'>{selectedTask.issue}</span>
            </div>
            <div>
              <span className='body-14-bold'>Vehicle: </span> <span className='body-14'>{selectedTask.vehicle}</span>
            </div>
            <div>
              <span className='body-14-bold'>Status: </span> <span className='body-14'>{selectedTask.status}</span>
            </div>
            <div>
              <span className='body-14-bold'>Description: </span> <span className='body-14'>{selectedTask.description}</span>
            </div>
            {/* Input Boxes */}
            <div>
              <label htmlFor="cost">Cost:</label>
              <input type="text" id="cost" value={cost} onChange={(e) => setCost(e.target.value)} />
            </div>
            <div>
              <label htmlFor="image">Image:</label>
              <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
            </div>
            <div>
              <label htmlFor="maintenanceDescription">Maintenance Description:</label>
              <textarea id="maintenanceDescription" value={maintenanceDescription} onChange={(e) => setMaintenanceDescription(e.target.value)} />
            </div>
            <div className="button-container">
              <button onClick={handleAssignTask}>Upload</button>
            </div>
          </>
        ) : (
          <div className='body-24'>Select a route to view details.</div>
        )}
      </div>
    </div>
  );
};

export default MaintenTasks;