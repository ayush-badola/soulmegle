import React from 'react';
import './MoodSelector.css';

const moods = ['Happy', 'Sad', 'Anxious', 'Angry', 'Lonely'];

export default function MoodSelector({ onSelectMood }) {
  return (
    <div className="mood-selector">
      {moods.map(mood => (
        <button key={mood} onClick={() => onSelectMood(mood)} className="mood-button">
          {mood}
        </button>
      ))}
    </div>
  );
}