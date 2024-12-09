import React from 'react';

const Hero = () => {
  return (
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
  );
};

export default Hero;
