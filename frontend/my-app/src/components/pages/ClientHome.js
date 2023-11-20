import React, { useState, useEffect } from 'react';
import './ClientRequest.css';
import axios from 'axios';

const ClientHome = ({clientId}) => {
  const [assignedTasks, setAssignedTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const user_id = localStorage.getItem("clientId");

  useEffect(() => {
    // Fetch data from the localhost:3001/get-routes endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/routes/requested/${user_id}`);
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

  return (
    <div className="client-home-page">
      <div className="task-list">
        <ul>
          {Array.isArray(assignedTasks) && assignedTasks.map((task) => (
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
            <div>
                <span className='body-14-bold'>Time: </span> <span className='body-14'>{selectedTask.time}</span>
            </div>
            <div>
                <span className='body-14-bold'>Point of departure: </span> <span className='body-14'>{selectedTask.start_point}</span>
            </div>
            <div>
                <span className='body-14-bold'>Point of arrival: </span> <span className='body-14'>{selectedTask.finish_point}</span>
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

export default ClientHome