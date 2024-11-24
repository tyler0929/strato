import { useState } from "react";
import { Text_14_600 } from "../typography/Typography";
import Tooltip from "../Tooltip/Tooltip";
import { useSwapContext } from "../context/SwapContext";

const DepositAmount = () => {
  const [selectedAmount, setSelectedAmount] = useState("100");
  const {inputCurrency , outputCurrency} = useSwapContext()

  const handleSelectedAmount = (event: React.MouseEvent) => {
    setSelectedAmount(event?.currentTarget?.id);
  };
  return (
    <div>
      <Text_14_600 text="Deposit Amount" style="!text-[12px] uppercase py-5" />
      <div className="relative">
        <input
          type="number"
          placeholder="0.0"
          className="no-spinner border border-[#262130] pr-10 bg-black-light2 !font-ipa_font text-end mb-4 rounded-lg font-[400]  text-[#f4eeff] text-[16px] h-10 outline-0  w-full border-none"
        />
        <p className="font-[400] text-[14px] text-white opacity-80 absolute right-2 top-2">
          USD
        </p>
      </div>
      <div className="flex gap-2 pb-2 items-center">
        <button
          onClick={handleSelectedAmount}
          id="100"
          className={` flex-1 text-center ${
            selectedAmount === "100"
              ? "bg-primary-main text-white"
              : "bg-black-light2 text-primary-main"
          } py-1  font-[600] text-[12px]  hover:opacity-65 transition-all duration-200 ease-linear rounded-lg `}
        >
          $100
        </button>
        <button
          onClick={handleSelectedAmount}
          id={"1000"}
          className={` flex-1 text-center ${
            selectedAmount === "1000"
              ? "bg-primary-main text-white"
              : "bg-black-light2 text-primary-main"
          } py-1  font-[600] text-[12px]  hover:opacity-65 transition-all duration-200 ease-linear rounded-lg `}
        >
          $1,000
        </button>
        <button
          onClick={handleSelectedAmount}
          id="max"
          className={` flex-1 text-center ${
            selectedAmount === "max"
              ? "bg-primary-main text-white"
              : "bg-black-light2 text-primary-main"
          } py-1  font-[600] text-[12px]  hover:opacity-65 transition-all duration-200 ease-linear rounded-lg left-1/ `}
        >
          MAX
        </button>
        <div className="relative">
        <Tooltip
        styleContainer=" !right-0 "
          position="top"
          content="Automatically fill in the maximum token amount according to your balance and position settings."
          styleArrow="!right-3 -translate-y-[6px] "
        />
        </div>
      </div>
      <div className="grid gap-3 px-8 py-10">
        <div className="flex justify-between gap-2 items-center">
           <div className="flex items-center">
           {inputCurrency?.iconAddress}
           <Text_14_600 text={inputCurrency?.symbol} />
           </div>
            <Text_14_600  text="10.908774118507103879"/>
        </div>
        <div className="flex justify-between gap-2 items-center">
           <div className="flex items-center">
           {outputCurrency?.iconAddress}
           <Text_14_600 text={outputCurrency?.symbol} />
           </div>
            <Text_14_600  text="10.908774118507103879"/>
        </div>
      </div>
    </div>
  );
};

export default DepositAmount;
