import React from 'react';
import PlanForm from '../components/planForm';

const Home = ({ onSubmitPlan }) => {
  return (
    <div className="form-section">
      <h2>Get Your Personalized Plan</h2>
      <p>Provide your fitness goals, dietary preferences, and schedule to receive a tailored workout and meal plan.</p>
      <PlanForm onSubmit={onSubmitPlan} />
    </div>
  );
};

export default Home;
