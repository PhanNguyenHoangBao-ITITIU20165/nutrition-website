import React, { useState } from 'react';

const ProgressTracker = ({ planData }) => {
  const [progressNotes, setProgressNotes] = useState('');
  const [entries, setEntries] = useState([]);

  const addProgressEntry = (e) => {
    e.preventDefault();
    if(progressNotes.trim() !== '') {
      setEntries([...entries, { date: new Date().toLocaleDateString(), note: progressNotes }]);
      setProgressNotes('');
    }
  };

  return (
    <div className="progress-section">
      <h2>Progress Tracker</h2>
      <p>Keep notes on your workouts, diet adherence, and overall feeling over time.</p>
      <form onSubmit={addProgressEntry}>
        <label>New Progress Note:</label>
        <input 
          type="text" 
          value={progressNotes} 
          onChange={(e) => setProgressNotes(e.target.value)}
          placeholder="e.g., Felt stronger today, lifted heavier weights" 
        />
        <button type="submit">Add Entry</button>
      </form>
      <h3>Previous Entries</h3>
      <ul>
        {entries.map((entry, idx) => (
          <li key={idx}>
            <strong>{entry.date}:</strong> {entry.note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressTracker;
