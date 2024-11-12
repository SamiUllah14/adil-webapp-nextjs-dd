import React from 'react';

// Define the interface for the CustomBoldText props
interface CustomBoldTextProps {
  text: string;  // The text to display as bold
}

const CustomBoldText: React.FC<CustomBoldTextProps> = ({ text }) => {
  return (
    <div className="flex font-bold md:text-[1.5rem] text-[1rem]">
      <h2>{text}</h2>
    </div>
  );
};

export default CustomBoldText;
