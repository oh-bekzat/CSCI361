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

  const handleStartTask = async () => {
    if (!selectedTask) {
      console.error('No task selected');
      return;
    }

    try {
      const { route_id, driver_id } = selectedTask;
      const start_time = new Date(); // Assuming you want to use the current time as the start time
      console.log(start_time);

      const response = await axios.put(`http://localhost:3001/routes/start/${route_id}`, {
        driver_id,
        start_time,
      });
      const updatedTask = response.data;

      setAssignedTasks((prevTasks) =>
        prevTasks.map((task) => (task.route_id === updatedTask.route_id ? updatedTask : task))
      );

      console.log('Task started:', updatedTask);
    } catch (error) {
      console.error('Error starting task:', error);
    }
  };

  const handleDeclineTask = () => {
    // Logic to handle declining the task
    console.log('Task declined:', selectedTask);
  };

  const handleFinishTask = async () => {
    if (!selectedTask) {
      console.error('No task selected');
      return;
    }

    try {
      const { route_id, driver_id } = selectedTask;
      const finish_time = new Date(); // Assuming you want to use the current time as the start time
      console.log(finish_time);

      const response = await axios.put(`http://localhost:3001/routes/finish/${route_id}`, {
        driver_id,
        finish_time,
      });
      const updatedTask = response.data;

      setAssignedTasks((prevTasks) =>
        prevTasks.map((task) => (task.route_id === updatedTask.route_id ? updatedTask : task))
      );

      console.log('Task started:', updatedTask);
    } catch (error) {
      console.error('Error starting task:', error);
    }
  };

  const sortedTasks = [...assignedTasks].sort((a, b) => {
    if (a.status === 'started' && b.status !== 'started') {
      return -1;
    } else if (b.status === 'started' && a.status !== 'started') {
      return 1;
    } else {
      return 0;
    }
  });

  const filteredTasks = sortedTasks.filter((task) => task.status !== 'completed');

  return (
    <div className="driver-home-page">
      <div className="task-list">
        <ul>
          {Array.isArray(filteredTasks) && filteredTasks.map((task) => (
            <li style={{
              boxShadow:
                task.status === 'assigned'
                  ? '0 0 3px rgba(237, 197, 63, 1)' // Yellow for assigned
                  : task.status === 'started'
                  ? '0 0 3px rgba(207, 53, 33, 1)' // Red for started
                  : '0 0 3px rgba(50, 168, 82, 1)', // Default color for other statuses
            }} key={task.route_id} onClick={() => handleTaskSelection(task)}>
              <div>
                <div className='body-20-bold'>Route {task.route_id}</div>
              </div>
              <div>
                  <span className='label-11-bold' style={{ marginLeft: '20px' }}>Requested date and time: </span> <span className='label-11'>{task.requested_date}, {task.requested_time}</span>
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
            <div>
                <span className='body-14-bold'>Requested date and time: </span> <span className='body-14'>{selectedTask.requested_date}, {selectedTask.requested_time}</span>
            </div>
            <div>
                <span className='body-14-bold'>Point of departure: </span> <span className='body-14'>{selectedTask.start_point}</span>
            </div>
            <div>
                <span className='body-14-bold'>Point of arrival: </span> <span className='body-14'>{selectedTask.finish_point}</span>
            </div>
            <div>
                <span className='body-14-bold'>Vehicle: </span> <span className='body-14'>{selectedTask.vehicle_id}</span>
            </div>
            <div>
                <span className='body-14-bold'>Status: </span> <span className='body-14'>{selectedTask.status}</span>
            </div>
            <div className="button-container">
              {selectedTask.status === 'started' ? (
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
