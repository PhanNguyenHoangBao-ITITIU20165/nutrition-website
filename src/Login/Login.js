import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (API call, etc.)
    console.log('Logging in with', { email, password });
  };

  return (
    <div className="login-page">
      <header className="site-header">
        <div className="header-container">
          <div className="logo">
            <a href="/">True Wellnessway</a>
          </div>
        </div>
      </header>

      <main className="login-main">
        <div className="login-container">
          <h2>Welcome Back</h2>
          <p>Log in to continue.</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <div>
              <label>Email: </label>
              <input 
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label>Password: </label>
              <input 
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="********"
                required
              />
            </div>
            <button className="login-button" type="submit">Log In</button>
          </form>
          <div className="login-links">
            <p><a href="/">Forgot password?</a></p>
            <p>Don't have an account? <a href="/">Create one</a></p>
          </div>
        </div>
      </main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} True Wellnessway
      </footer>
    </div>
  );
};

export default Login;
