

// FuelingTasks.js
import React, { useState } from 'react';
import './MaintenTasks.css'; // Ensure you have a corresponding CSS file for styling

const FuelingTasks = () => {
  // Sample data for fueling tasks
  const [fuelingTasks, setFuelingTasks] = useState([
    { id: 1, title: 'Fueling Task 1', details: 'Details for Fueling Task 1', vehicleId: 'S124SLA', date: '15.09.2023', time: '12:00' },
    { id: 2, title: 'Fueling Task 2', details: 'Details for Fueling Task 2',  vehicleId: 'S124SLA', date: '24.10.2023', time: '14:00' },
  ]);

  // State for input values
  const [cost, setCost] = useState('');
  const [fuelingDate, setFuelingDate] = useState('');
  const [fuelingAmount, setFuelingAmount] = useState('');
  const [fuelingCost, setFuelingCost] = useState('');
  const [gasStation, setGasStation] = useState('');

  // State to track the selected task
  const [selectedTask, setSelectedTask] = useState(null);

  // Function to handle task selection
  const handleTaskSelection = (task) => {
    setSelectedTask(task);
  };

  // Function to handle assigning the fueling task
  const handleAssignFuelingTask = () => {
    // Implement your logic for assigning the fueling task
    console.log('Fueling Task assigned:', selectedTask);
    console.log('Cost:', cost);
    console.log('Fueling Date:', fuelingDate);
    console.log('Fueling Amount:', fuelingAmount);
    console.log('Fueling Cost:', fuelingCost);
    console.log('Gas Station Name:', gasStation);
  };

  return (
    <div className="driver-home-page">
      <div className="task-list">
        <ul>
          {fuelingTasks.map((task) => (
            <li key={task.id} onClick={() => handleTaskSelection(task)}>
              <div>
                <div className='body-20-bold'>{task.title}</div>
              </div>
              <div>
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>Date: </span> <span className='label-11'>{task.date}</span>
              </div>
              <div>
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>Licence Plate: </span> <span className='label-11'>{task.vehicleId}</span>
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
              <span className='body-14-bold'>Licence Plate: </span> <span className='body-14'>{selectedTask.vehicleId}</span>
            </div>
            {/* Input Boxes */}
            <div>
              <label htmlFor="cost">Cost:</label>
              <input type="text" id="cost" value={cost} onChange={(e) => setCost(e.target.value)} />
            </div>
            <div>
              <label htmlFor="fuelingDate">Fueling Date:</label>
              <input type="date" id="fuelingDate" value={fuelingDate} onChange={(e) => setFuelingDate(e.target.value)} />
            </div>
            <div>
              <label htmlFor="fuelingAmount">Fueling Amount:</label>
              <input type="number" id="fuelingAmount" value={fuelingAmount} onChange={(e) => setFuelingAmount(e.target.value)} />
            </div>
            <div>
              <label htmlFor="fuelingCost">Fueling Cost:</label>
              <input type="number" id="fuelingCost" value={fuelingCost} onChange={(e) => setFuelingCost(e.target.value)} />
            </div>
            <div>
              <label htmlFor="gasStation">Gas Station Name:</label>
              <input type="text" id="gasStation" value={gasStation} onChange={(e) => setGasStation(e.target.value)} />
            </div>
            <div className="button-container">
              <button onClick={handleAssignFuelingTask}>Assign Fueling Task</button>
            </div>
          </>
        ) : (
          <div className='body-24'>Select a fueling task to view details.</div>
        )}
      </div>
    </div>
  );
};

export default FuelingTasks;
