"use client";
import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const MainNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchSidebarOpen, setIsSearchSidebarOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSearchSidebar = () => setIsSearchSidebarOpen(!isSearchSidebarOpen);

  return (
    <div className="w-full pt-20 shadow-lg bg-[#00bf63]">
      {/* Mobile Menu Button */}
      <div className="lg:hidden px-8 py-4 flex items-center justify-between">
        <button onClick={toggleMenu} className="text-xl text-black focus:outline-none">
          {isMobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
        <button onClick={toggleSearchSidebar} className="ml-5">
          <FaSearch className="text-lg text-gray-700" />
        </button>
      </div>

      {/* Mobile Menu Sidebar */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300">
          <div className="absolute top-0 left-0 bg-white w-64 h-full p-4">
            <div className="flex justify-end p-2" onClick={toggleMenu}>
              <FaTimes size={18} />
            </div>
            <ul className="flex flex-col space-y-4">
              <li><a href="#" className="text-black hover:text-[#00bf63] transition-colors">Login</a></li>
              <li><a href="#" className="text-black  hover:text-[#00bf63] transition-colors">Register</a></li>
            </ul>
          </div>
        </div>
      )}

      {/* Search Sidebar */}
      {isSearchSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300">
          <div className="absolute top-0 left-0 bg-white w-80 h-full p-4">
            <div className="flex justify-end p-2" onClick={toggleSearchSidebar}>
              <FaTimes size={18} />
            </div>
            <div className="p-4">
              <div className="flex items-center border border-gray-300 rounded">
                <input type="text" placeholder="Search..." className="w-full p-2 outline-none text-sm" />
                <button className="p-2 text-gray-500 hover:text-gray-700">
                  <FaSearch className="text-lg" />
                </button>
              </div>
              <div className="mt-2 text-sm text-gray-600">Search history</div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navbar */}
      <nav className="hidden lg:flex lg:justify-center lg:py-4 lg:border-b">
        <div className="flex justify-center w-full mx-auto space-x-6">
          <a href="#" className="text-black font-semibold hover:text-white transition-colors">Home</a>
          <a href="#" className="text-black font-semibold hover:text-white transition-colors">All Products</a>
          <a href="#" className="text-black font-semibold hover:text-white transition-colors">Shop</a>
          <a href="#" className="text-black font-semibold hover:text-white transition-colors">Deals</a>
          <a href="#" className="text-black font-semibold hover:text-white transition-colors">Blog</a>
          <a href="#" className="text-black font-semibold hover:text-white transition-colors">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default MainNavbar;
