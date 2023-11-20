// DriverHomePage.js
import React, { useState, useEffect } from 'react';
import './DriverHome.css';
import axios from 'axios';

const DriverHomePage = () => {
  // Sample data for assigned tasks
  const [assignedTasks, setAssignedTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const user_id = localStorage.getItem("driverId");

  useEffect(() => {
    // Fetch data from the localhost:3001/get-routes endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/routes/assigned/${user_id}`);
        console.log(response.data);
        setAssignedTasks(response.data.routes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Function to handle task selection
  const handleTaskSelection = (task) => {
    setSelectedTask(task);
  };

  const handleStartTask = () => {
    // Logic to handle starting the task
    console.log('Task started:', selectedTask);
  };

  const handleDeclineTask = () => {
    // Logic to handle declining the task
    console.log('Task declined:', selectedTask);
  };
  const handleFinishTask = () => {
    // Logic to handle finishing the task
    console.log('Task finished:', selectedTask);
  };

  return (
    <div className="driver-home-page">
      <div className="task-list">
        <ul>
          {assignedTasks.map((task) => (
            <li key={task.id} onClick={() => handleTaskSelection(task)}>
              <div>
                <div className='body-20-bold'>Route {task.route_id}</div>
              </div>
              <div>
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>Point of departure: </span> <span className='label-11'>{task.start_point}</span>
              </div>
              <div>
              <span className='label-11-bold' style={{ marginLeft: '20px' }}>Point of arrival: </span> <span className='label-11'>{task.finish_point}</span>
              </div>
              <div>
              <span className='label-11-bold' style={{ marginLeft: '20px' }}>Status: </span> <span className='label-11'>{task.status}</span>
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
            <div className='body-24-bold'>Route {selectedTask.route_id}</div>
          </div>
            {/* <div>
                <span className='body-14-bold'>Date: </span> <span className='body-14'>{selectedTask.departure}</span>
            </div>
            <div>
                <span className='body-14-bold'>Time: </span> <span className='body-14'>{selectedTask.departure}</span>
            </div> */}
            <div>
                <span className='body-14-bold'>Point of departure: </span> <span className='body-14'>{selectedTask.start_point}</span>
            </div>
            <div>
                <span className='body-14-bold'>Point of arrival: </span> <span className='body-14'>{selectedTask.finish_point}</span>
            </div>
            <div>
                <span className='body-14-bold'>Status: </span> <span className='body-14'>{selectedTask.status}</span>
            </div>
            <div className="button-container">
              {selectedTask.status === 'Active' ? (
                <button className='button-264' style={{ backgroundColor: '#4a92f7' }} onClick={handleFinishTask}>Finish Task</button>
              ) : (
                <div>
                <button className='button-264' style={{ backgroundColor: '#50C878' }} onClick={handleStartTask}>Start Task</button>
                <button className='button-264' style={{ backgroundColor: '#c94040' }} onClick={handleDeclineTask}>Decline Task</button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className='body-24'>Select a route to view details.</div>
        )}
      </div>
    </div>
  );
};

export default DriverHomePage;
