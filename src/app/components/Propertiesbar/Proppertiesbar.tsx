import React from 'react';
import styles from './Storebar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Storebar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.name}>
        Auto Ads
      </div>
      <div className={styles.left}>
        <Link href="/">
          <span className={styles.home}>Home</span>
        </Link>
        <span className={styles.autoAds}>Auto Ads</span>
      </div>
      <div className={styles.center}>
        <div className={styles.imageContainer}>
          <Image src="/man.png" alt="" width={300} height={50} className={styles.logo} />
          <div className={styles.subtitle}>
            Unlock Great deals on <br />
            Quality cars
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.more}>www.more.co.ke</span>
        <span className={styles.phoneNumber}>123-456-7890</span>
        <Image src="/car2.png" alt="" width={300} height={50} className={styles.userIcon} />
      </div>
    </nav>
  );
};
export default Storebar;
