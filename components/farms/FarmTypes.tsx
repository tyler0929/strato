'use client'
import { useEffect, useRef, useState } from "react";
import CustomSwitcher from "../checkbox/CustomSwitcher";
import { BoosterIcon, StableSwapIcon } from "../icons";
import { Text_16_600, Text_20_600 } from "../typography/Typography";

const FarmTypes = () => {
    const [showFilters , setShowFilters] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleShowFilters = () => {
        setShowFilters(!showFilters)
    }

      // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowFilters(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button onClick={handleShowFilters} className="bg-black-light2 px-4 py-1 rounded-lg  text-[16px] font-[600] text-white hover:opacity-65 transition-all duration-200 ease-linear">
        Farm Types
      </button>
      {showFilters && <div ref={dropdownRef}
        className="rounded-2xl bg-black-light1  absolute top-12 w-96 -left-28 overflow-hidden "
        style={{
          boxShadow:
            "0px 0px 2px rgba(0, 0, 0, .2), 0px 4px 12px -8px rgba(14, 14, 44, .1)",
        }}
      >
        <div className="bg-black-main py-3 px-4">
          <Text_20_600 text="Farm Types" />
        </div>
        <div className="px-4 py-3 gap-4 grid">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center text-white">
                    <BoosterIcon />
                    <Text_16_600 text="Booster Available" />
                </div>
                <CustomSwitcher />
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center text-white">
                    <StableSwapIcon />
                    <Text_16_600 text="StableSwap" />
                </div>
                <CustomSwitcher />
            </div>
        </div>
      </div>}
    </div>
  );
};
export default FarmTypes;
