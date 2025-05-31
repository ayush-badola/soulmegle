import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from './components/VideoPlayer';
import MoodSelector from './components/MoodSelector';
import MessageBubble from './components/MessageBubble';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    { text: "Welcome to Soulmegle! How are you feeling today?", sender: 'soul' }
  ]);
  const [selectedMood, setSelectedMood] = useState('');
  const [loading, setLoading] = useState(false);

  // Reference to the dummy end element for smooth scrolling
  const endRef = useRef(null);

  // Smooth-scroll to bottom when messages or loading changes
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleMoodSelect = async (mood) => {
    setSelectedMood(mood);
    const userText = `I am feeling ${mood}`;
    setMessages(prev => [...prev, { text: userText, sender: 'user' }]);
    setLoading(true);

    try {
      const res = await axios.post(`${import.meta.env.BACKEND_URL || 'http://localhost:5000'}/api/mood`, { mood });
      setMessages(prev => [...prev, { text: res.data.message, sender: 'soul' }]);
    } catch {
      setMessages(prev => [...prev, { text: "Oops! Something went wrong.", sender: 'soul' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
       <div className="split-container">
        <VideoPlayer src="/video.mp4" />
      <div className='chat-container'>
      <h1>Soulmegle</h1>
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} text={msg.text} sender={msg.sender} />
        ))}
        {loading && <div className="typing-indicator">Soulmegle is typing...</div>}
        {/* dummy element to scroll into view */}
        <div ref={endRef} />
      </div>
      {!loading && <MoodSelector onSelectMood={handleMoodSelect} />}
      </div>
    </div>
    </div>
  );
}

export default App;