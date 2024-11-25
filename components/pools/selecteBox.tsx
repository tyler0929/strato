"use client";
import React, { useEffect, useRef, useState } from "react";
import { Text_12_600 } from "../typography/Typography";

const CustomDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Text_12_600  text="Sort by" style="uppercase"/>
      <div ref={dropdownRef} className="relative w-32 h-[36px] ">
        {/* Trigger Button */}
        <button
          onClick={toggleDropdown}
          className={`w-full px-4 py-2 border border-[#262130] bg-black-light2 text-white grid text-left text-[16px] ${
            isOpen ? "rounded-t-2xl !rounded-b-none" : "rounded-2xl"
          } focus:outline-none `}
        >
          {selectedOption || "Hot"}
          <span className="absolute inset-y-0 right-3 top-2  text-[10px] flex items-center pointer-events-none text-white ">
            ▼
          </span>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute w-full border border-t-0 border-[#262130] bg-black-light2 text-white shadow-md rounded-b-2xl">
            {["Hot", "APR", "Earned", "Total", "Latest"].map((option) => (
              <div
                key={option}
                className="px-4 py-2 hover:bg-[#262130] cursor-pointer"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
