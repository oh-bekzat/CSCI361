import React, { useState, useEffect } from 'react';
import './MaintenTasks.css';
import axios from 'axios';

const FuelingTasks = () => {
  const [assignedTasks, setAssignedTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [vehicleData, setVehicleData] = useState(null);
  const [photoUrls, setPhotoUrls] = useState('');
  const [formData, setFormData] = useState({
    task_id: '',
    vehicle_id: '',
    user_id: '',
    fuelling_date: '',
    fuel_cost: '',
    fuel_amount:'',
    fuel_description: '',
    gas_station_name:'',
    images:''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/tasks/assigned/${localStorage.getItem("fuelId")}`);
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

    const requiredFields = ['fuel_cost', 'fuelling_date', 'gas_station_name', 'fuel_amount', 'fuel_description'];
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleTaskSubmit = async () => {
    if (validateForm()) {
      console.log(formData.images);
      const apiUrl = `http://localhost:3001/tasks/fuelling/${selectedTask.task_id}`;
      console.log(formData)
      console.log(
        'Submitting fueling task with the following data:',
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
          fuelling_date: '',
          fuel_cost: '',
          fuel_amount:'',
          gas_station_name:'',
          fuel_description: '',
          images:''
        });
      } catch (error) {
        console.error('Error during fueling task submission:', error);
      }
    }
  };

  const handleAddPhoto = () => {
    // Trim and check if the URL is not empty
    const trimmedUrl = photoUrls.trim();
    if (trimmedUrl) {
      // Add the new photo URL to the array
      setFormData((prevData) => ({
        ...prevData,
        images: [...formData.images, trimmedUrl],
      }));
      // Clear the input for the next photo
      setPhotoUrls('');
      console.log(trimmedUrl)
    } else {
      // Handle the case where the URL is empty or contains only whitespace
      console.warn('Invalid URL. Please provide a non-empty URL.');
    }
  };
  

  const handleTaskSelection = (task) => {
    setSelectedTask(task);
    fetchVehicleData(task);

    setFormData({
      task_id: task.task_id,
      vehicle_id: task.vehicle_id,
      user_id: task.assignee_id,
      fuelling_date: '',
      fuel_cost: '',
      fuel_amount:'',
      gas_station_name:'',
      fuel_description: '',
      images:''
    });
  };
  const filteredTasks = assignedTasks.filter((task) => task.status !== 'completed');


  return (
    <div className="driver-home-page">
      <div className="task-list">
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id} onClick={() => handleTaskSelection(task)}>
              <div className='body-20-bold'>Fueling Task {task.task_id}</div>
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
            <div>
            <div className='body-24-bold'>Fueling Task {selectedTask.task_id}</div>
          </div>
            <div>
              <span className='body-14-bold'>Date: </span>
              <span className='body-14'>{selectedTask.date.split('T')[0]}</span>
            </div>
            <div>
              <span className='body-14-bold'>Time: </span>
              <span className='body-14'>{selectedTask.date.split('T')[1].split('.')[0]}</span>
            </div>
            <div>
              <span className='body-14-bold'>License Plate: </span>
              <span className='body-14'>{selectedTask.vehicle_id}</span>
            </div>
            <div>
              <span className='body-14-bold'>Description: </span>
              <span className='body-14'>{selectedTask.description}</span>
            </div>
            <div>
              <label htmlFor="fuel_cost">Fueling Cost:</label>
              <input
                type="int"
                id="fuel_cost"
                name="fuel_cost"
                value={formData.fuel_cost}
                onChange={handleChange}
                required
              />

              <label htmlFor="fuelling_date">Fueling Date:</label>
              <input
                type="datetime-local"
                id="fuelling_date"
                name="fuelling_date"
                value={formData.fuelling_date}
                onChange={handleChange}
                required
              />

              <label htmlFor="fuel_amount">Fueling Amount:</label>
              <input
                type="int"
                id="fuel_amount"
                name="fuel_amount"
                value={formData.fuel_amount}
                onChange={handleChange}
                required
              />
               <label htmlFor="gas_station_name">Gas Station name:</label>
              <input
                type="text"
                id="gas_station_name"
                name="gas_station_name"
                value={formData.gas_station_name}
                onChange={handleChange}
                required
              />

              <label htmlFor="fuel_description">Fueling description:</label>
              <input
                type="text-local"
                id="fuel_description"
                name="fuel_description"
                value={formData.fuel_description}
                onChange={handleChange}
                required
              />
              <div>
                  <label>Photo URL:</label>
                  <div className='label-12'>Paste URL links to photos, you can send multiple</div>
                  <input type="text" value={photoUrls} onChange={(e) => setPhotoUrls(e.target.value)} />
                  <button className='button-124' style={{marginLeft:'15pt'}} onClick={handleAddPhoto}>Add Photo</button>
              </div>
              

              <button type="submit" className="button-124" onClick={handleTaskSubmit}>Finish Task</button>
            </div>
          </>
        ) : (
          <div className='body-24'>Select fueling record to view details.</div>
        )}
      </div>
    </div>
  );
};

export default FuelingTasks;
