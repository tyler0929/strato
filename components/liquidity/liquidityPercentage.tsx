"use client";
import { useState } from "react";
import { ArrowDown } from "../icons";
import { Text_14_400 } from "../typography/Typography";
import SettingButton from "../setting/button";

const LiquidityPercentage = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedLiquidity , setSelectedLiquidity] = useState("0.01%")
  const handleChangeLiquidity = (event:React.MouseEvent) =>{
    setSelectedLiquidity(event?.currentTarget?.id)
  }
  return (
    <div className="bg-black-light2 rounded-xl">
      <div className=" flex justify-between items-center px-3 py-3">
        <Text_14_400 text="V3 LP - 0.01% fee tier" />
        <div className="pr-3">
          {showMore && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="font-[600] text-[16px ] text-primary-main hover:opacity-55 transition-all duration-200 ease-linear"
            >
              Less
            </button>
          )}
          {!showMore && (
            <button
              onClick={() => setShowMore(!showMore)}
              className=" flex items-center font-[600] text-[16px ] text-primary-main hover:opacity-55 transition-all duration-200 ease-linear"
            >
              More <ArrowDown width="15px" />
            </button>
          )}
        </div>
      </div>
      {showMore && <div className="flex justify-between px-3 pb-3">
        <SettingButton onClick={handleChangeLiquidity} selected={selectedLiquidity} text="0.01%" defaultStyle="!bg-gray-gray2"/>
        <SettingButton onClick={handleChangeLiquidity} selected={selectedLiquidity} text="0.05%" defaultStyle="!bg-gray-gray2"/>
        <SettingButton onClick={handleChangeLiquidity} selected={selectedLiquidity} text="0.25%" defaultStyle="!bg-gray-gray2"/>
        <SettingButton onClick={handleChangeLiquidity} selected={selectedLiquidity} text="1%" defaultStyle="!bg-gray-gray2" />
        </div>}
    </div>
  );
};

export default LiquidityPercentage;
