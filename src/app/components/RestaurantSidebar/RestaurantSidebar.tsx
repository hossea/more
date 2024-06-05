import React from 'react';
import styles from './RestaurantSidebar.module.css';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';

const RestaurantSidebar: React.FC = () => {
    return (
        <div className={styles.gridcontainer}>
        <div className={styles.sidebar}>
            <h1 className={styles.header}>Find Your Restaurant</h1>
            <div className={styles.dropdownContainer}>
                <h2 className={styles.subheader}>Restaurant Type</h2>
                <select className={styles.dropdownButton}>
                    <option value="house">Meals/Food</option>
                    <option value="apartment">Pizza</option>
                    <option value="condo">Sushi</option>
                    <option value="apartment">Burgers</option>
                    <option value="condo">Pilau Rice</option>
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
                        <option value="new-york">Nairobi</option>
                        <option value="los-angeles"> Nakuru</option>
                        <option value="chicago">Mombasa</option>
                        <option value="new-york">Naivasha</option>
                        <option value="los-angeles">Eldoret</option>
                        <option value="chicago">Kitale</option>
                    </select>
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.subheader}>Price Range</h2>
                    <select className={styles.dropdownButton}>
                        <option value="0-100k">$0 - $80</option>
                        <option value="100k-500k">$90 - $140</option>
                        <option value="500k-1M">$145 - $400</option>
                    </select>
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.subheader}>Price Range</h2>
                    <select className={styles.dropdownButton}>
                        <option value="0-100k">$0 - $100</option>
                        <option value="100k-500k">$100 - $500</option>
                        <option value="500k-1M">$500 - $700</option>
                    </select>
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.subheader}>Price Range</h2>
                    <select className={styles.dropdownButton}>
                        <option value="0-100k">$0 - $100</option>
                        <option value="100k-500k">$102 - $502</option>
                        <option value="500k-1M">$500 - $900</option>
                    </select>
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.subheader}>Price Range</h2>
                    <select className={styles.dropdownButton}>
                        <option value="0-100k">$0 - $101</option>
                        <option value="100k-500k">$102 - $502</option>
                        <option value="500k-1M">$508 - $1000</option>
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
export default RestaurantSidebar;