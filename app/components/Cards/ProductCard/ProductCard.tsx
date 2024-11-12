
"use client";
import React from 'react';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: number;
  originalPrice?: number;
  discountLabel?: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  price,
  originalPrice,
  discountLabel,
  onAddToCart,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          className="w-full"
          src={imageUrl}
          alt={title}
        />
        {discountLabel && (
          <div className="absolute top-2 right-2 bg-red-200 text-red-700 text-xs font-bold px-2 py-1 rounded">
            {discountLabel}
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-sm md:text-lg lg:text-lg font-medium text-gray-800">
          {title}
        </h2>
        <div className="mt-1">
          <span className="text-sm md:text-lg lg:text-lg font-semibold text-gray-800">
            Rs. {price.toFixed(2)}
          </span>
        </div>
        {originalPrice && (
          <div>
            <span className="text-sm md:text-lg lg:text-lg text-gray-500 line-through">
              Rs. {originalPrice.toFixed(2)}
            </span>
          </div>
        )}
        <button
          className="text-sm md:text-lg lg:text-lg mt-3 w-full bg-blue-500 text-white text-sm font-medium py-2 rounded hover:bg-blue-600"
          onClick={onAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
