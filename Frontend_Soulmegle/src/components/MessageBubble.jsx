import React from 'react';
import './MessageBubble.css';

export default function MessageBubble({ text, sender }) {
  const isUser = sender === 'user';
  return (
    <div className={`message-bubble ${isUser ? 'user' : 'soul'}`}>
      <p>{text}</p>
    </div>
  );
}