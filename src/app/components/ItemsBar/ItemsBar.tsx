'use client'
import React, { useState } from 'react';
import styles from './ItemsBar.module.css';
import { FaChevronLeft, FaChevronRight, FaUser } from 'react-icons/fa';
import Image from 'next/image';

interface Item {
  id: number;
  images: string[];
  name: string;
  timePosted: string;
  cost: string;
  poster: string;
}

interface ItemsBarProps {
  items: Item[];
}

const ItemsBar: React.FC<ItemsBarProps> = ({ items = [] }) => {
  const [currentSlide, setCurrentSlide] = useState<{ [key: number]: number }>(
    items.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {} as { [key: number]: number}));
  

  const nextSlide = (itemId: number, imagesLength: number) => {
    setCurrentSlide((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] + 1) % imagesLength,
    }));
  };

  const prevSlide = (itemId: number, imagesLength: number) => {
    setCurrentSlide((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] - 1 + imagesLength) % imagesLength,
    }));
  };

  return (
    <div className={styles.itemsBar}>
      {items.map((item) => (
        <div key={item.id} className={styles.card}>
          <div className={styles.imageSlider}>
            {item.images.length > 0 && (
              <>
                <Image
                  src={item.images[currentSlide[item.id] || 0]}
                  alt={item.name} width={300} height={400}
                  className={styles.image}
                />
                <button
                  className={`${styles.sliderButton} ${styles.prevButton}`}
                  onClick={() => prevSlide(item.id, item.images.length)}
                >
                  <FaChevronLeft />
                </button>
                <button
                  className={`${styles.sliderButton} ${styles.nextButton}`}
                  onClick={() => nextSlide(item.id, item.images.length)}
                >
                  <FaChevronRight />
                </button>
              </>
            )}
          </div>
          <h2 className={styles.name}>{item.name}</h2>
          <p className={styles.timePosted}>{item.timePosted}</p>
          <hr className={styles.separator} />
          <p className={styles.cost}>{item.cost}</p>
          <div className={styles.poster}>
            <FaUser className={styles.icon} />
            <span className={styles.posterName}>{item.poster}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsBar;
