"use client";
import { useState } from "react";
import Tooltip from "../Tooltip/Tooltip";
import { Text_12_400, Text_12_600, Text_14_600 } from "../typography/Typography";
import { ArrowSwapIcon } from "../icons";

const StartUsdcLPStaked = () => {
  const [selectedAmount, setSelectedAmount] = useState("100");
  const [inputState, setInputState] = useState({
    value: 0,
    name: "USDC",
  });
  const [outputState, setOutputState] = useState({
    value: 0,
    name: "STRAT-USDC LP",
  });

  const handleSelectedAmount = (event: React.MouseEvent) => {
    setSelectedAmount(event?.currentTarget?.id);
  };
  const handleChangeInputOutput = () => {
setInputState(outputState)
setOutputState(inputState)

  }
  return (
    <div>
      <Text_12_600 text="STRAT-USDC LP staked" style="uppercase py-2" />
      <div className="flex  bg-black-light2 px-4 items-center py-4 my-3 border border-[#262130] rounded-2xl gap-2">
        <div className="flex flex-1 flex-col items-end">
          <div className="w-full justify-end flex gap-1">
            <input className=" outline-none bg-black-light2 text-white font-[600] text-[14px] text-right"/>
            <Text_14_600 text={inputState?.name} style="w-fit"/>
          </div>
          <div className="flex gap-1">
            <Text_12_400 text={`${outputState?.value}`}/> 
            <Text_12_400 text={outputState?.name}/> 
          </div>
        </div>
        <div className="grid items-start">
            <button className="text-white hover:opacity-65 transition-all duration-200 ease-linear" onClick={handleChangeInputOutput}><ArrowSwapIcon /></button>
        </div>
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
    </div>
  );
};

export default StartUsdcLPStaked;
