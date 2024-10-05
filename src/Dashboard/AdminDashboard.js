import React, { useState } from 'react';
import './AdminDashboard.css';
import Sidebar from './Sidebar';
import Home from '../pages/Home';
import Overview from '../pages/Overview';
import Aboutme from '../pages/Aboutme';
import SkilldanPengalaman from '../pages/SkilldanPengalaman';
import Welcome from '../pages/Welcome';

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState('welcome');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'overview':
        return <Overview />;
      case 'aboutme':
        return <Aboutme />;
      case 'skilldanpengalaman':
        return <SkilldanPengalaman />;
        default:
        return <Welcome />; 
    }
  };

  return (
    <div className="admin-dashboard">
      <Sidebar setActivePage={setActivePage} />
      <div className="content">
        <div className="page-content">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
