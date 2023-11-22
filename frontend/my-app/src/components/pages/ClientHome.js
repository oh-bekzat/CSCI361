import React, { useState, useEffect } from 'react';
import './ClientRequest.css';
import axios from 'axios';

const ClientHome = () => {
const [assignedTasks, setAssignedTasks] = useState([]);
const [selectedTask, setSelectedTask] = useState(null);
const [driverData, setDriverData] = useState(null); // State to store driver data
const [vehicleData, setVehicleData] = useState(null); // State to store vehicle data
const [rating, setRating] = useState(null);
const [isSubmitted, setIsSubmitted] = useState(false);
const user_id = localStorage.getItem("clientId");

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/routes/requested/${user_id}`);
      const sortedTasks = response.data.routes.sort((a, b) => {
      const statusOrder = { 'started': 0, 'assigned': 1, 'awaiting': 2, 'completed': 3 };
      return statusOrder[a.status] - statusOrder[b.status];
    });
      
    setAssignedTasks(sortedTasks);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  fetchData();
}, []);

const fetchDriverData = async (task) => {
  console.log(task)
  if (task && task.driver_id) {
    try {
      const response = await axios.get(`http://localhost:3001/users/${task.driver_id}`);
      setDriverData(response.data); // Assuming the response has driver_name and driver_phone
      console.log("DriverData:", response.data)
    } catch (error) {
      console.error('Error fetching driver data:', error);
    }
  }
};

const fetchVehicleData = async (task) => {
  setIsSubmitted(true);
  console.log(task)
  if (task && task.vehicle_id) {
    try {
      const response = await axios.get(`http://localhost:3001/vehicles/${task.vehicle_id}`);
      setVehicleData(response.data); // Assuming the response has driver_name and driver_phone
      console.log("VehicleData:", response.data)
    } catch (error) {
      console.error('Error fetching vehicle data:', error);
    }
  }
};

const handleRatingChange = (e) => {
  const inputValue = e.target.value;
  const parsedValue = parseFloat(inputValue);

  if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 5) {
    // Do something with the valid numeric value, for example, setRating(parsedValue)
    setRating(parsedValue);
  } else {
    // Handle invalid input, for example, show an error message
    console.error("Invalid input. Please select a number between 0 and 5.");
  }
};

const handleRatingSubmit = async () => {
  if (!selectedTask) {
    console.error('No task selected');
    return;
  }

  try {
    const { driver_id } = selectedTask;

    const response = await axios.put(`http://localhost:3001/routes/rate/${driver_id}`, {
      newRating: rating,
      routeId: selectedTask.route_id
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




// Function to handle task selection
const handleTaskSelection = async (task) => {
  console.log("pressed");
  await setSelectedTask(task);
  fetchDriverData(task);
  fetchVehicleData(task);
  setRating(null); // Reset rating when a new task is selected
  setIsSubmitted(false); // Reset the submitted state
};

return (
  <div className="client-home-page">
    <div className="task-list">
      <ul>
        {Array.isArray(assignedTasks) && assignedTasks.map((task) => (
          <li key={task.id} onClick={() => handleTaskSelection(task)} style={{
            boxShadow:
              task.status === 'started'
                ? '0 0 3px rgba(237, 197, 63, 1)'
                : task.status === 'awaiting'
                ? '0 0 3px rgba(207, 53, 33, 1)' 
                : task.status === 'assigned'
                ? '0 0 3px rgba(33, 85, 207, 1)' 
                :'0 0 3px rgba(50, 168, 82, 1)',
          }}>
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
          {(selectedTask.status === 'assigned' || selectedTask.status === 'started' || selectedTask.status === 'completed') && driverData && vehicleData &&(
              <>
                <div>
                  <span className='body-14-bold'>Driver: </span> <span className='body-14'>{driverData.firstname} {driverData.lastname}</span>
                </div>
                <div>
                  <span className='body-14-bold'>Phone: </span> <span className='body-14'>{driverData.phone_number}</span>
                </div>
                <div>
                  <span className='body-14-bold'>License Plate: </span> <span className='body-14'>{vehicleData.license_plate}</span>
                </div>
                <div>
                  <span className='body-14-bold'>Model: </span> <span className='body-14'>{vehicleData.make} {vehicleData.model}</span>
                </div> 
              </>
            )}
            <div>
              <span className='body-14-bold'>Status: </span> <span className='body-14'>{selectedTask.status}</span>
          </div>
          {selectedTask.status === 'completed' && !isSubmitted &&(
                <div className="rating-dropdown">
                  {/* Add your dropdown component here */}
                  {/* For example, you can use a select element with options for ratings */}
                  <span className='body-14-bold'>Rate: </span>
                  <select onChange={handleRatingChange}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <button className="button-124" onClick={handleRatingSubmit}>Submit</button>
                </div>
              )}
              {isSubmitted && (
                <div className="submitted-rating">
                  <span className='body-14-bold'>Rating: </span>
                  <span className='body-14'>{rating}</span>
                </div>
                )}
        </>
      ) : (
        <div className='body-24'>Select a route to view details.</div>
      )}
    </div>
  </div>
);
};

export default ClientHome