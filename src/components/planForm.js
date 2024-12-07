import React, { useState } from 'react';

const PlanForm = ({ onSubmit }) => {
  const [fitnessLevel, setFitnessLevel] = useState('beginner');
  const [dietPreference, setDietPreference] = useState('omnivore');
  const [goal, setGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      fitnessLevel,
      dietPreference,
      goal,
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Fitness Level:</label>
      <select value={fitnessLevel} onChange={e => setFitnessLevel(e.target.value)}>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>

      <label>Diet Preference:</label>
      <select value={dietPreference} onChange={e => setDietPreference(e.target.value)}>
        <option value="omnivore">Omnivore</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="pescatarian">Pescatarian</option>
      </select>

      <label>Primary Goal (e.g., weight loss, muscle gain):</label>
      <input 
        type="text" 
        value={goal} 
        onChange={e => setGoal(e.target.value)} 
        placeholder="e.g., Lose 10 lbs, Gain muscle mass"
      />

      <button type="submit">Get My Plan</button>
    </form>
  );
};

export default PlanForm;
