import React from 'react';
import './GallerySection.css';
import img1 from '../../assets/GallerySection/gallery1.png';
import img2 from '../../assets/GallerySection/gallery2.png';
import img3 from '../../assets/GallerySection/gallery3.png';

const GallerySection = () => {
  return (
    <div className="gallery-section">
      <div className="gallery-grid">
        <img src={img1} alt="Gallery 1" />
        <img src={img2} alt="Gallery 2" />
        <img src={img3} alt="Gallery 3" />
      </div>
    </div>
  );
};

export default GallerySection;
