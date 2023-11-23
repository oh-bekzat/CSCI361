import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './registration.css';

const selectedDriverId = localStorage.getItem('selectedDriverId');
console.log(selectedDriverId);

const AdminUpdateDrivers = () => {
  const [userData, setUserData] = useState({});
  const [driverData, setDriverData] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(`http://localhost:3001/users/${selectedDriverId}`);
        setUserData(userResponse.data);

        const driverResponse = await axios.get(`http://localhost:3001/users/drivers/${selectedDriverId}`);
        setDriverData(driverResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the property is in userData or driverData and update the corresponding state
    if (Object.keys(userData).includes(name)) {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (Object.keys(driverData).includes(name)) {
      setDriverData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Check for required fields
    const requiredFields = ['phone_number', 'license_code', 'firstname', 'lastname', 'password_hashed'];
    requiredFields.forEach((field) => {
      if (!userData[field] && !driverData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Replace 'http://localhost:3001/users/drivers/update' with your actual API endpoint
      const apiUrl = `http://localhost:3001/users/${selectedDriverId}`;

      // Make a request to your server with userData and driverData
      console.log({ ...userData, ...driverData })
      
      axios.put(apiUrl, { ...userData, ...driverData })
        .then((response) => {
          console.log('Update successful:', response.data);
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
        <p><strong>User Role:</strong> {userData.user_role}</p>
        <br />
        <p><strong>Email:</strong> {userData.email}</p>
        <br />
        <p><strong>IIN:</strong> {userData.iin}</p>
        
       
        <label>
          <strong>First Name:</strong>
          <input type="text" name="firstname" value={userData.firstname || ''} onChange={handleChange} />
        </label>


        <label>
          <strong>Last Name:</strong>
          <input type="text" name="lastname" value={userData.lastname || ''} onChange={handleChange} />
        </label>

        <label>
          <strong>Password:</strong>
          <input type="text" name="password_hashed" value={userData.password_hashed || ''} onChange={handleChange} />
        </label>

        <label>
          <strong>Phone Number:</strong>
          <div className='label-12 note'>Start with 8, ex: 87773378532</div>
          <input type="tel" name="phone_number" value={userData.phone_number || ''} onChange={handleChange} />
        </label>

        <label>
          <strong>License Code:</strong>
          <input type="text" name="license_code" value={driverData.license_code || ''} onChange={handleChange} />
        </label>

        {errors.phone_number && <span className="error-text">{errors.phone_number}</span>}
        {errors.license_code && <span className="error-text">{errors.license_code}</span>}
        {errors.password_hashed && <span className="error-text">{errors.password_hashed}</span>}
        {errors.firstname && <span className="error-text">{errors.firstname}</span>}
        {errors.lastname && <span className="error-text">{errors.lastname}</span>}

        <button className='button-264' type="submit">Update</button>
        {successMessage && <div className="success-message">{successMessage}</div>}
      </form>
    </div>
  );
};

export default AdminUpdateDrivers;
