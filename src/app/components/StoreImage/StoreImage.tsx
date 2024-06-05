'use client';
import Image from 'next/image';
import React from 'react';
import styles from './StoreImage.module.css';
import { FaUser } from 'react-icons/fa';

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
const StoreImage: React.FC<ItemsBarProps> = ({ items = [] }) => {
  return (
    <div>
      <div className={styles.itemsBar}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageSlider}>
              {item.images.length > 0 && (
                <Image src={item.images[0]} alt={item.name}
                  className={styles.image}
                  width={300} height={200} layout="responsive"/>
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
    </div>
  );
};
export default StoreImage;
