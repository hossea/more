import React from 'react';
import styles from './Restaurantbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Restaurantbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.name}>
        Restaurant Ads
      </div>
      <div className={styles.left}>
        <Link href="/">
          <span className={styles.home}>Home</span>
        </Link>
        <span className={styles.autoAds}>Restaurant Ads</span>
      </div>
      <div className={styles.center}>
        <div className={styles.imageContainer}>
          <div className={styles.subtitle}>
            Experience Incredible value <br />
            at High-end restaurant
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.more}>www.more.co.ke</span>
        <span className={styles.phoneNumber}>123-456-7890</span>
        <Image src="/arabfood.png" alt="" width={300} height={300} className={styles.userIcon} />
      </div>
    </nav>
  );
};
export default Restaurantbar;
