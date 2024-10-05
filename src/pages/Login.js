import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Optional for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Hard-coded credentials (you)
  const adminUser = {
    username: 'GadisArivia', // Your username
    password: 'itsjustgadsii', // Your password
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Check credentials
    if (username === adminUser.username && password === adminUser.password) {
      localStorage.setItem('authToken', 'yourAuthToken'); // You can use JWT later
      navigate('/admin-dashboard'); // Navigate to dashboard if credentials are correct
    } else {
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1>Admin Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
