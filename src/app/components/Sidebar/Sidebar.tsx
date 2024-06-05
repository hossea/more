import React from 'react';
import styles from './Sidebar.module.css';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';

const Sidebar: React.FC = () => {
    return (
        <div className={styles.gridcontainer}>
        <div className={styles.sidebar}>
            <h1 className={styles.header}>Find Your Property</h1>
            <div className={styles.dropdownContainer}>
                <h2 className={styles.subheader}>Property Type</h2>
                <select className={styles.dropdownButton}>
                    <option value="house">Cars</option>
                    <option value="apartment">Toyota</option>
                    <option value="condo">Isuzu</option>
                    <option value="apartment">Toyota1</option>
                   
                </select>
            </div>
            <div className={styles.searchContainer}>
                <input 
                    type="text" 
                    className={styles.searchInput} 
                    placeholder="Search..."
                />
                <FaSearch className={styles.searchIcon} />
            </div>
            <hr className={styles.horizontalLine} />
            <h2 className={styles.subheader}>Dropdown Section</h2>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                    <h2 className={styles.subheader}>Location</h2>
                    <select className={styles.dropdownButton}>
                        <option value="new-york">New York</option>
                        <option value="los-angeles">Los Angeles</option>
                        <option value="chicago">Chicago</option>
                    </select>
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.subheader}>Price Range</h2>
                    <select className={styles.dropdownButton}>
                        <option value="0-100k">$0 - $100k</option>
                        <option value="100k-500k">$100k - $500k</option>
                        <option value="500k-1M">$500k - $1M</option>
                    </select>
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.subheader}>Price Range</h2>
                    <select className={styles.dropdownButton}>
                        <option value="0-100k">$0 - $100k</option>
                        <option value="100k-500k">$100k - $500k</option>
                        <option value="500k-1M">$500k - $1M</option>
                    </select>
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.subheader}>Price Range</h2>
                    <select className={styles.dropdownButton}>
                        <option value="0-100k">$0 - $100k</option>
                        <option value="100k-500k">$100k - $500k</option>
                        <option value="500k-1M">$500k - $1M</option>
                    </select>
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.subheader}>Price Range</h2>
                    <select className={styles.dropdownButton}>
                        <option value="0-100k">$0 - $100k</option>
                        <option value="100k-500k">$100k - $500k</option>
                        <option value="500k-1M">$500k - $1M</option>
                    </select>
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.subheader}>Price Range</h2>
                    <select className={styles.dropdownButton}>
                        <option value="0-100k">$0 - $100k</option>
                        <option value="100k-500k">$100k - $500k</option>
                        <option value="500k-1M">$500k - $1M</option>
                    </select>
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.subheader}>Price Range</h2>
                    <select className={styles.dropdownButton}>
                        <option value="0-100k">$0 - $100k</option>
                        <option value="100k-500k">$100k - $500k</option>
                        <option value="500k-1M">$500k - $1M</option>
                    </select>
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.subheader}>Price Range</h2>
                    <select className={styles.dropdownButton}>
                        <option value="0-100k">$0 - $100k</option>
                        <option value="100k-500k">$100k - $500k</option>
                        <option value="500k-1M">$500k - $1M</option>
                    </select>
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.subheader}>Price Range</h2>
                    <select className={styles.dropdownButton}>
                        <option value="0-100k">$0 - $100k</option>
                        <option value="100k-500k">$100k - $500k</option>
                        <option value="500k-1M">$500k - $1M</option>
                    </select>
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.subheader}>Price Range</h2>
                    <select className={styles.dropdownButton}>
                        <option value="0-100k">$0 - $100k</option>
                        <option value="100k-500k">$100k - $500k</option>
                        <option value="500k-1M">$500k - $1M</option>
                    </select>
                </div>
            </div>
            <hr className={styles.horizontalLine} />
            <h2 className={styles.header}>More Options</h2>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                    <button className={styles.button}>Option 1</button>
                </div>
                <div className={styles.gridItem}>
                    <button className={styles.button}>Option 2</button>
                </div>
            </div>
            <div className={styles.searchContainer}>
                <input 
                    type="text" 
                    className={styles.searchInput} 
                    placeholder="Search..."
                />
                <FaSearch className={styles.searchIcon} />
            </div>

            <hr className={`${styles.horizontalLine} ${styles.thickLine}`} />
            <h2 className={styles.header}>Listings</h2>
            <ul className={styles.listingLinks}>
                {Array.from({ length: 15 }).map((_, index) => (
                    <li key={index}>
                        <a href="#">Listing {index + 1}</a>
                    </li>
                ))}
            </ul>
            <hr className={`${styles.horizontalLine} ${styles.thickLine}`} />
            <div className={styles.imageGrid}>
                <div className={styles.imageGridItem}>
                    <Image src="/gride.png" alt="image1"  width={300} height={600}/>
                </div>
            </div>
        </div>
        </div>
    );
};
export default Sidebar;

