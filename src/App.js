import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/navbar'; 
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import Overview from './pages/Overview';
import Aboutme from './pages/Aboutme';
import SkilldanPengalaman from './pages/SkilldanPengalaman'; 
import Login from './pages/Login';
import AdminDashboard from './Dashboard/AdminDashboard';
import './App.css'; 

const App = () => {
  const isAuthenticated = localStorage.getItem('authToken');
  const location = useLocation(); // Get the current route

  // Check if the current route is the admin dashboard route
  const isAdminDashboard = location.pathname === '/admin-dashboard';

  return (
    <div className="app">
      {/* Conditionally render Navbar and Footer based on the route */}
      {!isAdminDashboard && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Overview" element={<Overview />} />
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/SkilldanPengalaman" element={<SkilldanPengalaman />} />
        <Route path="/Login" element={<Login />} />
        <Route 
          path="/admin-dashboard" 
          element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/Login" />} 
        />
      </Routes>
      
      {/* Conditionally render Footer based on the route */}
      {!isAdminDashboard && <Footer />}
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
