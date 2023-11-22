// RegistrationForm.js
import React, { useState } from 'react';
import './registration.css';

const AdminManageDrivers = () => {
  const [formData, setFormData] = useState({
    phone_number: '87773378532',
    license_code: '123212',
    user_role:'Driver',
    first_name: 'Aktan',
    last_name: 'Seraliyev',
    email: 'aktan.seraliyev@nu.edu.kz',
    password: '12345678',
    iin:'030105500722'
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
    const requiredFields = ['phone_number', 'license_code'];
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
      // Replace 'http://localhost:3001/users' with your actual API endpoint
      const apiUrl = 'http://localhost:3001/users';

      // Make a request to your server with formData
      fetch(apiUrl, {
        method: 'PUT', // Assuming you use PUT for updating information
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Update successful:', data);
          setSuccessMessage('Updated successfully');
          // Clear success message after a few seconds
          setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
        })
        .catch((error) => {
          console.error('Error during update:', error);
          // Handle error, show an error message to the user, etc.
        });
    }
  };

  return (
    <div className="registration-container">
      <h2>Updating Information</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <p><strong>User Role:</strong> {formData.user_role}</p>
        <br />
        <p><strong>First Name:</strong> {formData.first_name}</p>
        <br />
        <p><strong>Last Name:</strong> {formData.last_name}</p>
        <br />
        <p><strong>Email:</strong> {formData.email}</p>
        <br />
        <p><strong>Password:</strong> {formData.password}</p>
        <br />
        <p><strong>IIN:</strong> {formData.iin}</p>
        <label>
        <br />
        <strong>Phone Number:</strong>
          <div className='label-12 note'>Start with 8, ex: 87773378532</div>
          <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} />
        </label>

        <label>
        <strong>License Code:</strong> 
          <div className='label-12 note'>*Only required if the selected role is "driver"</div>
          <input type="text" name="license_code" value={formData.license_code} onChange={handleChange} />
        </label>

        {errors.phone_number && <span className="error-text">{errors.phone_number}</span>}
        {errors.license_code && <span className="error-text">{errors.license_code}</span>}

        <button className='button-264' type="submit">Update</button>
        {successMessage && <div className="success-message">{successMessage}</div>}
      </form>
    </div>
  );
};

export default AdminManageDrivers;
