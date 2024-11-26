"use client";
import USDT from "@/public/assets/images/usdc.png";
import POL from "@/public/assets/images/pol.png";
import Image from "next/image";
import {
  Text_12_400,
  Text_14_600,
  Text_16_400,
  Text_16_600,
} from "../typography/Typography";
import { ArrowDown, ArrowUp } from "../icons";
import { useState } from "react";
import Tooltip from "../Tooltip/Tooltip";
import DetailsFarms from "./formsDetails";
import ARPSetting from "./ARPSetting";
import Link from "next/link";
// import DetailsPools from "./detailsPools";

const FarmsMainComponent = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetailsFunction = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className="my-2">
      <div className="flex justify-between items-center md:hidden py-2">
        <div className="flex gap-2 items-center">
          <div>
            <Image src={USDT} alt="usdt" width={20} />
            <Image src={POL} alt="usdt" width={35} className="-mt-3" />
          </div>
          <div className="flex">
            <Text_16_600 text="Earn USDC - " />
            <Text_16_600 text="POL" />
          </div>
        </div>
        <div className="h-6 rounded-full font-[400] text-[12px] my-auto text-[#3a4560] border-2 border-[#3a4560] px-1">
          0.05%
        </div>
      </div>
      <div
        className="flex justify-between items-center bg-black-light2 px-7 py-4 rounded-2xl cursor-pointer"
        onClick={handleShowDetailsFunction}
      >
        <div className="flex gap-8 lg:gap-10 xl:gap-12 items-start">
          <div className=" gap-2 items-center hidden md:flex">
            <div>
              <Image src={USDT} alt="usdt" width={20} />
              <Image src={POL} alt="usdt" width={35} className="-mt-3" />
            </div>
            <div className="grid">
              <Text_16_600 text="Earn USDC"/>
              <Text_16_600 text="POL" />
            </div>
          </div>
          <div className="hidden md:flex items-center my-auto justify-center">
            <div className="h-6 rounded-full font-[400] text-[12px] my-auto text-[#3a4560] border-2 border-[#3a4560] px-1">
              0.05%
            </div>
          </div>
          <div className="flex flex-col gap-0 items-start justify-start">
            <Text_12_400 text="USDC Earned" style="!text-gray-gray1"/>
            <Text_16_600 text="0" style="!text-[#666171]" />
          </div>
          <div className="grid  items-center">
            <Text_12_400 text="APR" style="!text-gray-gray1"/>
            <div className="flex items-center">
              <ARPSetting label="0.00%"/>
            </div>
          </div>
          <div className="hidden lg:grid">
            <Text_12_400 text="Staked Liquidity" style="!text-gray-gray1"/>
            <div className="flex justify-between items-center">
              <Text_16_600 text="$0" style="!text-[#666171]" />

              <Tooltip
              widthIcon="17px"
                content="Total active (in-range) liquidity staked in the farm."
                position="top"
              />
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-0 items-start justify-start">
            <Text_12_400 text="Multiplier" style="!text-gray-gray1"/>
            <div className="flex items-center">
              <Text_16_600 text="20X" />
              <Tooltip
              widthIcon="20px"
                container={
                  <div>
                    <div className="flex gap-2">
                      <Text_16_600
                        text="Farm’s DRX Per Second:"
                        style="!text-black-main"
                      />
                      <Text_14_600 text="0" style="!text-black-main" />
                    </div>
                    <div className="flex gap-2">
                      <Text_16_600
                        text="Total Multipliers"
                        style="!text-black-main"
                      />
                      <Text_14_600 text=": 20" style="!text-black-main" />
                    </div>
                    <Text_16_400
                      style="py-2 !text-black-light2"
                      text="The Farm Multiplier represents the proportion of DRX rewards each farm receives as a proportion of its farm group."
                    />
                    <Text_16_400
                      style="py-2 !text-black-light2"
                      text="For example, if a 1x farm received 1 DRX per block, a 40x farm would receive 40 DRX per block."
                    />
                    <div className="">
                      <Text_16_400
                        style="py-2 !text-black-light2"
                        text="Different farm groups have different sets of multipliers."
                      />
                      <Link
                        href=""
                        className="font-[600] text-[16px] text-primary-main w-fit"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
        <div className="flex gap-10 items-start">
          <div className=" gap-0 items-start justify-start hidden xl:grid">
            <Text_12_400 text="Available" style="!text-gray-gray1"/>
            <Text_12_400 text="0LP" style="!text-[#666171]" />
          </div>
          <div className=" gap-0 items-start justify-start hidden xl:grid">
            <Text_12_400 text="Staked" style="!text-gray-gray1"/>
            <Text_12_400 text="0LP" style="!text-[#666171]" />
          </div>
          <div className="flex items-center justify-end">
            {!showDetails && (
              <button
                onClick={handleShowDetailsFunction}
                className="hover:opacity-65 flex items-center gap-1 transition-all duration-200 ease-linear font-[600] text-[16px] text-white"
              >
                 <ArrowDown width="20px" />
               
              </button>
            )}
            {showDetails && (
              <button
                onClick={handleShowDetailsFunction}
                className="hover:opacity-65 flex items-center gap-1 transition-all duration-200 ease-linear font-[600] text-[16px] text-white"
              >
                <ArrowUp width="20px" />
              </button>
            )}
          </div>
        </div>
      </div>
      {showDetails && (
        <div className="mt-2">
          <DetailsFarms />
        </div>
      )}
    </div>
  );
};

export default FarmsMainComponent;
