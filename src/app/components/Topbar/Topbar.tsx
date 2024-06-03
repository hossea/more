'use client'
import React from 'react';
import styles from './Topbar.module.css'; 
import Image from 'next/image';
import { FaPlusCircle } from 'react-icons/fa';
import Link from 'next/link';

const Topbar: React.FC = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.logoContainer}>
        <Image src="/logo.png" alt="Logo" width={40} height={40} className='border-radius-50'/>
        <div className={styles.logoText}>
          <span className={styles.logoMore}>MORE</span>
          <span className={styles.logoClassified}>classified</span>
        </div>
      </div>
      <nav className={styles.nav}>
        <Link href="/auto">AUTO</Link>
        <Link href="/properties">PROPERTIES</Link>
        <Link href="/restaurant">RESTAURANT</Link>
        <Link href="/health">HEALTH</Link>
        <Link href="/store">STORE</Link>
        <Link href="/blog">BLOG</Link>
      </nav>
      <button className={styles.contactButton}>
        <FaPlusCircle className={styles.icon} /> Sell
      </button>
    </div>
  );
};

export default Topbar;
