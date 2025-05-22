import React, { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import heroImage from '../../assets/HeroSection/hero-menu.jpg';

import MenuTabs from '../../components/MenuTabs/MenuTabs';
import MenuContent from '../../components/MenuContent/MenuContent';
import Footer from '../../components/Footer/Footer';

import './Menu.css';



export default function Menu() {
  const [activeTab, setActiveTab] = useState('food');

  return (
    <div>
      <Navbar />
      <HeroSection image={heroImage} title="Menu" />

      <div className="menu-section">

        <MenuTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <MenuContent activeTab={activeTab} />

      </div>

      <Footer />

    </div>

  )
}