import React from 'react';
import styles from './HealthSidebar.module.css';
import Image from 'next/image';

const HealthSidebar: React.FC = () => {
    return (
        <div className={styles.gridcontainer}>
            <div className={styles.sidebar}>
                <h1 className={styles.header}>Health</h1>
                <ul className={styles.listingLinks}>
                    {Array.from({ length: 11 }).map((_, index) => (
                        <li key={index}>
                            <a href="#">Listing {index + 1}</a>
                        </li>
                    ))}
                </ul>
                <hr className={`${styles.horizontalLine} ${styles.thickLine}`} />
                <div className={styles.imageGrid}>
                    <div className={styles.imageGridItem}>
                        <Image src="/gride.png" alt="image1" width={300} height={600} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthSidebar;
