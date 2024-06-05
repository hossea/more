'use client'
import React, { useState } from 'react';
import Topbar from '../components/Topbar/Topbar';
import Pagebar from '../components/Pagebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import ImageCards from '../components/AutoImage/AutoImage';
import './page.module.css';
import Footer from '../components/Footer/Footer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AutoPage: React.FC = () => {
    const itemsPerPage = 20; 
    const items = [
      {
        id: 1,
        images: ['/image1.png', '/image1a.png'], 
        name: 'Item 1',
        timePosted: '2 hours ago',
        cost: '$100',
        poster: 'Seller 1',
      },
      {
        id: 5,
        images: ['/image5a.png', '/image5b.png', '/image5c.png'], 
        name: 'Item 2',
        timePosted: '5 hours ago',
        cost: '$200',
        poster: 'Seller 2',
      },
      {
        id: 3,
        images: ['/image5d.png', '/image5e.png', '/image5d.png'], 
        name: 'Item 3',
        timePosted: '1 day ago',
        cost: '$150',
        poster: 'Seller 3',
      },
      {
        id: 4,
        images: ['/image4a.png', '/image4b.png'], 
        name: 'Item 4',
        timePosted: '3 days ago',
        cost: '$250',
        poster: 'Seller 4',
      },
      {
        id: 5,
        images: ['/image5a.png', '/image5b.png', '/image5c.png'], 
        name: 'Item 5',
        timePosted: '3 days ago',
        cost: '$250',
        poster: 'Seller 5',
      },
      {
        id: 6,
        images: ['/image6a.png', '/image6c.png'], 
        name: 'Item 6',
        timePosted: '3 days ago',
        cost: '$250',
        poster: 'Seller 6',
      },
      {
        id: 7,
        images: ['/image7a.png', '/image7b.png'], 
        name: 'Item 7',
        timePosted: '3 days ago',
        cost: '$250',
        poster: 'Seller 7',
      },
      {
        id: 8,
        images: ['/image8b.png', '/image8b.png'], 
        name: 'Item 8',
        timePosted: '3 days ago',
        cost: '$250',
        poster: 'Seller 8',
      },
      {
        id: 9,
        images: ['/image9a.png', '/image9a.png'], 
        name: 'Item 9',
        timePosted: '3 days ago',
        cost: '$250',
        poster: 'Seller 9',
      },
      {
        id: 10,
        images: ['/image5b.png', '/image5c.png'], 
        name: 'Item 10',
        timePosted: '3 days ago',
        cost: '$250',
        poster: 'Seller 10',
      },
      {
        id: 11,
        images: ['/image6d.png', '/image6e.png'], 
        name: 'Item 9',
        timePosted: '3 days ago',
        cost: '$250',
        poster: 'Seller 9',
      },
      {
        id: 12,
        images: ['/image21d.png', '/image21e.png'], 
        name: 'Item 12',
        timePosted: '3 days ago',
        cost: '$250',
        poster: 'Seller 12',
      },
      {
        id: 13,
        images: ['/image23d.png', '/image23e.png','/image23f.png'], 
        name: 'Item 13',
        timePosted: '3 days ago',
        cost: '$250',
        poster: 'Seller 13',
      },
      {
        id: 14,
        images: ['/image24d.png', '/image24e.png','/image24f.png'], 
        name: 'Item 14',
        timePosted: '3 days ago',
        cost: '$250',
        poster: 'Seller 14',
      },
      {
        id: 15,
        images: ['/image5d.png', '/image5e.png'], 
        name: 'Item 15',
        timePosted: '3 days ago',
        cost: '$250',
        poster: 'Seller 15',
      },
      {
        id: 16,
        images: ['/image21d.png', '/image21e.png'], 
        name: 'Item 16',
        timePosted: '3 days ago',
        cost: '$250',
        poster: 'Seller 16',
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
