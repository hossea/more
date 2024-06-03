'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './PropertiesImage.module.css';
import { FaChevronLeft, FaChevronRight, FaUser } from 'react-icons/fa';

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

const PropertiesImage: React.FC<ItemsBarProps> = ({ items = [] }) => {
  const [currentSlide, setCurrentSlide] = useState<{ [key: number]: number }>(
    items.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {} as { [key: number]: number })
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(items.length / itemsPerPage);

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

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className={styles.itemsBar}>
        {currentItems.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageSlider}>
              {item.images.length > 0 && (
                <>
                  <Image
                    src={`/images/${item.images[currentSlide[item.id] || 0]}`}
                    alt={item.name}
                    className={styles.image}
                    width={300}
                    height={200}
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
      <div className={styles.pagination}>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`${styles.pageButton} ${currentPage === i + 1 ? styles.active : ''}`}
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertiesImage;