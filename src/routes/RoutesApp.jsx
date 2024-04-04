import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import MyJob from '../pages/MyJob';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Profile />} />
      <Route path="/" element={<MyJob />} />
    </Routes>
  );
}

export default RoutesApp;