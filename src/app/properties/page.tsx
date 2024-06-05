'use client'
import React, { useState } from 'react';
import Topbar from '../components/Topbar/Topbar';
import PropertiesSidebar from '../components/PropertiesSidebar/PropertiesSidebar';
import ImageCards from '../components/PropertiesImage/PropertiesImage';
import  './page.module.css';
import styles from './page.module.css';
import Footer from '../components/Footer/Footer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Properties: React.FC = () => {
    const itemsPerPage = 20; 
    const items = [
        {
          id: 31,
          images: ['/image31a.png', '/image31b.png'],
          name: 'image 31',
          timePosted: '2 hours ago',
          cost: '$500,000',
          poster: 'John Doe',
        },
        {
          id: 22,
          images: ['/image32a.png', '/image32b.png'],
          name: 'image 32',
          timePosted: '1 day ago',
          cost: '$800,000',
          poster: 'Jane Smith',
        },
        {
            id: 33,
            images: ['/image33a.png', '/image33b.png'],
            name: 'image 33',
            timePosted: '1 day ago',
            cost: '$800,000',
            poster: 'Jane Smith',
          },
          {
            id: 34,
            images: ['/image34a.png', '/image34b.png'],
            name: 'image 34',
            timePosted: '1 day ago',
            cost: '$800,000',
            poster: 'Jane Smith',
          },
          {
              id: 35,
              images: ['/image35a.png', '/image35b.png'],
              name: 'image 35',
              timePosted: '2 hours ago',
              cost: '$500,000',
              poster: 'John Doe',
            },
            {
              id: 36,
              images: ['/image36a.png', '/image36b.png'],
              name: 'image 36',
              timePosted: '1 day ago',
              cost: '$800,000',
              poster: 'Jane Smith',
            },
            {
                id: 37,
                images: ['/image37a.png', '/image37b.png'],
                name: 'image 37',
                timePosted: '1 day ago',
                cost: '$800,000',
                poster: 'Jane Smith',
              },
              {
                id: 38,
                images: ['/image38a.png', '/image39b.png'],
                name: 'image 39',
                timePosted: '1 day ago',
                cost: '$800,000',
                poster: 'Jane Smith',
              },
              {
                  id: 39,
                  images: ['/image39a.png', '/image39b.png'],
                  name: 'image 39',
                  timePosted: '8 hours ago',
                  cost: '$500,000',
                  poster: 'John Doe',
                },
                {
                  id: 40,
                  images: ['/image40a.png', '/image40b.png'],
                  name: 'image 30',
                  timePosted: '2 day ago',
                  cost: '$800,000',
                  poster: 'Jane Smith',
                },
                {
                  id: 41,
                  images: ['/image41a.png', '/image41b.png'],
                  name: 'image 41',
                  timePosted: '2 hours ago',
                  cost: '$500,000',
                  poster: 'John Doe',
                },
                {
                  id: 42,
                  images: ['/image42a.png', '/image42b.png'],
                  name: 'image 42',
                  timePosted: '1 day ago',
                  cost: '$800,000',
                  poster: 'Jane Smith',
                },
                {
                    id: 43,
                    images: ['/image43a.png', '/image43b.png'],
                    name: 'image 43',
                    timePosted: '1 day ago',
                    cost: '$800,000',
                    poster: 'Jane Smith',
                  },
                  {
                    id: 44,
                    images: ['/image44a.png', '/image44b.png'],
                    name: 'image 44',
                    timePosted: '1 day ago',
                    cost: '$800,000',
                    poster: 'Jane Smith',
                  },
                  {
                      id: 45,
                      images: ['/image45a.png', '/image45b.png'],
                      name: 'image 45',
                      timePosted: '2 hours ago',
                      cost: '$500,000',
                      poster: 'John Doe',
                    },
                    {
                      id: 46,
                      images: ['/image46a.png', '/image46b.png'],
                      name: 'image 46',
                      timePosted: '1 day ago',
                      cost: '$800,000',
                      poster: 'Jane Smith',
                    },
                    {
                        id: 47,
                        images: ['/image47a.png', '/image47b.png'],
                        name: 'image 27',
                        timePosted: '1 day ago',
                        cost: '$800,000',
                        poster: 'Jane Smith',
                      },
                      {
                        id: 48,
                        images: ['/image48a.png', '/image48b.png'],
                        name: 'image 28',
                        timePosted: '1 day ago',
                        cost: '$800,000',
                        poster: 'Jane Smith',
                      },
                      {
                          id: 49,
                          images: ['/image49a.png', '/image49b.png'],
                          name: 'image 49',
                          timePosted: '8 hours ago',
                          cost: '$500,000',
                          poster: 'John Doe',
                        },
                        {
                          id: 50,
                          images: ['/image50a.png', '/image50b.png'],
                          name: 'image 50',
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
    <Topbar/>
    
    <div style={{ display: 'flex' }}>
    <PropertiesSidebar />
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

export default Properties;
