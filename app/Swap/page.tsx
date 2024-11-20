"use client"
import ConnectWallet from "@/components/connectWallet/connectWallet";
import { useSwapContext } from "@/components/context/SwapContext";
import { SwapCircle } from "@/components/icons";
import SelectToken from "@/components/selectToken/SelectToken";
import SideBarSwapPage from "@/components/Swap/SideBar";
import SwapLinks from "@/components/Swap/SwapLinks";
import { Text_14_400, Text_20_600 } from "@/components/typography/Typography";

const SwapPage: React.FC = () => {
    const {inputCurrency , setInputCurrency , outputCurrency , setOutputCurrency} = useSwapContext()

    const handleSwapInputOutput = () => {
        const input = inputCurrency
        const output = outputCurrency
        setInputCurrency(output)
        setOutputCurrency(input)
    }
  return (
    <div className="section-swap-page max_width_app flex">
      <div>
        <SideBarSwapPage />
      </div>
      <div className="flex-1 pt-5">
        <div className="max-w-96 bg-black-light1 mx-auto pt-6 pb-3 px-3 rounded-2xl">
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
              className="bg-black-light2 text-end mb-4 rounded-lg font-[500] font-PRegular text-white text-[35px] h-12 outline-0 px-4 w-full border-none"
            />
          </div>
          <div className="bg-black-light2 px-6 py-4 pt-10 mt-4 rounded-lg relative">
            <div  className="absolute -top-9 flex justify-center w-full left-0 " >
              <div onClick={handleSwapInputOutput} className="w-fit h-fit  hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">

              <SwapCircle width={"65px"} />
              </div>
            </div>
            <SelectToken baseComponent="outputCurrency" />
            <div className="flex justify-end py-5">
              <p className="text-white opacity-65">~1,673.14 USD</p>
            </div>
            <input
              placeholder="0.0"
              className="bg-black-light2 text-end mb-4 rounded-lg font-[500] font-PRegular text-white text-[35px] h-12 outline-0 px-4 w-full border-none"
            />
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
