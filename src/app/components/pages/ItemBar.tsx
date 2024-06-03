import React from 'react';
import ImageCards from '../ItemsBar/ItemsBar';

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
    id: 2,
    images: ['/image12a.png', '/image12b.png', '/image12c.png'], 
    name: 'Item 2',
    timePosted: '5 hours ago',
    cost: '$200',
    poster: 'Seller 2',
  },
  {
    id: 3,
    images: ['/image3a.png', '/image3a.png'], 
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
    images: ['/image10b.png', '/image10d.png'], 
    name: 'Item 10',
    timePosted: '3 days ago',
    cost: '$250',
    poster: 'Seller 10',
  },
  {
    id: 11,
    images: ['/image11a.png', '/image11b.png'], 
    name: 'Item 9',
    timePosted: '3 days ago',
    cost: '$250',
    poster: 'Seller 9',
  },
  {
    id: 12,
    images: ['/image12a.png', '/image12b.png'], 
    name: 'Item 12',
    timePosted: '3 days ago',
    cost: '$250',
    poster: 'Seller 12',
  },
  {
    id: 13,
    images: ['/image13a.png', '/image13b.png'], 
    name: 'Item 13',
    timePosted: '3 days ago',
    cost: '$250',
    poster: 'Seller 13',
  },
  {
    id: 14,
    images: ['/image14a.png', '/image14b.png'], 
    name: 'Item 14',
    timePosted: '3 days ago',
    cost: '$250',
    poster: 'Seller 14',
  },
  {
    id: 15,
    images: ['/image15a.png', '/image15b.png'], 
    name: 'Item 15',
    timePosted: '3 days ago',
    cost: '$250',
    poster: 'Seller 15',
  },
  {
    id: 16,
    images: ['/image16a.png', '/image16b.png'], 
    name: 'Item 16',
    timePosted: '3 days ago',
    cost: '$250',
    poster: 'Seller 16',
  },
 
];

const ImageCardsPage: React.FC = () => {
  return (
    <div>
      <ImageCards items={items} />
    </div>
  );
};

export default ImageCardsPage;
