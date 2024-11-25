"use client";
import { useState } from "react";
import SelectLiquidityChart from "../charts/selectLiquidityChart";
import { useLiquidityContext } from "../context/LiquidityContext";
import { useSwapContext } from "../context/SwapContext";
import { SwapButton, ZoomInIcon, ZoomOutIcon } from "../icons";
import CounterPrice from "../liquidity/counterPrice";
import SetPriceRange from "../liquidity/SetPriceRange";
import {
  Text_12_600,
  Text_14_400,
  Text_16_600,
} from "../typography/Typography";

const SetPriceRangeROI = () => {
  const { setLiquidityData , setLiquidityPoints } = useLiquidityContext();
  const { inputCurrency, outputCurrency, setInputCurrency, setOutputCurrency } =
    useSwapContext();

    const [fullRange , setFullRange] = useState(false)
  const [selectedLiquidity, setSelectedLiquidity] = useState("5%");
  const handleChangeLiquidity = (event: React.MouseEvent) => {
    setSelectedLiquidity(event?.currentTarget?.id);
  };
  const handleChangeZoomIn = () => {
    setLiquidityData((prevState: any[]) =>
      Array.from({ length: prevState?.length - 20 }, (_, i) => ({
        name: (i + 1).toString(),
        uv: Math.floor(Math.random() * 501) - 250, // Random between -250 to 250
        pv: Math.floor(Math.random() * 501), // Random between 0 to 500
      }))
    );
  };
  const handleChangeZoomOut = () => {
    setLiquidityData((prevState: any[]) =>
      Array.from({ length: prevState?.length + 20 }, (_, i) => ({
        name: (i + 1).toString(),
        uv: Math.floor(Math.random() * 501) - 250, // Random between -250 to 250
        pv: Math.floor(Math.random() * 501), // Random between 0 to 500
      }))
    );
  };

  const handleChangeInputOutputCurrency = () => {
    const input = inputCurrency;
    const output = outputCurrency;
    setInputCurrency(output);
    setOutputCurrency(input);
  };
  const handleSetFullRange = () =>{
    if (fullRange){
        setLiquidityPoints({
            startIndex:40,
            endIndex:60
        });
    }else{
        setLiquidityPoints({
            startIndex:1,
            endIndex:99
        });

    }
    setFullRange(!fullRange)
  }
  return (
    <div className="w-full">
      <div className="flex justify-between items-center py-7 gap-5 ">
        <Text_12_600 text="Set Price Range" style="uppercase" />
        <div className="flex gap-3 pt-4">
          <div
            className="hover:opacity-65 text-white cursor-pointer transition-all duration-200 ease-linear"
            onClick={handleChangeZoomIn}
          >
            <ZoomInIcon width={"20px"} />
          </div>
          <div
            className="hover:opacity-65 text-white cursor-pointer transition-all duration-200 ease-linear"
            onClick={handleChangeZoomOut}
          >
            <ZoomOutIcon width={"20px"} />
          </div>
        </div>
      </div>
      <div className="w-full h-36">
        <SelectLiquidityChart />
      </div>
      <div>
        <div className=" flex gap-1 items-center justify-end pt-4">
          <Text_14_400 text="View prices in" style="!text-[#cfd1d6]" />
          <button
            onClick={handleChangeInputOutputCurrency}
            className="cursor-pointer text-[12px] font-[600] hover:opacity-65 transition-all duration-200 ease-linear flex items-center bg-gray-gray2 px-2 rounded-lg text-white py-1 gap-2"
          >
            {inputCurrency?.symbol} <SwapButton width={"20px"} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <CounterPrice
            baseComponent="startIndex"
            layoutStyle="bg-black-main"
            inputStyle="!bg-black-main !font-[500] !text-[40px] !px-0 !py-0 truncate overflow-hidden text-ellipsis whitespace-nowrap !w-16"
            // buttonsStyle=""
            iconWidth={5}
          />
          <CounterPrice
            baseComponent="endIndex"
            layoutStyle="bg-black-main"
            inputStyle="!bg-black-main !font-[500] !text-[40px] !px-0 !py-0 truncate overflow-hidden text-ellipsis whitespace-nowrap !w-16"
          />
        </div>
        <div className="grid py-5">
            <button onClick={handleSetFullRange} className={`${fullRange ? "bg-primary-main" :"bg-black-light2"}  font-[600] text-[16px] hover:opacity-65 text-white rounded-lg py-1`}>Full Range</button>
        </div>
      </div>
    </div>
  );
};

export default SetPriceRangeROI;
