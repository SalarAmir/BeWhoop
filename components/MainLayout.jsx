// src/components/layout/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;