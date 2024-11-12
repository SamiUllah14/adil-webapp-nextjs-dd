"use client";

import React from 'react';
import LineComponent from '../LineComponent/LineComponent';
import SellingProductCard from '../Cards/SellingProductCard/SellingProductCard';
import CustomButton from '../CustomButton/CustomButton';

interface Product {
  imageUrl: string;
  title: string;
  price: number;
  originalPrice: number;
  discountLabel: string;
}

const sampleProducts: Product[] = [
  {
    imageUrl: "https://placehold.co/300x200",
    title: "Risek Insta (20mg) 10 Sachets",
    price: 21.31,
    originalPrice: 23.68,
    discountLabel: "10% OFF",
  },
  {
    imageUrl: "https://placehold.co/300x200",
    title: "Panadol Extra (500mg) 24 Tablets",
    price: 15.0,
    originalPrice: 18.0,
    discountLabel: "17% OFF",
  },
  {
    imageUrl: "https://placehold.co/300x200",
    title: "Vitamin C Tablets (1000mg) - 60 Capsules",
    price: 12.5,
    originalPrice: 15.0,
    discountLabel: "15% OFF",
  },
  {
    imageUrl: "https://placehold.co/300x200",
    title: "Fish Oil Omega-3 - 100 Softgels",
    price: 25.0,
    originalPrice: 30.0,
    discountLabel: "20% OFF",
  },
  {
    imageUrl: "https://placehold.co/300x200",
    title: "Vitamin C Tablets (1000mg) - 60 Capsules",
    price: 12.5,
    originalPrice: 15.0,
    discountLabel: "15% OFF",
  },
  {
    imageUrl: "https://placehold.co/300x200",
    title: "Fish Oil Omega-3 - 100 Softgels",
    price: 25.0,
    originalPrice: 30.0,
    discountLabel: "20% OFF",
  },{
    imageUrl: "https://placehold.co/300x200",
    title: "Vitamin C Tablets (1000mg) - 60 Capsules",
    price: 12.5,
    originalPrice: 15.0,
    discountLabel: "15% OFF",
  },
  {
    imageUrl: "https://placehold.co/300x200",
    title: "Fish Oil Omega-3 - 100 Softgels",
    price: 25.0,
    originalPrice: 30.0,
    discountLabel: "20% OFF",
  },
];

const AllProducts: React.FC = () => {
  const handleAddToCart = (product: Product): void => {
    console.log(`Added ${product.title} to cart.`);
  };

  return (
    <div className="flex flex-col min-h-screen lg:max-w-[70%] max-w-[85%] mx-auto">
      <div className="mt-20 lg:mt-40 md:mt-40">
        <LineComponent text="Explore All Medicines" />
        <div className='mt-5'>
          <SellingProductCard products={sampleProducts} onAddToCart={handleAddToCart} />
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <CustomButton text="EXPLORE ALL MEDICINES" href="#" />
      </div>
    </div>
  );
};

export default AllProducts;
