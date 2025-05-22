import React from 'react';
import './WhatWeServed.css';

// Replace with your actual images
import teaImg from '../../assets/WhatWeServed/tea.png';
import coffeeImg from '../../assets/WhatWeServed/coffee.jpg';
import smoothieImg from '../../assets/WhatWeServed/smoothie.png';
import dessertImg from '../../assets/WhatWeServed/dessert.png';
import sandwichImg from '../../assets/WhatWeServed/sandwich.jpg';
import pancakeImg from '../../assets/WhatWeServed/pancake.png';

const servedItems = [
  { title: 'Tea', image: teaImg },
  { title: 'Coffee', image: coffeeImg },
  { title: 'Smoothie', image: smoothieImg },
  { title: 'Dessert', image: dessertImg },
  { title: 'Sandwich', image: sandwichImg },
  { title: 'Pancake', image: pancakeImg },
];

export default function WhatWeServed() {
  return (
    <section className="served-section">
      <h2 className="served-title">What We Served</h2>
      <div className="served-grid">
        {servedItems.map((item, index) => (
          <div className="served-card" key={index}>
            {/* <div className="served-image-wrapper"> */}
              <img src={item.image} alt={item.title} className="served-image"/>
            {/* </div> */}
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
