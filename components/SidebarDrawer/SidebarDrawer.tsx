import React, { useState } from "react";
import { Text_12_600, Text_14_600, Text_16_600 } from "../typography/Typography";
import SideBarSwapPage from "../Swap/SideBar";

const SidebarDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Circular Button to open the sidebar */}
      <button
        onClick={toggleDrawer}
        className=" top-4 left-4 w-12 h-12 rounded-full bg-primary-main text-white flex items-center justify-center shadow-md hover:opacity-65 transition-all duration-200 ease-linear z-50"
        aria-label="Open Sidebar"
      >
        {/* SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Overlay with background opacity */}
      {isOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-gray-gray1 bg-opacity-50 z-40 transition-opacity"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0  left-0 h-full w-64 bg-black-main shadow-md z-50 transform ${
          isOpen ? "translate-x-0 animate-slideInLeft" : "-translate-x-full"
        } transition-transform`}
      >
       
        <Text_16_600 text="StratoSwap" style="py-5 px-5" />
        
        <div className="p-4">
          <div className="flex justify-start py-5  items-center gap-2">
            <div className="bg-gray-gray1 w-16 h-16 rounded-full"></div>
            <div>
            <Text_14_600 text="kindly Name"/>
            <Text_12_600 text="kindly Username" style="!text-gray-gray1"/>
            </div>
          </div>
          <SideBarSwapPage onClick={toggleDrawer} />
        </div>
      </div>
    </div>
  );
};

export default SidebarDrawer;
