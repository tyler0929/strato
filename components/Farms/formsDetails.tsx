'use client'
import Link from "next/link";
import { CloseIcon,  LinkIcon } from "../icons";
import {
  Text_12_400,
  Text_12_600,
  Text_16_400,
  Text_16_600,
} from "../typography/Typography";
import ConnectWallet from "../connectWallet/connectWallet";
import Tooltip from "../Tooltip/Tooltip";
import ModalComponent from "../modal/Modal";
import SettingComponent from "../setting/setting";
import ROICalculatorMain from "../ROICalculator/ROICalculatorMain";
import ChooseToken from "../liquidity/ChooseToken";
import SetPriceRange from "../liquidity/SetPriceRange";
import { useState } from "react";

const DetailsFarms = () => {
  const [isOpen , setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-[#3a4560] px-16 py-5 rounded-2xl grid lg:grid-cols-[20%_78%] gap-5">
      <ModalComponent isOpen={isOpen} onOpen={handleOpenModal } title="" isBack backFunction={() =>{}} width="!w-[854px]" isTitle={false}>
      <div className=" max-w-[600px] lg:max-w-[854px] bg-black-light1 mx-auto px-1 py-5 rounded-3xl">
          <div className="flex justify-between items-center pb-2">
            <div className="flex items-center gap-4">
            
              <Text_16_600 text="Add Liquidity" />
            </div>
            <div className="grid text-white items-center">
              <Text_12_400 text="APR"/>
              <div className="flex text-white gap-2 items-center">

              <ROICalculatorMain  label="0.0%"/>
              <Tooltip widthIcon="25px" content="Calculated at the current rates with historical trading volume data, and subject to change based on various external variables. This figure is provided for your convenience only, and by no means represents guaranteed returns." />
              <SettingComponent baseComponent="HeaderSetting" />
              <div
                className="text-white hover:opacity-70 transition-all duration-200 ease-linear cursor-pointer"
                onClick={handleOpenModal}
              >
                <CloseIcon width={"20px"} />
              </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-8">
            <ChooseToken />
            <div className="hidden lg:grid grid-cols-1">
              <SetPriceRange />
            </div>
          </div>
        </div>
          </ModalComponent>
      <div className="grid  lg:hidden">
        <div className="border-2 border-[#FFF] px-4 py-4 rounded-2xl">
          <Text_12_600 text="USDC Earned" style="uppercase" />
          <div className="flex justify-between items-center pt-2">
            <ConnectWallet />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="grid lg:hidden">
          <Text_16_400 text="Staked Liquidity" />
          <div className="flex justify-between items-center">
            <Text_16_600 text="$0" style="!text-[#666171]" />

            <Tooltip
              content="Total active (in-range) liquidity staked in the farm."
              position="top"
            />
          </div>
        </div>
        <div className="flex lg:hidden flex-col gap-0 items-start justify-start">
          <Text_16_400 text="Multiplier" />
          <div>
            <Text_16_600 text="20X" />
          </div>
        </div>
        <div className=" gap-0 items-start justify-start grid xl:hidden">
          <Text_16_400 text="Available" />
          <Text_16_400 text="0LP" style="!text-[#666171]" />
        </div>
        <div className=" gap-0 items-start justify-start grid xl:hidden">
          <Text_16_400 text="Staked" />
          <Text_16_400 text="0LP" style="!text-[#666171]" />
        </div>

        <div className="flex items-center gap-1">

         <button onClick={handleOpenModal}>
          <Link href={"#"}>
            <Text_16_600 text="Add USDC-POL LP" style={"hover:underline"} />
          </Link>
          </button> 
        </div>
        <div className="flex items-center gap-1">
          <Link href={"#"}>
            <Text_16_600 text="See Pair Info" style={"hover:underline"} />
          </Link>
          <LinkIcon width={"20px"} />
        </div>
        <div className="flex items-center gap-1">
          <Link href={"#"}>
            <Text_16_600 text="View Contract" style={"hover:underline"} />
          </Link>
          <LinkIcon width={"20px"} />
        </div>
      </div>
      <div className="hidden  lg:grid">
        <div className="border-2 border-[#FFF] px-4 py-4 rounded-2xl">
          <Text_12_600 text="USDC Earned" style="uppercase" />
          <div className="flex justify-between items-center pt-2">
            <ConnectWallet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsFarms;
