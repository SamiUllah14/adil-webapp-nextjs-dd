"use client";
import React, { useState } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import Sidebar from './Sidebar';  // Import Sidebar component
import Link from 'next/link';  // Import Link from next/link

const NavHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for managing sidebar visibility

  const openSidebar = () => {
    setIsSidebarOpen(true); // Set sidebar to open
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); // Set sidebar to close
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} /> {/* Sidebar component */}
      <nav className="header fixed top-0 left-0 w-full flex items-center py-4 px-8 border-b bg-white z-40 justify-between md:justify-evenly">
        <div className="flex items-center">
          <img src="https://placehold.co/50x50" alt="Adil Pharmacy logo" className="mr-2" />
          <div>
            <h1 className="text-xl font-bold text-green-700">Adil Pharmacy</h1>
            <p className="text-sm text-gray-500">wellness for life</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center">
          <div className="relative w-96">
            <input
              type="text"
              placeholder="Search the store"
              className="border rounded-full px-4 py-2 w-full shadow-md pr-12" />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <FaSearch className="text-gray-500 text-lg" />
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden lg:flex items-center mr-4">
            <i className="fas fa-user text-xl"></i>
            <div className="ml-2">
              {/* Replace anchor tags with Link components */}
              <Link href="/Login" className="text-blue-600">Login</Link> or 
              <Link href="/Register" className="text-blue-600"> Register</Link>
              <p className="text-sm text-gray-500">Wellness Account</p>
            </div>
          </div>
          {/* Update the Link to trigger openSidebar */}
          <div className="flex items-center cursor-pointer" onClick={openSidebar}>
            <FaShoppingCart className="text-xl text-gray-500" />
            <span className="ml-1 text-sm">0</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavHeader;
