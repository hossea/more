'use client';
import React from 'react';
import Topbar from '../components/Topbar/Topbar';
import ImageCards from '../components/StoreImage/StoreImage';
import './page.module.css';
import Footer from '../components/Footer/Footer';

const Store: React.FC = () => {
    const items = [
        {
          id: 21,
          images: ['/image001.png'],
          name: 'image 21',
          timePosted: '2 hours ago',
          cost: '',
          poster: '',
        },
        {
          id: 22,
          images: ['/image001.png'],
          name: 'image 22',
          timePosted: '1 day ago',
          cost: '',
          poster: '',
        },
        {
            id: 23,
            images: ['/image001.png'],
            name: 'image 23',
            timePosted: '1 day ago',
            cost: '',
            poster: '',
          },
          {
            id: 24,
            images: ['/headphone.png'],
            name: 'image 24',
            timePosted: '1 day ago',
            cost: '',
            poster: '',
          },
          {
              id: 25,
              images: ['/kalsana.png'],
              name: 'image 25',
              timePosted: '2 hours ago',
              cost: '',
              poster: '',
            },
            {
              id: 26,
              images: ['/rant.png'],
              name: 'image 26',
              timePosted: '1 day ago',
              cost: '',
              poster: '',
            },
            {
                id: 27,
                images: ['/motor.png'],
                name: 'image 27',
                timePosted: '1 day ago',
                cost: '',
                poster: '',
              },
              {
                id: 28,
                images: ['/medic.png'],
                name: 'image 28',
                timePosted: '1 day ago',
                cost: '',
                poster: '',
              },
    ];

    return (
        <div>
            <Topbar />
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <ImageCards items={items} />
                </div>
            </div>
            <hr style={{ width: '100%', height: '2px', color: 'black', backgroundColor: 'black' }} />
            <p style={{ textAlign: 'center', fontSize: '40px', fontFamily: 'sans' }}>Our top Stories</p>
            <Footer />
        </div>
    );
};
export default Store;

