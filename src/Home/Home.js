import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const mockFeatures = [
  {
    title: "Smart Recommendations",
    description: "Automatic workout adjustments based on your progress.",
    icon: "https://via.placeholder.com/50.png?text=F1"
  },
  {
    title: "Variety of Exercises",
    description: "A library of exercises for every muscle group.",
    icon: "https://via.placeholder.com/50.png?text=F2"
  },
  {
    title: "Data-Driven Analytics",
    description: "Track sets, reps, volume, and progress over time.",
    icon: "https://via.placeholder.com/50.png?text=F3"
  },
  {
    title: "Flexible Scheduling",
    description: "Customize workout duration, frequency, and splits.",
    icon: "https://via.placeholder.com/50.png?text=F4"
  }
];

const Home = () => {
  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <div className="logo">
            <a href="/">True Wellnessway</a>
          </div>
          <nav className="navbar">
            <a href="/">Exercises</a>
            <a href="/">Nutrition</a>
            <Link to="/login">Login</Link> 
            {/* Changed from <a href="/">Login</a> to <Link to="/login">Login</Link> */}
            <a href="/" className="cta-button">Get Started</a>
          </nav>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Personalized Workouts. Real Results.</h1>
          <p>
            Get workouts tailored to your goals, equipment, and experience level. Track your progress and break through plateaus with data-driven training plans.
          </p>
          <a href="/" className="hero-cta">Try it Free</a>
        </div>
        <div className="hero-image">
          <img 
            src="https://via.placeholder.com/500x400.png?text=Fitbod+Inspired+Image" 
            alt="Workout illustration" 
          />
        </div>
      </section>

      <section className="features-section">
        <h2>Unlock Your Potential</h2>
        <div className="features-grid">
          {mockFeatures.map((feature, idx) => (
            <div className="feature-card" key={idx}>
              <img src={feature.icon} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-container">
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Privacy</a>
          <a href="/">Terms</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Fitbod Inspired. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
