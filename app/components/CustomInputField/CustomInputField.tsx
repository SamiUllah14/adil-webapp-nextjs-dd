// CustomInputField.tsx
import React from 'react';

interface CustomInputFieldProps {
  type: 'text' | 'password' | 'email' | 'number'; // you can extend the types if needed
  placeholder: string;
  className?: string; // optional custom className to override default styles
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({ type, placeholder, className }) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1A202C] ${className}`}
      />
    </div>
  );
};

export default CustomInputField;
