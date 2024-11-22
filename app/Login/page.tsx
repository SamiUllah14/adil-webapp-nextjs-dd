import React from 'react';
import CustomButton from '../components/CustomButton/CustomButton';
import CustomInputField from '../components/CustomInputField/CustomInputField';
import Link from 'next/link'; // Import the Link component from next/link

const Login = () => {
  return (
    <div className="flex items-center justify-center bg-[#E2F3F1] p-6">
      <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-lg flex flex-col items-center space-y-8">

        {/* Form Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Sign in to continue</p>
        </div>

        {/* Login Form */}
        <form className="w-full space-y-6">
          <div className="relative">
            <CustomInputField 
              type="number" 
              placeholder="Mobile Number" 
            />
          </div>

          <CustomInputField 
            type="password" 
            placeholder="Password" 
          />

          {/* Custom Button */}
          <div className="flex justify-center">
            <CustomButton text="Sign In" href="#" />
          </div>
        </form>

        {/* Register Link */}
        <p className="mt-4 text-[#1A202C]">
          Don't have an account?{' '}
          <Link href="/Register" className="text-[#1A202C] underline">
            Register
          </Link>
        </p>
        <p className="mt-2 text-[#1A202C]">
          <Link href="/Restpassword" className="text-[#1A202C] underline">
            Reset Password
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
