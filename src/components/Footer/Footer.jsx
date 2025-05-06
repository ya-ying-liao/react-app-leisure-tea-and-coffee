import React from 'react';
import { Facebook } from 'lucide-react'; // 引用 Facebook icon
import './Footer.css'; // 記得自己寫一個 Footer.css 來控制樣式

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* 左邊 - 地址 */}
        <div className="footer-column">
          {/* 第一列 - Logo + FB icon */}
          <div className="footer-logo-row">
            <h2 className="logo-text">Leisure Tea & Coffee</h2>
            <a href="https://www.facebook.com/LeisureTeaCoffee/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Facebook size={24} />
            </a>
          </div>

          {/* 第二列 - Phone */}
          <div className="footer-info">
            <p>(604) 821-9998</p>
          </div>

          {/* 第三列 - Address */}
          <div className="footer-info">
            <p>8391 Alexandra Rd # 1110, Richmond, BC, Canada</p>
          </div>
        </div>

        {/* 右邊 - 營業時間 + FB icon */}
        <div className="footer-column">
          <h3>Working Hours</h3>
          <p>Sunday - Thursday: Noon - 10:00 PM</p>
          <p>Friday - Saturday: Noon - 11:00 PM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
