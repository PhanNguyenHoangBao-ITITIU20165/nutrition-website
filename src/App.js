import React, { useState } from 'react';
import Header from './components/Headers';
import Home from './pages/Home';
import Recommendation from './components/Recommendation';
import ProgressTracker from './components/progressTracker';

function App() {
  const [planData, setPlanData] = useState(null);
  const [view, setView] = useState('home');

  const handlePlanSubmission = (data) => {
    setPlanData(data);
    setView('recommendation');
  };

  return (
    <div className="app-container">
      <Header onNav={(destination) => setView(destination)} />
      {view === 'home' && <Home onSubmitPlan={handlePlanSubmission} />}
      {view === 'recommendation' && planData && (
        <Recommendation planData={planData} />
      )}
      {view === 'progress' && (
        <ProgressTracker planData={planData} />
      )}
    </div>
  );
}

export default App;
