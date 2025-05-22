import React from 'react';
import './StorySection.css';

export default function StorySection({ image, title, text }) {
  return (
    <section className="story-section">
      <div className="story-image">
        <img src={image} alt="Story" />
      </div>
      <div className="story-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      
    </section>
  );
}
