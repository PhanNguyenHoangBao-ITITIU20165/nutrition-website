import React from 'react';

const Header = ({ onNav }) => {
  return (
    <header className="header">
      <h1>Fitness & Health Planner</h1>
      <nav className="navbar">
        <a onClick={() => onNav('home')}>Home</a>
        <a onClick={() => onNav('recommendation')}>Plans</a>
        <a onClick={() => onNav('progress')}>Progress</a>
      </nav>
    </header>
  );
};

export default Header;
