import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void; // Explicitly define the type of closeSidebar as a function
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={closeSidebar}
      style={{ zIndex: 50 }}  // Ensure that the overlay has a higher z-index
    >
      <div
        className={`fixed top-0 right-0 bg-white w-64 h-full shadow-lg transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 60 }}  // Ensure the sidebar has a higher z-index than the overlay
      >
        {/* Close Button */}
        <button
          onClick={closeSidebar}
          className="absolute top-4 right-4 text-xl text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          X
        </button>

        {/* Sidebar Content */}
        <div className="flex flex-col p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>

          {/* Example links in the sidebar */}
       
          <nav className="flex flex-col space-y-4">

            <a href="#" className="text-lg text-gray-700 hover:text-green-500">My Orders</a>
            <a href="#" className="text-lg text-gray-700 hover:text-green-500">Contact Us</a>
          </nav>

          {/* Add more content like user info or cart summary */}
          <div className="mt-6">
            <div className="flex justify-between text-gray-700">
              <span>Items:</span>
              <span>0</span>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-sm text-gray-500">Cart Summary</p>
            <div className="flex justify-between text-gray-700">
              <span>Total:</span>
              <span>$0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
