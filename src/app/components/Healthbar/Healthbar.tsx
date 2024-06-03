import React from 'react';
import styles from './Healthbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Healthbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.name}>
        Health Ads
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
            Discover amazing services  <br />
            On premium Health
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.more}>www.more.co.ke</span>
        <span className={styles.phoneNumber}>+254-792-651-72</span>
        <Image src="/hosi.png" alt="" width={250} height={80} className={styles.userIcon} />
      </div>
    </nav>
  );
};
export default Healthbar;
