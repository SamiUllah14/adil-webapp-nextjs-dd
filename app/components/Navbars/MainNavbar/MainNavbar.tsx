"use client";
import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const MainNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchSidebarOpen, setIsSearchSidebarOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSearchSidebar = () => setIsSearchSidebarOpen(!isSearchSidebarOpen);

  return (
    <div className="w-full pt-20 shadow-bottom"> {/* Apply shadow-bottom class to all screen sizes */}
      {/* Mobile Menu Button */}
      <div className="block lg:hidden px-8 py-4">
        <button onClick={toggleMenu} className="text-xl text-black">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <button onClick={toggleSearchSidebar} className="ml-5">
          <FaSearch className="MobileSearchIcon text-xl text-gray" />
        </button>
      </div>

      {/* Mobile Menu Sidebar */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute top-0 left-0 bg-white w-64 h-full p-4">
            <div className="flex justify-end p-2" onClick={toggleMenu}>
              <FaTimes size={24} />
            </div>
            <ul className="flex flex-col space-y-4">
              <li><a href="#" className="text-black font-semibold">Login</a></li>
              <li><a href="#" className="text-black font-semibold">Register</a></li>
            </ul>
          </div>
        </div>
      )}

      {/* Search Sidebar */}
      {isSearchSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute top-0 left-0 bg-white w-80 h-full p-4">
            <div className="flex justify-end p-2" onClick={toggleSearchSidebar}>
              <FaTimes size={24} />
            </div>
            <div className="p-4">
              <div className="flex items-center border border-gray-300 rounded">
                <input type="text" placeholder="Search..." className="w-full p-2 outline-none" />
                <button className="p-2 text-gray-500 hover:text-gray-700">
                  <FaSearch className="text-lg" />
                </button>
              </div>
              <div className="HistoryOfUserSearch mt-2"> Search history</div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navbar */}
      <nav className="hidden lg:flex lg:justify-center lg:py-4 lg:border-b">
        <div className="flex justify-center w-full mx-auto space-x-4">
          <a href="#" className="text-black font-semibold">Home</a>
          <a href="#" className="text-black font-semibold">All Products</a>
          <a href="#" className="text-black font-semibold">All Products</a>
          <a href="#" className="text-black font-semibold">All Products</a>
          <a href="#" className="text-black font-semibold">All Products</a>
          <a href="#" className="text-black font-semibold">All Products</a>
        </div>
      </nav>
    </div>
  );
};

export default MainNavbar;
