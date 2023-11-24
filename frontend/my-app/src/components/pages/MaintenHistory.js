import React, { useState, useEffect } from 'react';
import './FuelingHistory.css';
import axios from 'axios';

const MaintenHistory = ({}) => {
  // const [assignedTasks, setAssignedTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [maintenanceDetail, setMaintenanceDetail] = useState(null);
  const maintenId = localStorage.getItem("maintenId");


  const [assignedTasks, setAssignedTasks] = useState([]);

  useEffect(() => {
    // Fetch data from the localhost:3001/get-routes endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/tasks/assigned/${maintenId}`);
        console.log(response.data);
        setAssignedTasks(response.data.taskDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  const fetchMaintenanceDetail = async (task) => {
    console.log(task);
    if (task && task.vehicle_id) {
      try {
        const response = await axios.get(`http://localhost:3001/tasks/maintenance/${task.vehicle_id}`);
        const matchingMaintenanceDetail = response.data.maintenanceDetails.find(
          (detail) => detail.task_id === task.task_id
        );
  
        setMaintenanceDetail(matchingMaintenanceDetail);
        console.log("MaintenanceDetail:", matchingMaintenanceDetail);
      } catch (error) {
        console.error('Error fetching Maintenance Detail data:', error);
      }
    }
  };
  

  // Function to handle task selection
  const handleTaskSelection = (task) => {
    console.log("Task selected:", task);
     setSelectedTask(task);
     fetchMaintenanceDetail(task);
    console.log("maint = ",maintenanceDetail)
  };

  const filteredTasks = Array.isArray(assignedTasks) ? assignedTasks.filter((task) => task.status === 'completed') : [];

  const sortedTasks = filteredTasks.sort((a, b) => a.route_id - b.route_id);

  return (
    <div className="fueling-history">
      <div className="task-list">
        <ul>
          {Array.isArray(sortedTasks) && sortedTasks.map((task) => (
            <li key={task.task_id} onClick={() => handleTaskSelection(task)}>
              <div>
                <div className='body-20-bold'>Maintenance Task {task.task_id}</div>
              </div>
              <div>
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>Licence Plate: </span> <span className='label-11'>{task.vehicle_id}</span>
              </div>
              <div>
              <span className='label-11-bold' style={{ marginLeft: '20px' }}>Maintenance Date: </span> <span className='label-11'>{task.date.split("T")[0]}</span>
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
            <div className='body-24-bold'>Maintenance Task {selectedTask.task_id}</div>
          </div>
            <div>
                <span className='body-14-bold'>Licence Plate: </span> <span className='body-14'>{selectedTask.vehicle_id}</span>
            </div>
            <div>
                <span className='body-14-bold'>Maintenance Date:  </span> <span className='body-14'>{selectedTask.date.split("T")[0]}</span>
            </div>
            <div>
                <span className='body-14-bold'>Maintenance Cost: </span> <span className='body-14'>{maintenanceDetail ? maintenanceDetail.maintenance_cost : 'N/A'}</span>
            </div>
            <div>
                <span className='body-14-bold'>Status:  </span> <span className='body-14'>{selectedTask.status}</span>
            </div>
            <div>
                <span className='body-14-bold'>Description: </span> <span className='body-14'>{maintenanceDetail ? maintenanceDetail.description : 'N/A'}</span>
            </div>
          </>
        ) : (
          <div className='body-24'>Select a maintenance task to view details.</div>
        )}
      </div>
    </div>
  );
};

export default MaintenHistory