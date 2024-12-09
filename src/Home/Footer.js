import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Privacy</a>
        <a href="/">Terms</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Fitbod Inspired. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
