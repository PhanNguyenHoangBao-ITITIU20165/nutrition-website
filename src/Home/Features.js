import React from 'react';

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

const Features = () => {
  return (
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
  );
};

export default Features;
