import React from 'react';

const Recommendation = ({ planData }) => {
  const { fitnessLevel, dietPreference, goal } = planData;

  // Mock recommendation logic
  const workoutPlan = fitnessLevel === 'beginner' 
    ? '3-day full-body light workout' 
    : fitnessLevel === 'intermediate'
    ? '4-day split with moderate intensity'
    : '5-day advanced strength split';

  const dietPlan = dietPreference === 'vegan' 
    ? 'High-protein vegan meal plan (legumes, tofu, seitan)'
    : dietPreference === 'vegetarian'
    ? 'Protein-rich vegetarian plan (eggs, dairy, legumes)'
    : dietPreference === 'pescatarian'
    ? 'Lean protein pescatarian diet (fish, whole grains)'
    : 'Balanced omnivore diet (lean meats, whole grains, vegetables)';

  return (
    <div className="recommendation-section">
      <h2>Your Personalized Plan</h2>
      <p><strong>Goal:</strong> {goal}</p>
      <h3>Workout Recommendation</h3>
      <p>{workoutPlan}</p>
      <h3>Diet Recommendation</h3>
      <p>{dietPlan}</p>
      <p>Track your progress and adjust as needed!</p>
    </div>
  );
};

export default Recommendation;
