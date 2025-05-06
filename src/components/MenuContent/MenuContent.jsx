import React, { useState, useEffect, useRef } from 'react';
import './MenuContent.css';

export default function MenuContent({ activeTab }) {
    // 動態載入 food 圖片
    const foodImages = import.meta.glob('/src/assets/MenuContent/food/*.png', {
        eager: true,
        import: 'default'
    });

    // 動態載入 drinks 圖片
    const drinkImages = import.meta.glob('/src/assets/MenuContent/drinks/*.png', {
        eager: true,
        import: 'default'
    });

    const imageList = activeTab === 'food'
        ? Object.values(foodImages)
        : Object.values(drinkImages);

    const [currentIndex, setCurrentIndex] = useState(null);

    const lightboxImageRef = useRef(null);

    // ❗控制滾動
    useEffect(() => {
        document.body.style.overflow = currentIndex !== null ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [currentIndex]);

    // 點擊外部關閉
    const handleOverlayClick = (e) => {
        if (lightboxImageRef.current && !lightboxImageRef.current.contains(e.target)) {
            setCurrentIndex(null);
        }
    };

    // ❗切換左右圖片
    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="menu-content">
            <div className="menu-frame">
                {/* <h2 className="menu-title">{activeTab === 'food' ? '美味料理' : '精選飲品'}</h2> */}
                <div className="image-grid">
                    {imageList.map((src, index) => (
                        <img key={index} src={src} alt={`menu-item-${index}`} className="menu-grid-image" onClick={() => setCurrentIndex(index)} />
                    ))}
                </div>

                {currentIndex !== null && (
                    <div className="lightbox" onClick={handleOverlayClick}>
                        <button className="arrow left" onClick={prevImage}>‹</button>
                        <img
                            src={imageList[currentIndex]}
                            alt="放大圖"
                            className="lightbox-image"
                            ref={lightboxImageRef}
                        />
                        <button className="arrow right" onClick={nextImage}>›</button>
                    </div>
                )}
            </div>
        </div>
    );
}
