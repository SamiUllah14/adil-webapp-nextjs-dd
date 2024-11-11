import React from 'react';

const Register = () => {
  return (
    <div className="bg-[#D6EDEB] flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center justify-between w-full max-w-4xl">
        {/* Right Side - Image */}
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
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1A202C]"
              />
            </div>
            <div className="mb-4 flex">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 text-gray-600">
                +92
              </span>
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full p-3 rounded-r-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1A202C]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1A202C] text-white p-3 rounded-lg font-bold"
            >
              Continue
            </button>
          </form>
          <p className="mt-4 text-[#1A202C]">
            Already a user?{' '}
            <a href="#" className="text-[#1A202C] underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
