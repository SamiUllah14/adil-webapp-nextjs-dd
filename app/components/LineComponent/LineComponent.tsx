import React from 'react';

// Make the component accept dynamic text as a prop
const LineComponent = ({ text = 'Explore By Categories' }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center w-full">
        <div className="flex-grow border-t border-black"></div>
        <span className="mx-4 text-black font-roboto font-bold">{text}</span>
        <div className="flex-grow border-t border-black"></div>
      </div>
    </div>
  );
}

export default LineComponent;
