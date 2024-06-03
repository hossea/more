import React from 'react';
import styles from './TwoHeaders.module.css';

const TwoHeaders: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.smallHeader}>Buy & Sell Anything, Anywhere</h1>
      <h2 className={styles.bigHeader}> Trending Ads</h2>
    </div>
  );
};

export default TwoHeaders;
