import React from 'react';
import CustomButton from '../components/CustomButton/CustomButton';
import CustomInputField from '../components/CustomInputField/CustomInputField'; // Import the CustomInputField component
import Link from 'next/link';  // Import Link from next/link

const Register = () => {
  return (
    <div className="bg-[#D6EDEB] flex justify-center items-center pt-10 pb-10">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center justify-between w-full max-w-4xl">
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <img
            src="https://placehold.co/400x400"
            alt="A woman in a light blue hijab and shirt, smiling while looking at her phone"
            className="rounded-lg"
          />
        </div>

        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl font-bold text-[#1A202C] mb-2">Create An Account</h1>
          <p className="text-[#4A5568] mb-6">
            We will use this information to contact you regarding booking confirmations.
          </p>
          <form>
            <CustomInputField 
              type="text" 
              placeholder="Your Name" 
            />
            <CustomInputField 
              type="text" 
              placeholder="Your Home Address" 
            />
            <CustomInputField 
              type="number" 
              placeholder="Mobile Number" 
            />
            <CustomInputField 
              type="password" 
              placeholder="Password" 
            />

            <div className='justify-end flex'>
              <CustomButton text={'Register'} href={'#'} />
            </div>
          </form>
          <p className="mt-4 text-[#1A202C]">
            Already a user?{' '}
            <Link href="/Login" className="text-[#1A202C] underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
