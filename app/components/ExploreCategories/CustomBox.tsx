'use client'; // Ensures this component is treated as a Client Component

import React from 'react';
import './CustomFeatureBox.css';
import CardFeature from '../Cards/CardCategory/CardFeature';
import { HiArrowRight } from 'react-icons/hi'; // Import the right arrow icon
import LineComponent from '../LineComponent/LineComponent';

// Sample data
const sampleData = [
  { title: 'Category 1', imageUrl: 'https://via.placeholder.com/250' },
  { title: 'Category 2', imageUrl: 'https://via.placeholder.com/250' },
  { title: 'Category 3', imageUrl: 'https://via.placeholder.com/250' },
  { title: 'Category 4', imageUrl: 'https://via.placeholder.com/250' },
  { title: 'Category 5', imageUrl: 'https://via.placeholder.com/250' }  ,
  { title: 'Category 6', imageUrl: 'https://via.placeholder.com/250' },
  { title: 'Category 7', imageUrl: 'https://via.placeholder.com/250' },
  { title: 'Category 8', imageUrl: 'https://via.placeholder.com/250' }


];

const CustomFeatureBox = () => {
  // Click handler function
  const handleCardClick = (title: string) => {
    console.log(`Card clicked: ${title}`);
    // You can replace this with navigation or any other logic
  };

  return (
    <>
    <div className='mb-5'>
    <LineComponent text="Explore Categories" />
    </div>
 
    
    <div className="feature-box">


      <div className="cardboxes bg-white">
        {sampleData.map((data, index) => (
          <CardFeature
            key={index}
            title={data.title}
            imageUrl={data.imageUrl}
            onClick={() => handleCardClick(data.title)} // Pass the click handler to each card
          />
        ))}
      </div>
      <div className="viewMoreCategoriesLink">
        <a href="#">Explore More Categories</a>
        <HiArrowRight style={{ marginLeft: '8px', fontSize: '1.2rem' }} /> {/* Right arrow icon */}
      </div>
    </div></>
  );
}

export default CustomFeatureBox;
