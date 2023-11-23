// DriverHomePage.js
import React, { useState, useEffect } from 'react';
import './DriverHome.css';
import axios from 'axios';

const History = () => {
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
    console.log(filteredTasks)
  };

  const filteredTasks = assignedTasks.filter((task) => task.status === 'completed');

  const sortedTasks = filteredTasks.sort((a, b) => a.route_id - b.route_id);

  const finalSortedTasks = sortedTasks.sort((a, b) => {
        const dateA = a.finish_time.split("T")[0];
        const dateB = b.finish_time.split("T")[0];
      
        // Convert the date strings to Date objects and compare
        return new Date(dateB) - new Date(dateA);
  });

  return (
    <div className="driver-home-page">
      <div className="task-list">
        <ul>
          {finalSortedTasks.map((task) => (
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
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>Finished date: </span> <span className='label-11'>{task.finish_time.split("T")[0]}</span>              </div>
              <div>
                <span className='label-11-bold' style={{ marginLeft: '20px' }}>Point of departure: </span> <span className='label-11'>{task.start_point}</span>
              </div>
              <div>
              <span className='label-11-bold' style={{ marginLeft: '20px' }}>Point of arrival: </span> <span className='label-11'>{task.finish_point}</span>
              </div>
              <div>
              <span className='label-11-bold' style={{ marginLeft: '20px' }}>Rate: </span> <span className='label-11'>{task.rate}</span>
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
                 <span className='body-14-bold'>Date: </span> <span className='body-14'>{selectedTask.finish_time.split("T")[0]}</span>
            </div>
             <div>
                 <span className='body-14-bold'>Start and finish time: </span> <span className='body-14'>{selectedTask.start_time.split("T")[1].split(".")[0]} - {selectedTask.finish_time.split("T")[1].split(".")[0]}</span>
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
                <span className='body-14-bold'>Rate: </span> <span className='body-14'>{selectedTask.rate}</span>
            </div>
          </>
        ) : (
          <div className='body-24'>Select a route to view details.</div>
        )}
      </div>
    </div>
  );
};

export default History;



// // DriverHomePage.js
// import React, { useState, useEffect } from 'react';
// import './DriverHome.css';
// import axios from 'axios';

// const History = () => {
//   // Sample data for assigned tasks
//   const [assignedTasks, setAssignedTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const user_id = localStorage.getItem("driverId");

//   useEffect(async () => {
//     // Fetch data from the localhost:3001/get-routes endpoint
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/routes/assigned/${user_id}`);
//         console.log(response.data);
//         setAssignedTasks(response.data.routes);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     await fetchData();
//   }, []);

//   // Function to handle task selection
//   const handleTaskSelection = (task) => {
//     setSelectedTask(task);
//   };

//   const sortedTasks = assignedTasks.sort((a, b) => a.route_id - b.route_id);

//   const finalSortedTasks = sortedTasks.sort((a, b) => {
//     const dateA = a.finish_time.split("T")[0];
//     const dateB = b.finish_time.split("T")[0];
  
//     // Convert the date strings to Date objects and compare
//     return new Date(dateB) - new Date(dateA);
//   });

//   // const filteredTasks = finalSortedTasks.filter((task) => task.status === 'completed');
//   const filteredTasks = finalSortedTasks.filter((task) => console.log(task.status));

//   return (
//     <div className="driver-home-page">
//       <div className="task-list">
//         <ul>
//           {filteredTasks.map((task) => (
//             <li style={{
//               boxShadow:
//                 task.status === 'assigned'
//                   ? '0 0 3px rgba(237, 197, 63, 1)' // Yellow for assigned
//                   : task.status === 'started'
//                   ? '0 0 3px rgba(207, 53, 33, 1)' // Red for started
//                   : '0 0 0px rgba(50, 168, 82, 1)', // Default color for other statuses
//             }} key={task.id} onClick={() => handleTaskSelection(task)}>
//               <div>
//                 <div className='body-20-bold'>Route {task.route_id}</div>
//               </div>
//               <div>
//                   <span className='label-11-bold' style={{ marginLeft: '20px' }}>Finished date: </span> <span className='label-11'>{task.finish_time.split("T")[0]}</span>
//               </div>
//               <div>
//                 <span className='label-11-bold' style={{ marginLeft: '20px' }}>Point of departure: </span> <span className='label-11'>{task.start_point}</span>
//               </div>
//               <div>
//               <span className='label-11-bold' style={{ marginLeft: '20px' }}>Point of arrival: </span> <span className='label-11'>{task.finish_point}</span>
//               </div>
//               <div>
//               <span className='label-11-bold' style={{ marginLeft: '20px' }}>Rate: </span> <span className='label-11'>{task.rate}</span>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Right Section - Detailed Information */}
//       <div className="task-details">
//         {selectedTask ? (
//             <>
//           <div>
//             <div className='body-24-bold'>Route {selectedTask.route_id}</div>
//           </div>
//             <div>
//                 <span className='body-14-bold'>Requested date and time: </span> <span className='body-14'>{selectedTask.requested_date}, {selectedTask.requested_time}</span>
//             </div>
//             <div>
//                 <span className='body-14-bold'>Date: </span> <span className='body-14'>{selectedTask.finish_time.split("T")[0]}</span>
//             </div>
//             <div>
//                 <span className='body-14-bold'>Start and finish time: </span> <span className='body-14'>{selectedTask.start_time.split("T")[1].split(".")[0]} - {selectedTask.finish_time.split("T")[1].split(".")[0]}</span>
//             </div>
//             <div>
//                 <span className='body-14-bold'>Point of departure: </span> <span className='body-14'>{selectedTask.start_point}</span>
//             </div>
//             <div>
//                 <span className='body-14-bold'>Point of arrival: </span> <span className='body-14'>{selectedTask.finish_point}</span>
//             </div>
//             <div>
//                 <span className='body-14-bold'>Vehicle: </span> <span className='body-14'>{selectedTask.vehicle_id}</span>
//             </div>
//             <div>
//                 <span className='body-14-bold'>Status: </span> <span className='body-14'>{selectedTask.status}</span>
//             </div>
//           </>
//         ) : (
//           <div className='body-24'>Select a route to view details.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default History;
