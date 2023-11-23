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
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    task_id: selectedTask ? selectedTask.task_id : '',
    vehicle_id: selectedTask ? selectedTask.vehicle_id : '',
    user_id: selectedTask ? selectedTask.assignee_id : '',
    description: '',
    maintenance_date: '',
    maintenance_cost: '',
  });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/tasks/assigned/${user_id}`);
        setAssignedTasks(response.data.taskDetails);
        console.log(assignedTasks)
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};


    // Check for required fields
    const requiredFields = ['maintenance_cost', 'description', 'maintenanceCost'];
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const apiUrl = `http://localhost:3001/tasks/maintenance/${selectedTask.vehicle_id}`;


      // Make a request to your server with formData
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log('Finished successfully:', data);
          // setSuccessMessage('Finished successfully');
          // Reset the form after successful submission
          setFormData({
            task_id: selectedTask.task_id, // You may need to adjust this based on your task structure
            vehicle_id: selectedTask.vehicle_id,
            user_id: selectedTask.assignee_id,
            description: '',
            vehicle_id: selectedTask.vehicle_id,
            maintenance_date: '',
            maintenance_cost: '',
          });
          // Clear success message after a few seconds
          // setTimeout(() => {
          //   setSuccessMessage('');
          // }, 3000);
        })
        .catch((error) => {
          console.error('Error during registration:', error);
          // Handle error, show an error message to the user, etc.
        });
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

    setFormData({
      task_id: task.task_id,
      vehicle_id: task.vehicle_id,
      user_id: task.assignee_id,
      description: '',
      maintenance_date: '',
      maintenance_cost: '',
    });
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
                  value={formData.maintenance_cost}
                  onChange={(e) => setMaintenanceCost(e.target.value)}
                  required


                />
                <label htmlFor="dateTime">Date and Time:</label>
                  <input
                    type="datetime-local"  // Use "datetime-local" type for date and time input
                    id="dateTime"
                    name="dateTime"
        
                    value={formData.dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    required

                  />
                <label htmlFor="maintenanceDescription">Maintenance Description:</label>
                  <input
                    type="text"
                    id="maintenanceDescription"
                    name="maintenanceDescription"
                    value={formData.description}
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