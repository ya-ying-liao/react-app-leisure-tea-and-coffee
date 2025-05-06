import React from 'react';
import './HeroSection.css';

const HeroSection = ({image, title, subTitle, script, darken}) => {
  return (
    <div className="hero-section">
      <img src={image} alt="main image" className="hero-image" />
      {darken && <div className="hero-overlay" />}
      {/* <div className="hero-title">{title}</div> */}
      <h2 className="hero-script">{script}</h2>
      <h1 className="hero-title">{title}</h1>
      <p className="hero-subtitle">{subTitle}</p>
    </div>
  );
};

// const HeroSection = ({ image, title, subtitle, buttonText }) => {
//   return (
//     <div
//       className="w-full h-[300px] bg-cover bg-center flex flex-col items-center justify-center text-white text-center"
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       <h1 className="text-4xl font-bold">{title}</h1>
//       {subtitle && <p className="text-lg mt-2">{subtitle}</p>}
//       {buttonText && (
//         <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded">
//           {buttonText}
//         </button>
//       )}
//     </div>
//   );
// };

export default HeroSection;
