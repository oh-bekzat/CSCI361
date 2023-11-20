// AdminRoutes.js
import React, { useState, useEffect } from 'react';
import './AdminRoutes.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AssignDriverModal from './AdminDriverPopUp';

const AdminManagesRoutes = () => {
  const [routes, setRoutes] = useState([]);
  const [isAssignDriverModalOpen, setAssignDriverModalOpen] = useState(false);
  const [selectedRouteId, setSelectedRouteId] = useState(null);
  const [selectedDriverId, setSelectedDriverId] = useState('');

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:3001/routes');
        setRoutes(response.data.routes);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };
    fetchVehicles();
  }, []); 

  const handleAssignRoute = (routeId) => {
    // Open the modal and set the selected route ID
    setAssignDriverModalOpen(true);
    setSelectedRouteId(routeId);
  };

  const handleDriverSelect = (driverId) => {
    // Update the selected driver ID
    setSelectedDriverId(driverId);
  };

  const handleAssignDriver = () => {
    // Logic to handle assigning a driver to the selected route
    console.log('Assigning driver', selectedDriverId, 'to route', selectedRouteId);

    // Close the modal
    setAssignDriverModalOpen(false);
  };

  return (
    <div className="manage-routes-page">
      <h2>Manage Routes</h2>
      <table className="route-table">
        <thead>
          <tr>
            <th>Route ID</th>
            <th>Client ID</th>
            <th>Start Point</th>
            <th>Finish Point</th>
            <th>Distance</th>
            <th>Start Time</th>
            <th>Finish Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((route) => (
            <tr key={route.route_id}>
              <td>{route.route_id}</td>
              <td>{route.client_id}</td>
              <td>{route.start_point}</td>
              <td>{route.finish_point}</td>
              <td>{route.distance}</td>
              <td>{route.start_time}</td>
              <td>{route.finish_time}</td>
              <td>{route.status}</td>
              <td>
                {route.status === 'awaiting' && (
                  <Link to="/admin/routes/assign">
                    <button
                      className="assign-button"
                      onClick={() => handleAssignRoute(route.route_id)}
                    >
                      Assign Driver
                    </button>
                  </Link>
                )}
                {/* Add additional conditions for other status values */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AssignDriverModal
        isOpen={isAssignDriverModalOpen}
        onRequestClose={() => setAssignDriverModalOpen(false)}
        onDriverSelect={handleDriverSelect}
      />
      {isAssignDriverModalOpen && (
        <button onClick={handleAssignDriver}>Confirm Assign Driver</button>
      )}
    </div>
  );
};

export default AdminManagesRoutes;
