"use client"
import { useState } from "react";
import { Text_12_600 } from "../typography/Typography"


const StakedFor = () => {

    const [selectedFilter, setSelectedFilter] = useState("1D");

    const handleSelectFilter = (event: React.MouseEvent) => {
        setSelectedFilter(event?.currentTarget?.id);
      };
    return(
        <div>
            <Text_12_600 text="Staked for" style="uppercase py-5"/>
            <div className="flex bg-black-light2 rounded-lg">
        <button
          id="1D"
          onClick={handleSelectFilter}
          className={`${
            selectedFilter === "1D" ? "bg-primary-main" : ""
          } flex flex-1 font-[600] text-[16] text-white  rounded-lg py-1 items-center justify-center hover:opacity-65 transition-all duration-200 ease-linear`}
        >
          1D
        </button>
        <button
          id="7D"
          onClick={handleSelectFilter}
          className={`${
            selectedFilter === "7D" ? "bg-primary-main" : ""
          } flex flex-1 font-[600] text-[16] text-white  rounded-lg py-1 items-center justify-center hover:opacity-65 transition-all duration-200 ease-linear`}
        >
          7D
        </button>
        <button
          id="30D"
          onClick={handleSelectFilter}
          className={`${
            selectedFilter === "30D" ? "bg-primary-main" : ""
          } flex flex-1 font-[600] text-[16] text-white  rounded-lg py-1 items-center justify-center hover:opacity-65 transition-all duration-200 ease-linear`}
        >
          30D
        </button>
        <button
          id="1Y"
          onClick={handleSelectFilter}
          className={`${
            selectedFilter === "1Y" ? "bg-primary-main" : ""
          } flex flex-1 font-[600] text-[16] text-white  rounded-lg py-1 items-center justify-center hover:opacity-65 transition-all duration-200 ease-linear`}
        >
          1Y
        </button>
        <button
          id="5Y"
          onClick={handleSelectFilter}
          className={`${
            selectedFilter === "5Y" ? "bg-primary-main" : ""
          } flex flex-1 font-[600] text-[16] text-white  rounded-lg py-1 items-center justify-center hover:opacity-65 transition-all duration-200 ease-linear`}
        >
          5Y
        </button>
      </div>
        </div>
    )
}

export default StakedFor