"use client";
import ConnectWallet from "@/components/connectWallet/connectWallet";
import { useSwapContext } from "@/components/context/SwapContext";
import { SwapCircle, TooltipIcon } from "@/components/icons";
import SelectToken from "@/components/selectToken/SelectToken";
import SettingComponent from "@/components/setting/setting";
import SideBarSwapPage from "@/components/Swap/SideBar";
import SwapLinks from "@/components/Swap/SwapLinks";
import Tooltip from "@/components/Tooltip/Tooltip";
import { Text_14_400, Text_20_600 } from "@/components/typography/Typography";

const SwapPage: React.FC = () => {
  const { inputCurrency, setInputCurrency, outputCurrency, setOutputCurrency } =
    useSwapContext();

  const handleSwapInputOutput = () => {
    const input = inputCurrency;
    const output = outputCurrency;
    setInputCurrency(output);
    setOutputCurrency(input);
  };
  return (
    <div className="section-swap-page max_width_app flex">
      <div>
        <SideBarSwapPage />
      </div>
      <div className="flex-1 pt-3">
        <div className="max-w-80 bg-black-light1 mx-auto pt-6 pb-3 px-3 rounded-2xl ">
          <div className="grid px-4 gap-3">
            <Text_20_600 text="Swap" />
            <Text_14_400
              text="Trade tokens in an instant"
              style="!text-gray-gray1"
            />
            <SwapLinks />
          </div>
          <div className="bg-black-light2 px-6 py-4 pt-6 mt-4 rounded-lg">
            <SelectToken baseComponent="inputCurrency" />
            <div className="flex justify-end py-5">
              <p className="text-white opacity-65">~1,673.14 USD</p>
            </div>
            <input
              placeholder="0.0"
              className="bg-black-light2 text-end mb-4 rounded-lg font-[500] font-PLight text-[#f4eeff] text-[40px] h-12 outline-0 w-full border-none"
            />
          </div>

          <div className="bg-black-light2 px-6 py-4 pt-10 grid mt-4 rounded-lg  relative  z-[0]">
            <div className="absolute -top-9 grid justify-center w-full left-0 ">
              <div
                onClick={handleSwapInputOutput}
                className=" w-fit h-fit z-0  hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear"
              >
                <SwapCircle width={"65px"} />
              </div>
            </div>
            <SelectToken baseComponent="outputCurrency" />
            <div className="flex justify-end py-5">
              <p className="text-white opacity-65">~1,673.14 USD</p>
            </div>
            <input
              placeholder="0.0"
              className="bg-black-light2 text-end mb-4 rounded-lg font-[500] font-PLight text-[#f4eeff] text-[40px] h-12 outline-0  w-full border-none"
            />
          </div>
          <div className="flex justify-end mt-2">
            <Tooltip content="Although no obvious risk is found in the address, it is not guaranteed that there is 100% no risk for the address as the project can still fail or the token price can go down under natural market forces.">
              <button className="flex  items-center bg-primary-main font-[600] text-[14px] font-PRegular gap-1 py-1 px-2 rounded-full">
                Same Risk <TooltipIcon width="15px" />
              </button>
            </Tooltip>
          </div>
          <div className="py-4">
            <SettingComponent baseComponent="SwapSetting" />
          </div>
          <div className="grid mt-3 ">
            <ConnectWallet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapPage;
