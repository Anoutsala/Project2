import React from 'react';

const MoodSelection: React.FC = () => {
  const moods: string[] = ['Focused', 'Happy', 'Party'];

  return (
    <div>
      <h2>Select your mood</h2>
      <div>
        {moods.map((mood) => (
          <button key={mood}>{mood}</button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelection;

