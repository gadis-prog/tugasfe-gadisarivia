import React from 'react';
import { FaHome, FaUser, FaBook, FaCogs, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ setActivePage }) => {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = 'Login';
  };

  return (
    <div className="sidebar">
      <h3>Dashboard Saya</h3>
      <ul>
       <li onClick={() => setActivePage('home')}><FaHome /> Home</li>
        <li onClick={() => setActivePage('overview')}><FaBook /> Overview</li>
        <li onClick={() => setActivePage('aboutme')}><FaUser /> About Me</li>
        <li onClick={() => setActivePage('skilldanpengalaman')}><FaCogs /> Skills & Pengalaman</li>
      </ul>
      <button className="logout-btn" onClick={handleLogout}><FaSignOutAlt /> Logout</button>
    </div>
  );
};

export default Sidebar;
