// Footer.tsx
import React from 'react';
import styles from './Footer.module.css';
import { FaApple, FaGooglePlay, FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaPinterest, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Logo" width={'40'} height={'40'} />
          <div className={styles.appStore}>
            <div className={styles.more}>MORE</div>
            <div className={styles.classifiedText}>Classified</div>
          </div>
        </div>
        <div className={styles.classified}>
          <div className={styles.download}>
            <span>iOS App</span>
            <span>Android App</span>
          </div>
          <div className={styles.appIcons}>
            <Image src="/store1.png" alt="Logo" width={'90'} height={'60'} />
            <Image src="/play4.png" alt="Logo" width={'90'} height={'70'} />
          </div>
        </div>
        <div className={styles.socialMediaIcons}>
          <FaInstagram className={styles.socialMediaIcon} />
          <FaFacebook className={styles.socialMediaIcon} />
          <FaLinkedin className={styles.socialMediaIcon} />
          <FaTwitter className={styles.socialMediaIcon} />
          <FaPinterest className={styles.socialMediaIcon} />
          <FaTiktok className={styles.socialMediaIcon} />
        </div>
      </div>
      <div className={styles.column}>
        <h4 className={styles.h4}>More</h4>
        <ul className={styles.ul}>
          <li className={styles.li}><a href="#" className={styles.a}>About Us</a></li>
          <li className={styles.li}><a href="#" className={styles.a}>Premium Package</a></li>
          <li className={styles.li}><a href="#" className={styles.a}>Contact Us</a></li>
          <li className={styles.li}><a href="#" className={styles.a}>Advertise with More</a></li>
          
        </ul>
      </div>
      <div className={styles.column}>
        <h4 className={styles.h4}>Service</h4>
        <ul className={styles.ul}>
          <li className={styles.li}><a href="#" className={styles.a}>Online Advertisement</a></li>
          <li className={styles.li}><a href="#" className={styles.a}>Account Review</a></li>
          <li className={styles.li}><a href="#" className={styles.a}>Customer support</a></li>
          <li className={styles.li}><a href="#" className={styles.a}>SEO optimization</a></li>
          <li className={styles.li}><a href="#" className={styles.a}>Boost your Listings</a></li>
        </ul>
      </div>
      <div className={styles.column}>
        <h4 className={styles.h4}>Helpful</h4>
        <ul className={styles.ul}>
          <li className={styles.li}><a href="#" className={styles.a}>How to Make money</a></li>
          <li className={styles.li}><a href="#" className={styles.a}>Terms  $ Conditions</a></li>
          <li className={styles.li}><a href="#" className={styles.a}>Anti scam</a></li>
          <li className={styles.li}><a href="#" className={styles.a}>F.A.Q.</a></li>
        </ul>
      </div>
      <div className={styles.column}>
        <h4 className={styles.h4}>Legal</h4>
        <ul className={styles.ul}>
          <li className={styles.li}><a href="#" className={styles.a}>Privacy policy</a></li>
          <li className={styles.li}><a href="#" className={styles.a}>Terms and conditions</a></li>
          <li className={styles.li}><a href="#" className={styles.a}>Anti-scam tips</a></li>
          <li className={styles.li}><a href="#" className={styles.a}>Infringement policy</a></li>
          <li className={styles.li}><a href="#" className={styles.a}>EULA</a></li>
        </ul>
      </div>
      <div className={styles.navbar}>
      <button className={styles.sendMessageButton}>Send Message</button>
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
