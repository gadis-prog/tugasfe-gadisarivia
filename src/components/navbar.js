import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo-text">My Curriculum Vitae</h2>
        <h5>Posted by Gadis</h5>
      </div>
      <ul className="nav-links">
      <li><Link to='/'>Home</Link></li>
        <li><Link to='/overview'>Overview</Link></li>
        <li><Link to='/Aboutme'>About Me</Link></li>
        <li><Link to='/SkilldanPengalaman'>Skill & Pengalaman</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;