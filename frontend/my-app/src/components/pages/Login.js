import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => 
    {fetch('http://localhost:3001/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Invalid username or password');
      }
      return response.json();
    })
    .then((data) => {
      setIsLoggedIn(true);
      alert('Login successful!');
      console.log('User ID:', data.userId);
      console.log('User Role:', data.user_role);
      // You may store the received token in localStorage or a state management system
    })
    .catch((error) => {
      alert(error.message || 'An error occurred during login');
    });
};

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="button-124" onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
