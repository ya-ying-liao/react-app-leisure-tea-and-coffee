import React from 'react';
import './ReviewSection.css';
import { useState } from 'react';
import reviewImage from '../../assets/ReviewSection/review-image.jpg'; // 中間圖片
import { ChevronLeft, ChevronRight } from 'lucide-react'; // 可用 lucide-react 或圖片 icon
import { motion } from 'framer-motion';

const reviews = [
  {
    text: "This is a nice cafe with plenty of choices of Taiwanese foods and drinks. The interior has a wooden hut theme like an old wooden inn in a small town. The vibes is warm and comfy with good service. <br /><br />I usually come here for Taiwanese style milk tea and snacks. The Taiwanese chicken sandwiches is one of my favourite foods.",
    name: "— Elton Chung"
  },
  {
    text: "Good place to enjoy tea, coffee and dessert. This has always been my go to place for desert for the past 2Years. Nice atmosphere to sit down and talk. My favorite is the chocolate coffee.",
    name: "— Aminul Huq"
  },
  {
    text: "The taste and vibe is timeless. Thank you for keeping the way it is since I first visited as a teen. The shave ice is pack with toppings and it is perfectly pair with syrup. Is a cute place to gather and converse.",
    name: "— K Cheung"
  }
];

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');


  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentReview = reviews[currentIndex];


  return (
    <div className="review-section">

      <div className="review-title">
        <h1>What Our </h1>
        <h1>Customers Say</h1>
      </div>

      <div className="review-image">
        <img src={reviewImage} alt="Customer" />
      </div>

      <div className="review-content">
      <motion.div
        key={currentIndex} // 每次索引变化时触发动画
        initial={{ opacity: 0 }} // 初始状态：完全透明
        animate={{ opacity: 1 }}  // 动画结束时，完全显示
        exit={{ opacity: 0 }}    // 离开时，完全透明
        transition={{ duration: 0.6 }} // 动画持续时间
      >

          <div className="review-stars">
            ⭐ ⭐ ⭐ ⭐ ⭐
          </div>
          <p className="review-text" dangerouslySetInnerHTML={{ __html: currentReview.text }} />

          <hr />
          <p className="review-name">{currentReview.name}</p>


          <div className="review-nav-buttons">
            <button onClick={handlePrev}><ChevronLeft size={20} /></button>
            <button onClick={handleNext}><ChevronRight size={20} /></button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewSection;
