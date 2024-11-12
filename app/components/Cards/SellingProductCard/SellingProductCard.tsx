"use client";
import React from 'react';
import './SellingProductCard.css';
import ProductCard from '../ProductCard/ProductCard';

// Define the interface for the product data
interface Product {
  imageUrl: string;
  title: string;
  price: number;
  originalPrice: number;
  discountLabel: string;
}

// Define the interface for SellingProductCard props
interface SellingProductCardProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const SellingProductCard: React.FC<SellingProductCardProps> = ({ products, onAddToCart }) => {
  return (
    <div className='sellingproductcard-container'>
      <div className='sellingproductcard'>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
            originalPrice={product.originalPrice}
            discountLabel={product.discountLabel}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default SellingProductCard;
