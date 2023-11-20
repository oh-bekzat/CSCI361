import React, { useState, useEffect } from 'react';
import './ClientRequest.css';
import axios from 'axios';

const ClientRequest = ({clientId}) => {
  // Sample data for assigned tasks
//   const [assignedTasks, setAssignedTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null);

  const [assignedTasks, setAssignedTasks] = useState([
    { id: 1, title: 'Route 1', details: 'Details for Task 1', departure: 'Point A', arrival: 'Point B', status: 'Active', date: '11.11.2023', time:'13:00'},
    { id: 2, title: 'Route 2', details: 'Details for Task 2', departure: 'Point C', arrival: 'Point D', status: 'Finished', date: "21.12.2023", time:'20:00' }
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
    <div className="client-home-page">
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
              <span className='label-11-bold' style={{ marginLeft: '20px' }}>Point of arrival: </span> <span className='label-11'>{task.arrival}</span>
              </div>
              <div>
              <span className='label-11-bold' style={{ marginLeft: '20px' }}>Date: </span> <span className='label-11'>{task.date}</span>
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
                {selectedTask.status === 'Finished' && (
                  <div className="rating-dropdown">
                    {/* Add your dropdown component here */}
                    {/* For example, you can use a select element with options for ratings */}
                    <select>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
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

export default ClientRequest;