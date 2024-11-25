"use client";
import { useState } from "react";

const FilterButton = () => {
  const [selectedButton, setSelectedButton] = useState("Live");

  const handleSelectedButton = (event: React.MouseEvent) => {
    setSelectedButton(event?.currentTarget?.id);
  };

  return (
    <div>
      <div className="bg-black-light2 flex w-fit rounded-lg">
        <button
          id="Live"
          onClick={handleSelectedButton}
          className={`${
            selectedButton === "Live"
              ? "text-black-main bg-gray-gray1"
              : "text-white"
          } font-[600] text-[16px] hover:opacity-65 transition-all duration-200 ease-linear rounded-lg px-4 py-1`}
        >
          Live
        </button>
        <button
          id="Finish"
          onClick={handleSelectedButton}
          className={`${
            selectedButton === "Finish"
              ? "text-black-main bg-gray-gray1"
              : "text-white"
          } font-[600] text-[16px] hover:opacity-65 transition-all duration-200 ease-linear rounded-lg px-4 py-1`}
        >
          Finished
        </button>
      </div>
    </div>
  );
};
export default FilterButton;
