'use client'
import React from 'react';
import styles from './MainBar.module.css';
import Link  from 'next/link';
import { FaSearch } from 'react-icons/fa';
const MainBar: React.FC = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.mainBar}>
        <div className={styles.searchContainer}>
          <input type="text" className={styles.searchInput} placeholder="Search Ads..." />
          <button className={styles.searchButton}>
            <FaSearch />
            Search
          </button>
        </div>
        <div className={styles.dropdownContainer}>
          <select className={styles.dropdown}  onChange={(e) => {
              if (e.target.value) {
                window.location.href = `/${e.target.value}`;
              }
            }}>
            <option value="">--Select categories--</option>
            <option value="Furniture">Furniture & Home appliances</option>
            <option value="Animals">Animals & Pets</option>
            <option value="Fashion">Fashion</option>
            <option value="Beauty">Beauty & well being</option>
            <option value="Jobs">Jobs</option>
            <option value="Services">Services</option>
            <option value="Learning">Learning</option>
            <option value="Locals">Locals</option>
            <option value="Hotel">Hotel Booking</option>
            <option value="Books">Books & Movies</option>
            <option value="Services">Professional Services</option>
            <option value="Banking">Banking and financial services</option>
            <option value="Handy">Fundi, Handy</option>
            <option value="Sporting">Sporting goods</option>
            <option value="Gifts">Gifts</option>
            <option value="Electronics">Electronics</option>
            <option value="Bicycles">Bicycles</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default MainBar;

