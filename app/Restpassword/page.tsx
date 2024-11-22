import React from 'react';
import CustomButton from '../components/CustomButton/CustomButton';
import CustomInputField from '../components/CustomInputField/CustomInputField';
import Link from 'next/link'; // Import the Link component from next/link

const Restpassword = () => {
  return (
    <div className="flex items-center justify-center bg-[#E2F3F1] p-6">
      <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-lg flex flex-col items-center space-y-8">

        {/* Form Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Rest Password</h2>
          <p className="text-gray-600 mt-2">Make sure to write correct name.</p>
        </div>

        {/* Login Form */}
        <form className="w-full space-y-6">
          <div className="relative">
            <CustomInputField 
              type="text" 
              placeholder="Name" 
            />
          </div>

          <CustomInputField 
            type="password" 
            placeholder="NewPassword" 
          />

          {/* Custom Button */}
          <div className="flex justify-center">
            <CustomButton text="Rest" href="#" />
          </div>
        </form>

        {/* Register Link */}
        <p className="mt-4 text-[#1A202C]">
          Want to login?{' '}
          <Link href="/Login" className="text-[#1A202C] underline">
            Click here
          </Link>
        </p>
      
      </div>
    </div>
  );
};

export default Restpassword;
