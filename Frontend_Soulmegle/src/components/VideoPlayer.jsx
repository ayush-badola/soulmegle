import React from 'react';
import './VideoPlayer.css';

export default function VideoPlayer({ src }) {
  return (
    <div className="video-container">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      />
    </div>
  );
}
