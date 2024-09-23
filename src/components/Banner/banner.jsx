import './banner.css';
import React, { useState } from 'react';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startPosition, setStartPosition] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const images = [
        banner1,
        banner2
    ];

    const startDrag = (position) => {
        setStartPosition(position);
        setIsDragging(true);
    };

    const dragging = (position) => {
        if (isDragging) {
            const translate = position - startPosition;
            setCurrentTranslate(translate);
        }
    };

    const endDrag = () => {
        setIsDragging(false);
        if (currentTranslate < -100) {
            nextImage();
        } else if (currentTranslate > 100) {
            prevImage();
        }
        setCurrentTranslate(0); 
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <section className="banner-carousel">
            <div
                className="carousel-inner"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                onMouseDown={(e) => startDrag(e.clientX)}
                onMouseMove={(e) => dragging(e.clientX)}
                onMouseUp={endDrag}
                onTouchStart={(e) => startDrag(e.touches[0].clientX)}
                onTouchMove={(e) => dragging(e.touches[0].clientX)}
                onTouchEnd={endDrag}
            >
                {images.map((image, index) => (
                <div key={index} className="carousel-item" style={{ backgroundImage: `url(${image})` }}></div>
                ))}
            </div>

            <div className="carousel-indicators">
                {images.map((_, index) => (
                <div
                    key={index}
                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                ></div>
                ))}
            </div>
        </section>
    );
};

export default Banner;