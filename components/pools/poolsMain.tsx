"use client";
import USDT from "@/public/assets/images/usdc.png";
import Image from "next/image";
import { Text_12_400, Text_16_400, Text_16_600 } from "../typography/Typography";
import { ArrowDown, ArrowUp } from "../icons";
import { useState } from "react";
import DetailsPools from "./detailsPools";
import ARPSetting from "../farms/ARPSetting";

const PoolsMainComponent = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetailsFunction = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className="my-2">
      <div
        className="flex justify-between items-center bg-black-light2 px-7 py-5 rounded-2xl cursor-pointer"
        onClick={handleShowDetailsFunction}
      >
        <div className="flex gap-10 lg:gap-14 xl:gap-20 items-start">
          <div className="flex gap-2 items-center">
            <Image src={USDT} alt="usdt" width={50} />
            <div className="grid">
              <Text_16_600 text="Earn USDC" />
              <Text_12_400 text="Stake STRAT" />
            </div>
          </div>
          <div className="flex flex-col gap-0 items-start justify-start">
            <Text_12_400 text="USDC Earned" />
            <Text_16_600 text="0" style="!text-[#666171]" />
            <Text_12_400 text="0 USD" style="!text-[#666171]" />
          </div>
          <div className=" gap-0 items-start justify-start hidden lg:grid">
            <Text_12_400 text="Total staked" />
            <Text_16_600 text="106 STRAT" />
          </div>
          <div className="hidden md:grid  items-center">
            <Text_12_400 text="APR" />
            <div className="flex items-center">
                <Text_16_400 text="292,656,019.96%"/>
                <ARPSetting />
            </div>
          </div>
        </div>
        <div className="flex gap-16 items-start">
          <div className=" gap-0 items-start justify-start hidden lg:grid">
            <Text_12_400 text="Ends in" />

            <Text_12_400 text="2956 days" style="!text-[#666171]" />
          </div>
          <div className="flex items-center justify-end  md:min-w-20">
            {!showDetails && (
              <button
                onClick={handleShowDetailsFunction}
                className="hover:opacity-65 flex items-center gap-1 transition-all duration-200 ease-linear font-[600] text-[16px] text-white"
              >
                <p className="hidden md:flex">Details</p>{" "}
                <ArrowUp width="20px" />
              </button>
            )}
            {showDetails && (
              <button
                onClick={handleShowDetailsFunction}
                className="hover:opacity-65 flex items-center gap-1 transition-all duration-200 ease-linear font-[600] text-[16px] text-white"
              >
                <p className="hidden md:flex">Hide</p>{" "}
                <ArrowDown width="20px" />
              </button>
            )}
          </div>
        </div>
      </div>
      {showDetails && (
        <div className="mt-2">
          <DetailsPools />
        </div>
      )}
    </div>
  );
};

export default PoolsMainComponent;