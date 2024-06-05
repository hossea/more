'use client'
import React, { useState } from 'react';
import Topbar from '../components/Topbar/Topbar';
import Restaurantbar from '../components/Restaurantbar/Restaurantbar';
import RestaurantSidebar from '../components/RestaurantSidebar/RestaurantSidebar';
import ImageCards from '../components/RestaurantImage/RestaurantImage';
import './page.module.css';
import Footer from '../components/Footer/Footer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Restaurant: React.FC = () => {
    const itemsPerPage = 20; 
    const items = [
        {
          id: 61,
          images: ['/image61a.png', '/image61b.png'],
          name: 'image 61',
          timePosted: '2 hours ago',
          cost: '$500,000',
          poster: 'John Doe',
        },
        {
          id: 62,
          images: ['/image62a.png', '/image62b.png'],
          name: 'image 62',
          timePosted: '1 day ago',
          cost: '$800,000',
          poster: 'Jane Smith',
        },
        {
            id: 63,
            images: ['/image63a.png', '/image63b.png'],
            name: 'image 63',
            timePosted: '1 day ago',
            cost: '$800,000',
            poster: 'Jane Smith',
          },
          {
            id: 64,
            images: ['/image64a.png', '/image64b.png'],
            name: 'image 64',
            timePosted: '1 day ago',
            cost: '$800,000',
            poster: 'Jane Smith',
          },
          {
              id: 65,
              images: ['/image65a.png', '/image65b.png'],
              name: 'image 65',
              timePosted: '2 hours ago',
              cost: '$500,000',
              poster: 'John Doe',
            },
            {
              id: 66,
              images: ['/image66a.png', '/image66b.png'],
              name: 'image 66',
              timePosted: '1 day ago',
              cost: '$800,000',
              poster: 'Jane Smith',
            },
            {
                id: 67,
                images: ['/image67a.png', '/image67b.png'],
                name: 'image 67',
                timePosted: '1 day ago',
                cost: '$800,000',
                poster: 'Jane Smith',
              },
              {
                id: 68,
                images: ['/image68a.png', '/image68b.png'],
                name: 'image 68',
                timePosted: '1 day ago',
                cost: '$800,000',
                poster: 'Jane Smith',
              },
              {
                  id: 69,
                  images: ['/image69a.png', '/image69b.png'],
                  name: 'image 69',
                  timePosted: '8 hours ago',
                  cost: '$500,000',
                  poster: 'John Doe',
                },
                {
                  id: 70,
                  images: ['/image70a.png', '/image70b.png'],
                  name: 'image 70',
                  timePosted: '2 day ago',
                  cost: '$800,000',
                  poster: 'Jane Smith',
                },
                {
                  id: 71,
                  images: ['/image71a.png', '/image71b.png'],
                  name: 'image 71',
                  timePosted: '2 hours ago',
                  cost: '$500,000',
                  poster: 'John Doe',
                },
                {
                  id: 72,
                  images: ['/image72a.png', '/image72b.png'],
                  name: 'image 22',
                  timePosted: '1 day ago',
                  cost: '$800,000',
                  poster: 'Jane Smith',
                },
                {
                    id: 73,
                    images: ['/image73a.png', '/image73b.png'],
                    name: 'image 73',
                    timePosted: '1 day ago',
                    cost: '$800,000',
                    poster: 'Jane Smith',
                  },
                  {
                    id: 74,
                    images: ['/image74a.png', '/image74b.png'],
                    name: 'image 74',
                    timePosted: '1 day ago',
                    cost: '$800,000',
                    poster: 'Jane Smith',
                  },
                  {
                      id: 75,
                      images: ['/image75a.png', '/image75b.png'],
                      name: 'image 75',
                      timePosted: '2 hours ago',
                      cost: '$500,000',
                      poster: 'John Doe',
                    },
                    {
                      id: 76,
                      images: ['/image76a.png', '/image76b.png'],
                      name: 'image 76',
                      timePosted: '1 day ago',
                      cost: '$800,000',
                      poster: 'Jane Smith',
                    },
                    {
                        id: 77,
                        images: ['/image77a.png', '/image77b.png'],
                        name: 'image 77',
                        timePosted: '1 day ago',
                        cost: '$800,000',
                        poster: 'Jane Smith',
                      },
                      {
                        id: 78,
                        images: ['/image78a.png', '/image78b.png'],
                        name: 'image 78',
                        timePosted: '1 day ago',
                        cost: '$800,000',
                        poster: 'Jane Smith',
                      },
                      {
                          id: 79,
                          images: ['/image79a.png', '/image79b.png'],
                          name: 'image 79',
                          timePosted: '8 hours ago',
                          cost: '$500,000',
                          poster: 'John Doe',
                        },
                        {
                          id: 80,
                          images: ['/image80a.png', '/image80b.png'],
                          name: 'image 80',
                          timePosted: '2 day ago',
                          cost: '$800,000',
                          poster: 'Jane Smith',
                        },
              ];
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const currentItems = items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <div>
            <Topbar />
            <Restaurantbar />
            <div style={{ display: 'flex' }}>
                <RestaurantSidebar />
                <div style={{ flex: 1 }}>
                    <ImageCards items={currentItems} />
                </div>
                
            </div>
            
            {totalPages > 1 && (
                <div className="pagination">
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        <FaChevronLeft />
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
                        <button key={page} onClick={() => handlePageChange(page)} className={currentPage === page ? 'active' : ''}>
                            {page}
                        </button>
                    ))}
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        <FaChevronRight />
                    </button>
                </div>
            )}
            <hr style={{width: '100%', height: '2px', color: 'black', backgroundColor: 'black'}} />
            <p style={{textAlign: 'center', margin: '40px', fontSize: '40px',fontFamily: 'sans'}}>Our top Stories</p>
            <Footer />
        </div>
    );
};
export default Restaurant;
