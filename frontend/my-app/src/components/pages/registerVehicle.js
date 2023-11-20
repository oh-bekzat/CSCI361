import React, { useState } from 'react';
import './registration.css';

const RegistrationFormVehicle = () => {
  const [formData, setFormData] = useState({
    license_plate: '',
    make: '',
    model: '',
    manufacture_year: '',
    capacity: '',
    fuel_volume: '',
    tank_volume: '',
    vehicle_image: '',
    mileage: 0,
    last_fueled_date: new Date().toISOString().split('T')[0],
    last_maintained_date: new Date().toISOString().split('T')[0],
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});

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
    const requiredFields = ['license_plate', 'make', 'model', 'manufacture_year', 'capacity', 'fuel_volume', 'tank_volume', 'vehicle_image'];
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    // Check if manufacture_year is a valid integer
    if (formData.manufacture_year && !Number.isInteger(parseInt(formData.manufacture_year, 10))) {
      newErrors.manufacture_year = 'Manufacture year must be a valid integer';
    }

    // Check if capacity is a valid integer
    if (formData.capacity && !Number.isInteger(parseInt(formData.capacity, 10))) {
      newErrors.capacity = 'Capacity must be a valid integer';
    }

    // Check if tank_volume is a valid float
    if (formData.tank_volume && isNaN(parseFloat(formData.tank_volume))) {
      newErrors.tank_volume = 'Tank volume must be a valid number';
    }

    // Check if fuel_volume is a valid float
    if (formData.fuel_volume && isNaN(parseFloat(formData.fuel_volume))) {
      newErrors.fuel_volume = 'Fuel volume must be a valid number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Parse values before sending to the server
      const formattedData = {
        ...formData,
        manufacture_year: parseInt(formData.manufacture_year, 10),
        capacity: parseInt(formData.capacity, 10),
        tank_volume: parseFloat(formData.tank_volume),
        fuel_volume: parseFloat(formData.fuel_volume),
      };

      // Replace 'http://localhost:3001/vehicles' with your actual API endpoint
      const apiUrl = 'http://localhost:3001/vehicles';

      // Make a request to your server with formattedData
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Vehicle registration successful:', data);
          setSuccessMessage('Added successfully');
          // Reset the form after successful submission
          setFormData({
            license_plate: '',
            make: '',
            model: '',
            manufacture_year: '',
            capacity: '',
            fuel_volume: '',
            tank_volume: '',
            vehicle_image: '',
            mileage: 0,
            last_fueled_date: new Date().toISOString().split('T')[0],
            last_maintained_date: new Date().toISOString().split('T')[0],
          });
          // Clear success message after a few seconds
          setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
        })
        .catch((error) => {
          console.error('Error during vehicle registration:', error);
          // Handle error, show an error message to the user, etc.
        });
    }
  };

  return (
    <div className="registration-container">
      <h2>Registering Vehicle</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          License Plate:
          <input type="text" name="license_plate" value={formData.license_plate} onChange={handleChange} />
        </label>

        <label>
          Make:
          <input type="text" name="make" value={formData.make} onChange={handleChange} />
        </label>

        <label>
          Model:
          <input type="text" name="model" value={formData.model} onChange={handleChange} />
        </label>

        <label>
          Manufacture Year:
          <input type="text" name="manufacture_year" value={formData.manufacture_year} onChange={handleChange} />
        </label>

        <label>
          Capacity:
          <input type="text" name="capacity" value={formData.capacity} onChange={handleChange} />
        </label>

        <label>
          Fuel Volume:
          <input type="text" name="fuel_volume" value={formData.fuel_volume} onChange={handleChange} />
        </label>

        <label>
          Tank Volume:
          <input type="text" name="tank_volume" value={formData.tank_volume} onChange={handleChange} />
        </label>

        <label>
          Vehicle Image:
          <div className='label-12 note'>*Submit as link</div>
          <input type="text" name="vehicle_image" value={formData.vehicle_image} onChange={handleChange} />
        </label>

        {errors.license_plate && <span className="error-text">{errors.license_plate}</span>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <button className='button-264' type="submit">Register vehicle</button>
      </form>
    </div>
  );
};

export default RegistrationFormVehicle;