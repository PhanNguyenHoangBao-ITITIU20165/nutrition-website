import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
