// RegistrationForm.js
import React, { useState } from 'react';
import './registerUser.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    user_role: '',
    license_code: '',
    firstname: '',
    lastname: '',
    email: '',
    password_hashed: '',
    phone_number: '',
    iin: '',
  });
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

    // Check if user_role is selected
    if (!formData.user_role) {
      newErrors.user_role = 'Select role';
    }

    // Check for required fields
    const requiredFields = ['firstname', 'lastname', 'email', 'password_hashed', 'phone_number', 'iin'];
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
      // Replace 'http://localhost:3001/register' with your actual API endpoint
      const apiUrl = 'http://localhost:3001/users';

      // Make a request to your server with formData
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Registration successful:', data);
          // Handle success, redirect, or show a success message to the user
        })
        .catch((error) => {
          console.error('Error during registration:', error);
          // Handle error, show an error message to the user, etc.
        });
    }
  };

  return (
    <div className="registration-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User Role:
          <select name="user_role" value={formData.user_role} onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="driver">Driver</option>
            <option value="fueling-person">Fueling Person</option>
            <option value="maintenance-person">Maintenance Person</option>
          </select>
        </label>

        <label>
          License Code:
          <input type="text" name="license_code" value={formData.license_code} onChange={handleChange} />
        </label>

        <label>
          First Name:
          <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
        </label>

        <label>
          Last Name:
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>

        <label>
          Password:
          <input type="password" name="password_hashed" value={formData.password_hashed} onChange={handleChange} />
        </label>

        <label>
          Phone Number:
          <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} />
        </label>

        <label>
          IIN:
          <input type="text" name="iin" value={formData.iin} onChange={handleChange} />
        </label>
        {errors.user_role && <span className="error-text">{errors.user_role}</span>}

        <button className='button-264' type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
