'use client'
import React, { useState } from 'react';
import Topbar from '../components/Topbar/Topbar';
import Pagebar from '../components/Pagebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import ImageCards from '../components/AutoImage/AutoImage';
import './page.module.css';
import Image from 'next/image';
import Footer from '../components/Footer/Footer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AutoPage: React.FC = () => {
    const itemsPerPage = 16; 
    const items = [
        {
          id: 21,
          images: ['/image21.png', '/image21a.png'],
          name: 'image 21',
          timePosted: '2 hours ago',
          cost: '$500,000',
          poster: 'John Doe',
        },
        {
          id: 22,
          images: ['/image22.png', '/image22a.png'],
          name: 'image 22',
          timePosted: '1 day ago',
          cost: '$800,000',
          poster: 'Jane Smith',
        },
        {
            id: 23,
            images: ['/image23.png', '/image23a.png'],
            name: 'image 23',
            timePosted: '1 day ago',
            cost: '$800,000',
            poster: 'Jane Smith',
          },
          {
            id: 24,
            images: ['/image24.png', '/image24a.png'],
            name: 'image 24',
            timePosted: '1 day ago',
            cost: '$800,000',
            poster: 'Jane Smith',
          },
          {
              id: 25,
              images: ['/image21.png', '/image21a.png'],
              name: 'image 25',
              timePosted: '2 hours ago',
              cost: '$500,000',
              poster: 'John Doe',
            },
            {
              id: 26,
              images: ['/image22.png', '/image22a.png'],
              name: 'image 26',
              timePosted: '1 day ago',
              cost: '$800,000',
              poster: 'Jane Smith',
            },
            {
                id: 27,
                images: ['/image23.png', '/image23a.png'],
                name: 'image 27',
                timePosted: '1 day ago',
                cost: '$800,000',
                poster: 'Jane Smith',
              },
              {
                id: 28,
                images: ['/image24.png', '/image24a.png'],
                name: 'image 28',
                timePosted: '1 day ago',
                cost: '$800,000',
                poster: 'Jane Smith',
              },
              {
                  id: 29,
                  images: ['/image21.png', '/image21a.png'],
                  name: 'image 29',
                  timePosted: '8 hours ago',
                  cost: '$500,000',
                  poster: 'John Doe',
                },
                {
                  id: 30,
                  images: ['/image22.png', '/image22a.png'],
                  name: 'image 30',
                  timePosted: '2 day ago',
                  cost: '$800,000',
                  poster: 'Jane Smith',
                },
                {
                  id: 21,
                  images: ['/image21.png', '/image21a.png'],
                  name: 'image 21',
                  timePosted: '2 hours ago',
                  cost: '$500,000',
                  poster: 'John Doe',
                },
                {
                  id: 22,
                  images: ['/image22.png', '/image22a.png'],
                  name: 'image 22',
                  timePosted: '1 day ago',
                  cost: '$800,000',
                  poster: 'Jane Smith',
                },
                {
                    id: 23,
                    images: ['/image23.png', '/image23a.png'],
                    name: 'image 23',
                    timePosted: '1 day ago',
                    cost: '$800,000',
                    poster: 'Jane Smith',
                  },
                  {
                    id: 24,
                    images: ['/image24.png', '/image24a.png'],
                    name: 'image 24',
                    timePosted: '1 day ago',
                    cost: '$800,000',
                    poster: 'Jane Smith',
                  },
                  {
                      id: 25,
                      images: ['/image21.png', '/image21a.png'],
                      name: 'image 25',
                      timePosted: '2 hours ago',
                      cost: '$500,000',
                      poster: 'John Doe',
                    },
                    {
                      id: 26,
                      images: ['/image22.png', '/image22a.png'],
                      name: 'image 26',
                      timePosted: '1 day ago',
                      cost: '$800,000',
                      poster: 'Jane Smith',
                    },
                    {
                        id: 27,
                        images: ['/image23.png', '/image23a.png'],
                        name: 'image 27',
                        timePosted: '1 day ago',
                        cost: '$800,000',
                        poster: 'Jane Smith',
                      },
                      {
                        id: 28,
                        images: ['/image24.png', '/image24a.png'],
                        name: 'image 28',
                        timePosted: '1 day ago',
                        cost: '$800,000',
                        poster: 'Jane Smith',
                      },
                      {
                          id: 29,
                          images: ['/image21.png', '/image21a.png'],
                          name: 'image 29',
                          timePosted: '8 hours ago',
                          cost: '$500,000',
                          poster: 'John Doe',
                        },
                        {
                          id: 30,
                          images: ['/image22.png', '/image22a.png'],
                          name: 'image 30',
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
            <Pagebar />
            <div style={{ display: 'flex' }}>
                <Sidebar />
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
export default AutoPage;
