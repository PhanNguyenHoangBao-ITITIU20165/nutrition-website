import React from 'react';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <a href="/">True Wellnessway</a>
        </div>
        <nav className="navbar">
          <a href="/">Exercises</a>
          <a href="/">Nutrition</a>
          <a href="/">Login</a>
          <a href="/" className="cta-button">Get Started</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
