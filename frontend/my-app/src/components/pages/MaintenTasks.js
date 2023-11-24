import React, { useState, useEffect } from 'react';
import './MaintenTasks.css';
import axios from 'axios';

const MaintenTasks = () => {
  const [assignedTasks, setAssignedTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [vehicleData, setVehicleData] = useState(null);
  const [formData, setFormData] = useState({
    task_id: '',
    vehicle_id: '',
    user_id: '',
    maintenance_description: '',
    maintenance_date: '',
    maintenance_cost: '',
    images: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/tasks/assigned/${localStorage.getItem("maintenId")}`);
        setAssignedTasks(response.data.taskDetails);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const fetchVehicleData = async (task) => {
console.log("task = ",task)
console.log("assignedTasks = ",assignedTasks)
console.log("selectedTask = ",selectedTask)
console.log("vehicleData = ",vehicleData)
    if (task && task.vehicle_id) {
      try {
        const response = await axios.get(`http://localhost:3001/vehicles/${task.vehicle_id}`);
        setVehicleData(response.data);
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

    const requiredFields = ['maintenance_cost', 'maintenance_description', 'maintenance_date'];
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      const apiUrl = `http://localhost:3001/tasks/maintenance/${selectedTask.task_id}`;
      console.log(
        'Submitting maintenance task with the following data:',
        formData
      )
      try {
        await fetchVehicleData(selectedTask); // Wait for fetchVehicleData to complete
  
        const response = await axios.put(apiUrl, formData);
        console.log('Finished successfully:', response.data);
        
        setFormData({
          task_id: selectedTask.task_id,
          vehicle_id: selectedTask.vehicle_id,
          user_id: selectedTask.assignee_id,
          maintenance_description: '',
          maintenance_date: '',
          maintenance_cost: '',
          images: ''
        });
      } catch (error) {
        console.error('Error during maintenance task submission:', error);
      }
    }
  };
  

  const handleTaskSelection = (task) => {
    setSelectedTask(task);
    fetchVehicleData(task);

    setFormData({
      task_id: task.task_id,
      vehicle_id: task.vehicle_id,
      user_id: task.assignee_id,
      maintenance_description: '',
      maintenance_date: '',
      maintenance_cost: '',
      images: ''
    });
  };

  const filteredTasks = assignedTasks.filter((task) => task.status !== 'completed');

  return (
    <div className="driver-home-page">
      <div className="task-list">
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id} onClick={() => handleTaskSelection(task)}>
              <div className='body-20-bold'>Maintenance Task {task.task_id}</div>
              <div>
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>Date: </span>
                <span className='label-11'>{task.date.split('T')[0]}</span>
              </div>
              <div>
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>License Plate: </span>
                <span className='label-11'>{task.vehicle_id}</span>
              </div>
              <div>
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>Status: </span>
                <span className='label-11'>{task.status}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="task-details">
        {selectedTask ? (
          <>
            <div className='body-24-bold'>{selectedTask.title}</div>
            <div>
              <span className='body-14-bold'>Date: </span>
              <span className='body-14'>{selectedTask.date.split('T')[0]}</span>
            </div>
            <div>
              <span className='body-14-bold'>Time: </span>
              <span className='body-14'>{selectedTask.date.split('T')[1].split('.')[0]}</span>
            </div>
            <div>
              <span className='body-14-bold'>Title: </span>
              <span className='body-14'>{selectedTask.maintenance_description}</span>
            </div>
            <div>
              <span className='body-14-bold'>Vehicle Model: </span>
              <span className='body-14'>{vehicleData && `${vehicleData.make} ${vehicleData.model}`}</span>
            </div>
            <div>
              <span className='body-14-bold'>License Plate: </span>
              <span className='body-14'>{selectedTask.vehicle_id}</span>
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="maintenance_cost">Maintenance Cost:</label>
              <input
                type="text"
                id="maintenance_cost"
                name="maintenance_cost"
                value={formData.maintenance_cost}
                onChange={handleChange}
                required
              />

              <label htmlFor="maintenance_date">Maintenance Date:</label>
              <input
                type="datetime-local"
                id="maintenance_date"
                name="maintenance_date"
                value={formData.maintenance_date}
                onChange={handleChange}
                required
              />

              <label htmlFor="maintenance_description">Description:</label>
              <input
                type="text"
                id="maintenance_description"
                name="maintenance_description"
                value={formData.maintenance_description}
                onChange={handleChange}
                required
              />

              <button type="submit" className="button-124">Finish Task</button>
            </form>
          </>
        ) : (
          <div className='body-24'>Select a route to view details.</div>
        )}
      </div>
    </div>
  );
};

export default MaintenTasks;
