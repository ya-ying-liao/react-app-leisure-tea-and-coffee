import React from 'react';
import './MenuTabs.css';

export default function MenuTabs({ activeTab, setActiveTab }) {
  return (
    <div className="menu-tabs">
      <button
        className={activeTab === 'food' ? 'tab active' : 'tab'}
        onClick={() => setActiveTab('food')}
      >
        Food
      </button>
      <button
        className={activeTab === 'drinks' ? 'tab active' : 'tab'}
        onClick={() => setActiveTab('drinks')}
      >
        Drinks
      </button>
    </div>
  );
}
