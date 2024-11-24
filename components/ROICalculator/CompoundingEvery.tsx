"use client";
import { useState } from "react";
import { Text_12_600 } from "../typography/Typography";
import CustomCheckbox from "../checkbox/customCheckbox";

const CompoundingEvent = () => {
  const [selectedFilter, setSelectedFilter] = useState("1D");
  const [checked , setChecked] = useState(false)

  const handleCheckBox = (checked:boolean) => {
    setChecked(checked)
  }
  const handleSelectFilter = (event: React.MouseEvent) => {
    setSelectedFilter(event?.currentTarget?.id);
  };
  return (
    <div>
      <Text_12_600 text="Compounding Event" style="uppercase py-5" />
      <div className="flex gap-4 items-center">
        <div>
          <CustomCheckbox onClick={handleCheckBox}  checked={checked}/>
        </div>
        <div className="flex bg-black-light2 rounded-lg flex-1">
          <button
            id="12H"
            onClick={handleSelectFilter}
            disabled={checked}
            className={` ${checked  && "!bg-[#3c3742] !text-primary-main cursor-not-allowed opacity-60 hover:opacity-60"} ${
              selectedFilter === "12H" ? "bg-primary-main" : ""
            } flex flex-1 font-[600] text-[16] text-white  rounded-lg py-1 items-center justify-center hover:opacity-65 transition-all duration-200 ease-linear`}
          >
            12H
          </button>
          <button
            id="1D"
            disabled={checked}
            onClick={handleSelectFilter}
            className={`${checked  && "!bg-[#3c3742] !text-primary-main cursor-not-allowed opacity-60 hover:opacity-60"} ${
              selectedFilter === "1D" ? "bg-primary-main" : ""
            } flex flex-1 font-[600] text-[16] text-white  rounded-lg py-1 items-center justify-center hover:opacity-65 transition-all duration-200 ease-linear`}
          >
            1D
          </button>
          <button
            id="7D"
            disabled={checked}
            onClick={handleSelectFilter}
            className={`${checked  && "!bg-[#3c3742] !text-primary-main cursor-not-allowed opacity-60 hover:opacity-60"} ${
              selectedFilter === "7D" ? "bg-primary-main" : ""
            } flex flex-1 font-[600] text-[16] text-white  rounded-lg py-1 items-center justify-center hover:opacity-65 transition-all duration-200 ease-linear`}
          >
            7D
          </button>
          <button
            id="30D"
            disabled={checked}
            onClick={handleSelectFilter}
            className={`${checked  && "!bg-[#3c3742] !text-primary-main cursor-not-allowed opacity-60 hover:opacity-60"} ${
              selectedFilter === "30D" ? "bg-primary-main" : ""
            } flex flex-1 font-[600] text-[16] text-white  rounded-lg py-1 items-center justify-center hover:opacity-65 transition-all duration-200 ease-linear`}
          >
            30D
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompoundingEvent;
