// MaintenTasks.js
import React, { useState, useEffect } from 'react';
import './MaintenTasks.css';
import axios from 'axios';

const MaintenTasks = ({ }) => {
  const [assignedTasks, setAssignedTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [image, setImage] = useState(null);
  const [maintenanceDescription, setMaintenanceDescription] = useState(''); 
  const user_id = localStorage.getItem("maintenId");
  const [vehicleData, setVehicleData] = useState(null); 
  const [dateTime, setDateTime] = useState('');
  const [maintenanceCost, setMaintenanceCost] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/tasks/assigned/${user_id}`);
        setAssignedTasks(response.data.taskDetails);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);


  const fetchVehicleData = async (task) => {
    
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

  
  const handleSubmit = async () => {
    try {
      // Ensure that a task is selected
      if (!selectedTask) {
        console.error('No task selected for assignment.');
        return;
      }
  
      // Prepare data for the POST request
      const assignmentData = {
        task_id: selectedTask.task_id, // You may need to adjust this based on your task structure
        vehicle_id: selectedTask.vehicle_id,
        user_id: selectedTask.assignee_id,
        description: maintenanceDescription,
        vehicle_id: selectedTask.vehicle_id,
        maintenance_date: dateTime,
        maintenance_cost: maintenanceCost,
      };
  
      // Create a FormData object for handling file uploads
      // const formData = new FormData();
      // formData.append('image', image);
  
      // // Append other assignment data to FormData
      // Object.entries(assignmentData).forEach(([key, value]) => {
      //   formData.append(key, value);
      // });
  
      // Make a POST request to add assignment details
      const response = await axios.post('http://localhost:3001/tasks/maintenance/${selectedTask.task_id}', assignmentData);
  
      // Check if the assignment was successful
      if (response.status === 201) {
        console.log('Task assigned successfully:', response.data);
  
        // Clear input fields and selected task after assignment
        setMaintenanceCost('');
        setImage(null);
        setDateTime('');
        setMaintenanceDescription('');
        setSelectedTask(null);
  
        // Optionally, you can fetch updated assigned tasks from the server
        // to reflect changes in the UI.
        // Example: fetchTasks();
      } else {
        console.error('Error assigning task:', response.data);
      }
    } catch (error) {
      console.error('Error assigning task:', error);
    }
  };
  

  // Function to handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleTaskSelection = (task) => {
    setSelectedTask(task);
    fetchVehicleData(task);
  };

  return (
    <div className="driver-home-page">
      <div className="task-list">
        <ul>
          {assignedTasks.map((task) => (
            <li key={task.id} onClick={() => handleTaskSelection(task)}>
              <div>
                <div className='body-20-bold'>Maintenance Task {task.task_id}</div>
              </div>
              <div>
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>Date: </span> <span className='label-11'>{task.date.split('T')[0]}</span>
              </div>
              <div>
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>License Plate: </span> <span className='label-11'>{task.vehicle_id}</span>
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
              <span className='body-14-bold'>Date: </span> <span className='body-14'>{selectedTask.date.split('T')[0]}</span>
            </div>
            <div>
              <span className='body-14-bold'>Time: </span> <span className='body-14'>{selectedTask.date.split('T')[1].split('.')[0]}</span>
            </div>
            <div>
              <span className='body-14-bold'>Title: </span> <span className='body-14'>{selectedTask.description}</span>
            </div>
            <div>
              <span className='body-14-bold'>Vehicle Model: </span> <span className='body-14'>{vehicleData && `${vehicleData.make} ${vehicleData.model}`}</span>
            </div>
            <div>
              <span className='body-14-bold'>Title: </span> <span className='body-14'>{selectedTask.description}</span>
            </div>
            <div>
              <span className='body-14-bold'>License Plate: </span> <span className='body-14'>{selectedTask.vehicle_id}</span>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="maintenanceCost">Maintenance Cost:</label>
                <input
                  type="int"
                  id="maintenanceCost"
                  name="maintenanceCost"
                  value={maintenanceCost}
                  onChange={(e) => setMaintenanceCost(e.target.value)}
                  required
                />
                <label htmlFor="dateTime">Date and Time:</label>
                  <input
                    type="datetime-local"  // Use "datetime-local" type for date and time input
                    id="dateTime"
                    name="dateTime"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    required
                  />
                <label htmlFor="maintenanceDescription">Maintenance Description:</label>
                  <input
                    type="text"
                    id="maintenanceDescription"
                    name="maintenanceDescription"
                    value={maintenanceDescription}
                    onChange={(e) => setMaintenanceDescription(e.target.value)}
                    required
                  />

                <button type="submit" className="button-124 ">Finish Task</button>
            </form> 
            
            {/* <div>
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
            </div> */}
            
          </>
        ) : (
          <div className='body-24'>Select a route to view details.</div>
        )}
      </div>
    </div>
  );
};

export default MaintenTasks;