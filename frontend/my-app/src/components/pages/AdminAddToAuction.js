import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import './Login.css';

const AddVehicleAuction = ({ match }) => {
    const navigate = useNavigate();
    const car = useParams()
  
    const [vehicleCost, setVehicleCost] = useState('');
    const [description, setDescription] = useState('');
    const [photoUrls, setPhotoUrls] = useState('');
    const [photoUrlsArray, setPhotoUrlsArray] = useState([]);
  
    const handleAddToAuction = async () => {
        try {
          // Convert the comma-separated string of photo URLs to an array
    
          // Your API endpoint URL
          const apiUrl = 'http://localhost:3001/auction';
    
          // Example data to send in the request body
          const requestData = {
            admin_id: 1, // Replace with the actual admin ID
            vehicle_id: car.vehicleId,
            vehicle_cost: parseInt(vehicleCost),
            description,
            photos: photoUrlsArray,
          };
    
          // Make an Axios POST request
          const response = await axios.post(apiUrl, requestData);
          console.log(response);
    
          // Navigate to another page after successfully adding to auction
          navigate('/admin/vehicles');
    
        } catch (error) {
          console.error('Error adding to auction:', error);
          // Handle error as needed
        }
      };

      const handleAddPhoto = () => {
        // Trim and check if the URL is not empty
        const trimmedUrl = photoUrls.trim();
        if (trimmedUrl) {
          // Add the new photo URL to the array
          setPhotoUrlsArray([...photoUrlsArray, trimmedUrl]);
          // Clear the input for the next photo
          setPhotoUrls('');
        } else {
          // Handle the case where the URL is empty or contains only whitespace
          console.warn('Invalid URL. Please provide a non-empty URL.');
        }
      };
    
      return (
        <div>
          <h2>Add Vehicle to Auction</h2>
          <label>Cost of the Vehicle:</label>
          <input type="number" value={vehicleCost} onChange={(e) => setVehicleCost(e.target.value)} />
    
          <label>Description:</label>
          <textarea style={{ width:'30%', height:'100px'}} value={description} onChange={(e) => setDescription(e.target.value)} />
    
        <div>
            <label>Photo URL:</label>
            <input type="text" value={photoUrls} onChange={(e) => setPhotoUrls(e.target.value)} />
            <button className='button-124' style={{marginLeft:'15pt'}} onClick={handleAddPhoto}>Add Photo</button>
        </div>
          <button className='button-264' onClick={handleAddToAuction}>Add to Auction</button>
        </div>
      );
};

export default AddVehicleAuction;
