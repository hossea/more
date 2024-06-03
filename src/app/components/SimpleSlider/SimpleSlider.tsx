'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './SimpleSlider.module.css';
import { FaChevronLeft, FaChevronRight, FaMobileAlt, FaBicycle, FaGift, FaCouch, FaDog, FaTshirt, FaBriefcase, FaSpa, FaHandsHelping, FaBookOpen, FaCalendarAlt, FaHotel, FaFilm, FaTools } from 'react-icons/fa';

const SimpleSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const cards = [
    { icon: <FaMobileAlt />, text: 'Electronics', adsCount: 10, link: '#' },
    { icon: <FaBicycle />, text: 'Bicycles', adsCount: 8, link: '#' },
    { icon: <FaGift />, text: 'Gifts', adsCount: 12, link: '#' },
    { icon: <FaCouch />, text: 'Furniture', adsCount: 5, link: '#' },
    { icon: <FaDog />, text: 'Animals & Pets', adsCount: 15, link: '#' },
    { icon: <FaTshirt />, text: 'Fashion', adsCount: 7, link: '#' },
    { icon: <FaBriefcase />, text: 'Jobs', adsCount: 9, link: '#' },
    { icon: <FaSpa />, text: 'Beauty', adsCount: 6, link: '#' },
    { icon: <FaHandsHelping />, text: 'Service', adsCount: 8, link: '#' },
    { icon: <FaBookOpen />, text: 'Learning', adsCount: 11, link: '#' },
    { icon: <FaCalendarAlt />, text: 'Local Events', adsCount: 13, link: '#' },
    { icon: <FaHotel />, text: 'Hotel Booking', adsCount: 4, link: '#' },
    { icon: <FaFilm />, text: 'Books & Movies', adsCount: 6, link: '#' },
    { icon: <FaTools />, text: 'Professional Services', adsCount: 5, link: '#' },
    
  ];

  const totalCards = cards.length;
  const cardsPerSlide = 5;
  const totalSlides = Math.ceil(totalCards / cardsPerSlide);
  const nextSlide = () => {
    setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? totalSlides - 2 : prev - 2));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentSlide * 110}%)`;
    }
  }, [currentSlide]);
  useEffect(() => {
    const handleScroll = () => {
      if (headingRef.current) {
        const headingTop = headingRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (headingTop < windowHeight - 50) {
          headingRef.current.classList.add(styles.visible);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={styles.sliderContainer}>
      <h2 ref={headingRef} className={styles.heading}>Ad Categories</h2>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider} ref={slideRef}>
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className={styles.slide}>
              {cards.slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide).map((card, index) => (
                <a key={index} href={card.link} className={styles.card}>
                  <div className={styles.icon}>{card.icon}</div>
                  <p className={styles.text}>{card.text}</p>
                  <p className={styles.adsCount}>{`Ads: ${card.adsCount}`}</p>
                </a>
              ))}
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
    </div>
  );
};
export default SimpleSlider;

