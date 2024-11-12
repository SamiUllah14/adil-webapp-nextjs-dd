import React from 'react';

// Define the interface for the CustomGrayText props
interface CustomGrayTextProps {
  text: string;  // The text to display in gray
}

const CustomGrayText: React.FC<CustomGrayTextProps> = ({ text }) => {
  return (
    <div className="flex text-[#4E5055] md:text-base text-sm">
      {text}
    </div>
  );
};

export default CustomGrayText;
