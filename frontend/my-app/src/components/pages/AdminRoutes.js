// AdminRoutes.js
import React, { useState, useEffect } from 'react';
import './AdminRoutes.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminManagesRoutes = () => {
  const [routes, setRoutes] = useState([
    {
      route_id: 1,
      client_id: 101,
      start_point: 'Point A',
      finish_point: 'Point B',
      distance: 50,
      start_time: '2023-12-01 08:00:00',
      status: 'awaiting',
    },
    {
      route_id: 2,
      client_id: 102,
      start_point: 'Point A',
      finish_point: 'Point B',
      distance: 550,
      start_time: '2023-12-02 22:00:00',
      status: 'awaiting',
    },
  ]);

  const handleAssignRoute = (routeId) => {
    // Logic to handle assigning a route to a driver
    console.log('Assigning route with ID:', routeId);
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
              <td>{route.status}</td>
              <td>
                <button
                  className="assign-button"
                  onClick={() => handleAssignRoute(route.route_id)}
                >
                  Assign Driver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminManagesRoutes;
