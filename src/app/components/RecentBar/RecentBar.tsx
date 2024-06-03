'use client'
import React from 'react';
import styles from './RecentBar.module.css';

interface Ad {
  id: number;
  title: string;
  timeAdded: string;
}

interface RecentBarProps {
  recentAds: Ad[];
}

const RecentBar: React.FC<RecentBarProps> = ({ recentAds = [] }) => {
  return (
    <div className={styles.recentBar}>
      <h2 className={styles.heading}>Recent Ads</h2>
      <ul className={styles.adList}>
        {recentAds.map(ad => (
          <li key={ad.id} className={styles.adItem}>
            <span className={styles.adTitle}>{ad.title}</span>
            <span className={styles.adTime}>{ad.timeAdded}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentBar;

