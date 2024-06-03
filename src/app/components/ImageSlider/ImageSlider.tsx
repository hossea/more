'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './ImageSlider.module.css'; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import MainBar from '../MainBar/MainBar';

const ImageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: '/hise.png', text: '' },
    { src: '/fedex.png', text: '' },
    { src: '/furniture.png', text: '' },
    { src: '/salam.png', text: '' },
    { src: '/job.png', text: '' },
    { src: '/fud.png', text: '' },
    { src: '/dhl.png', text: '' },
    { src: '/menu.png', text: '' },
    { src: '/hosi.png', text: '' },
    { src: '/pizza.png', text: '' },
    { src: '/marks.png', text: '' },
    { src: '/arabfood.png', text: '' },
    { src: '/pizza.png', text: '' },
    { src: '/kista.png', text: '' },
    { src: '/fudi.png', text: '' }
  ];

  const totalSlides = images.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <div className={styles.sliderContainer}>
      <MainBar/>  
      <div className={styles.sliderWrapper}>
        <div className={styles.slider} ref={slideRef}>
        
          {images.map((image, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.imageContainer}>
                <Image src={image.src} alt={image.text} layout="fill" objectFit="cover" className={styles.image} />
                <div className={styles.overlay}>
                  
                  <div className={styles.textContainer}>
                    <p className={styles.cityText}>{image.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className={styles.prev}>
        <FaChevronLeft />
      </button>
      <button onClick={nextSlide} className={styles.next}>
        <FaChevronRight />
      </button>
      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
