import React from 'react';
import RecentBar from '../components/RecentBar/RecentBar';

const ParentComponent: React.FC = () => {
  const recentAds = [
    { id: 1, title: 'New Bicycle', timeAdded: '2 hours ago' },
    { id: 2, title: 'iPhone for Sale', timeAdded: '3 hours ago' },
    { id: 3, title: 'House for Rent', timeAdded: '1 day ago' },
    
  ];

  return (
    <div>
      <h1>Welcome to Our Marketplace</h1>
      <RecentBar recentAds={recentAds} />
      
    </div>
  );
};

export default ParentComponent;
