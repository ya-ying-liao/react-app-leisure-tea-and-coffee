// src/components/IntroSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './IntroSection.css';
import sectionImage from '../../assets/IntroSection/store.png';

const IntroSection = () => {
  const navigate = useNavigate();

  const handleViewMenu = () => {
    navigate('/menu');
  };
  
  return (
    <div className="intro-section">
      <img src={sectionImage} alt="intro image" className="intro-image" />
      <div className="intro-text">
        <h2 className="intro-title">Simple joys begin with a warm cup.</h2>

        <p className="intro-description">
          Family-owned and operated Taiwanese Coffee Shop established in 1987. At our tea and coffee haven, we craft each cup with care, offering a tranquil space to relax, connect, and savor the moment.
        </p>
        <button className="intro-button" onClick={handleViewMenu}>View Menu</button>
      </div>
    </div>
  );
};

export default IntroSection;
