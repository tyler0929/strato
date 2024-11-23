"use client";
import { Text_16_600 } from "../typography/Typography";
import SelectToken from "../selectToken/SelectToken";
import { AddIcon, ArrowSelect } from "../icons";
import LiquidityPercentage from "./liquidityPercentage";
import { useSwapContext } from "../context/SwapContext";
import SetPriceRange from "./SetPriceRange";
import ConnectWallet from "../connectWallet/connectWallet";

const ChooseToken = () => {
  const { inputCurrency, outputCurrency } = useSwapContext();
  return (
    <div>
      <div>
        <Text_16_600 text="Choose Token Pair" />
        <div className=" grid grid-cols-[47%_6%_47%] justify-between items-center py-2">
          <SelectToken
            baseComponent="inputCurrency"
            buyCrypto
            headerStyle="bg-black-light2 w-full justify-between px-4 py-5 rounded-xl"
          />
          <div className=" flex justify-center items-center">
            <AddIcon width={"20px"} />
          </div>
          <SelectToken
            baseComponent="outputCurrency"
            buyCrypto
            headerStyle="bg-black-light2 w-full justify-between px-4 py-5 rounded-xl"
          />
        </div>
        <div>
          <LiquidityPercentage />
        </div>
      </div>
      <div className="py-3 lg:hidden">
        <SetPriceRange />
      </div>
      <div>
        <Text_16_600 text="Deposit Amount" style="pt-4 pb-2" />
        <div className="bg-black-light2 rounded-2xl px-3 py-4">
          <div className="text-white flex gap-3 text-[16px] font-[600] items-center cursor-pointer hover:opacity-65 transition-all duration-200 ease-linear">
            {inputCurrency?.iconAddress}
            {inputCurrency?.symbol}
            <ArrowSelect width={"30px"} />
          </div>
          <div className="flex justify-end py-5">
            <p className="text-white opacity-65 text-[12px] font-[400]">
              ~1,673.14 USD
            </p>
          </div>
          <input
            type="number"
            placeholder="0.0"
            className="no-spinner bg-black-light2 !font-ipa_font text-end mb-4 rounded-lg font-[500]  text-[#f4eeff] text-[40px] h-12 outline-0  w-full border-none"
          />
        </div>
        <div className="bg-black-light2 rounded-2xl px-3 py-4 mt-3">
          <div className="text-white flex gap-3 text-[16px] font-[600] items-center cursor-pointer hover:opacity-65 transition-all duration-200 ease-linear">
            {outputCurrency?.iconAddress}
            {outputCurrency?.symbol}
            <ArrowSelect width={"30px"} />
          </div>
          <div className="flex justify-end py-5">
            <p className="text-white opacity-65 text-[12px] font-[400]">
              ~1,673.14 USD
            </p>
          </div>
          <input
            type="number"
            placeholder="0.0"
            className="no-spinner bg-black-light2 !font-ipa_font text-end mb-4 rounded-lg font-[500]  text-[#f4eeff] text-[40px] h-12 outline-0  w-full border-none"
          />
        </div>
        <div className=" grid lg:hidden mt-5">
          <ConnectWallet baseComponent="Header" style="w-full !grid" />
        </div>
      </div>
    </div>
  );
};
export default ChooseToken;
