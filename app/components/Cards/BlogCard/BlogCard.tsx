import React from 'react';

// Define the interface for the BlogCard props
interface BlogCardProps {
  title: string;
  imageSrc: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, imageSrc, category }) => {
  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-lg shadow-md overflow-hidden sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-auto sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover"  // Responsive height adjustment
      />
      <div className="p-4">  {/* Reduced padding for smaller card */}
        <p className="text-sm text-green-600 font-semibold">{category}</p>
        <h1 className="mt-2 text-lg sm:text-xl font-bold text-gray-900">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default BlogCard;
