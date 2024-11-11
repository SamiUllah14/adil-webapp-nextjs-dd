// src/components/Banner/Banner.js
import React from 'react';
import './Banner.css';
import Image from 'next/image';  // Import Image from next/image
import bannerImage from '@/app/images/bannerImage.png';  // Import the image

const Banner = () => {
  return (
    <div className="banner lg:mt-10 mt-5">
      <Image
        src={bannerImage}  // Use the imported image here
        alt="Banner"
        className="banner-image"
        layout="responsive" // Optional, to make the image responsive
      />
    </div>
  );
};

export default Banner;
