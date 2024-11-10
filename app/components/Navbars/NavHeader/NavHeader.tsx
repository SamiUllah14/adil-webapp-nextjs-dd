import React from 'react';
import { FaSearch } from 'react-icons/fa';

const NavHeader = () => (
  <nav className="header fixed top-0 left-0 w-full flex items-center justify-between py-4 px-12 border-b bg-white z-50">
    <div className="flex items-center">
      <img src="https://placehold.co/50x50" alt="Adil Pharmacy logo" className="mr-2" />
      <div>
        <h1 className="text-xl font-bold text-green-700">Adil Pharmacy</h1>
        <p className="text-sm text-gray-500">wellness for life</p>
      </div>
    </div>
    <div className="hidden lg:flex items-center">
      <input
        type="text"
        placeholder="Search the store"
        className="border rounded-full px-4 py-2 w-96"
      />
      <button className="ml-2">
        <FaSearch className="text-xl text-gray" />
      </button>
    </div>
    <div className="flex items-center">
      <div className="hidden lg:flex items-center mr-4">
        <i className="fas fa-user text-xl"></i>
        <div className="ml-2">
          <a href="#" className="text-blue-600">Login</a> or <a href="#" className="text-blue-600">Register</a>
          <p className="text-sm text-gray-500">Wellness Account</p>
        </div>
      </div>
      <div className="flex items-center">
        <i className="fas fa-shopping-cart text-xl"></i>
        <span className="ml-1 text-sm">0</span>
        <p className="ml-1 text-sm">Cart</p>
      </div>
    </div>
  </nav>
);

export default NavHeader;
