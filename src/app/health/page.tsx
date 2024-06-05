'use client'
import React, { useState } from 'react';
import Topbar from '../components/Topbar/Topbar';
import Healthbar from '../components/Healthbar/Healthbar';
import HealthSidebar from '../components/HealthSidebar/HealthSidebar';
import ImageCards from '../components/HealthImage/HealthImage';
import './page.module.css';
import Image from 'next/image';
import Footer from '../components/Footer/Footer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Health: React.FC = () => {
    const itemsPerPage = 16; 
    const items = [
        {
          id: 81,
          images: ['/image81a.png', '/image81b.png'],
          name: 'image 81',
          timePosted: '2 hours ago',
          cost: '$500,000',
          poster: 'John Doe',
        },
        {
          id: 82,
          images: ['/image82a.png', '/image82b.png'],
          name: 'image 82',
          timePosted: '1 day ago',
          cost: '$800,000',
          poster: 'Jane Smith',
        },
        {
            id: 83,
            images: ['/image83a.png', '/image83b.png'],
            name: 'image 83',
            timePosted: '1 day ago',
            cost: '$800,000',
            poster: 'Jane Smith',
          },
          {
            id: 84,
            images: ['/image84a.png', '/image84b.png'],
            name: 'image 84',
            timePosted: '1 day ago',
            cost: '$800,000',
            poster: 'Jane Smith',
          },
          {
              id: 85,
              images: ['/image85a.png', '/image85b.png'],
              name: 'image 85',
              timePosted: '2 hours ago',
              cost: '$500,000',
              poster: 'John Doe',
            },
            {
              id: 86,
              images: ['/image86a.png', '/image86b.png'],
              name: 'image 86',
              timePosted: '1 day ago',
              cost: '$800,000',
              poster: 'Jane Smith',
            },
            {
                id: 87,
                images: ['/image87a.png', '/image87b.png'],
                name: 'image 87',
                timePosted: '1 day ago',
                cost: '$800,000',
                poster: 'Jane Smith',
              },
              {
                id: 88,
                images: ['/image88a.png', '/image88b.png'],
                name: 'image 88',
                timePosted: '1 day ago',
                cost: '$800,000',
                poster: 'Jane Smith',
              },
              {
                  id: 89,
                  images: ['/image89a.png', '/image89b.png'],
                  name: 'image 89',
                  timePosted: '8 hours ago',
                  cost: '$500,000',
                  poster: 'John Doe',
                },
                {
                  id: 90,
                  images: ['/image90a.png', '/image90b.png'],
                  name: 'image 90',
                  timePosted: '2 day ago',
                  cost: '$800,000',
                  poster: 'Jane Smith',
                },
                {
                  id: 91,
                  images: ['/image91a.png', '/image91b.png'],
                  name: 'image 91',
                  timePosted: '2 hours ago',
                  cost: '$500,000',
                  poster: 'John Doe',
                },
                {
                  id: 92,
                  images: ['/image92a.png', '/image92b.png'],
                  name: 'image 92',
                  timePosted: '1 day ago',
                  cost: '$800,000',
                  poster: 'Jane Smith',
                },
                {
                    id: 93,
                    images: ['/image93a.png', '/image93b.png'],
                    name: 'image 93',
                    timePosted: '1 day ago',
                    cost: '$800,000',
                    poster: 'Jane Smith',
                  },
                  {
                    id: 94,
                    images: ['/image94a.png', '/imag94b.png'],
                    name: 'image 94',
                    timePosted: '1 day ago',
                    cost: '$800,000',
                    poster: 'Jane Smith',
                  },
                  {
                      id: 95,
                      images: ['/image95a.png', '/image95b.png'],
                      name: 'image 25',
                      timePosted: '2 hours ago',
                      cost: '$500,000',
                      poster: 'John Doe',
                    },
                    {
                      id: 96,
                      images: ['/image92b.png', '/image92a.png'],
                      name: 'image 26',
                      timePosted: '1 day ago',
                      cost: '$800,000',
                      poster: 'Jane Smith',
                    },
                    {
                        id: 97,
                        images: ['/image93a.png', '/image93b.png'],
                        name: 'image 97',
                        timePosted: '1 day ago',
                        cost: '$800,000',
                        poster: 'Jane Smith',
                      },
                      {
                        id: 98,
                        images: ['/image94a.png', '/image94b.png'],
                        name: 'image 98',
                        timePosted: '1 day ago',
                        cost: '$800,000',
                        poster: 'Jane Smith',
                      },
                      {
                          id: 99,
                          images: ['/image94a.png', '/image94b.png'],
                          name: 'image 99',
                          timePosted: '8 hours ago',
                          cost: '$500,000',
                          poster: 'John Doe',
                        },
                        {
                          id: 100,
                          images: ['/image91a.png', '/image91b.png'],
                          name: 'image 100',
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
            <Healthbar />
            <div style={{ display: 'flex' }}>
                <HealthSidebar />
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
export default Health;

