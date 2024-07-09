// src/components/Header.js

import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import NotificationPanel from './NotificationPanel';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ title, titlePrefix = 'My' }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const closeNotifications = () => {
    setShowNotifications(false);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    navigate('/login'); // Redirect to the login page
};
  return (
    <div className="header-container">
      <div className="title">
        <span className="bold">{titlePrefix}</span> <span className="highlight">{title}</span>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search here" />
        <button className="search-button">
          <i className="fa fa-search"></i>Search</button>
      </div>
      <div className="notifications">
        <button className="notification-button" onClick={toggleNotifications}>
          <FaBell />
        </button>
        {showNotifications && <NotificationPanel visible={showNotifications} onClose={closeNotifications} />}
      </div>
      <div className="company-name"><h3>Excel Tech Consulting</h3></div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;
