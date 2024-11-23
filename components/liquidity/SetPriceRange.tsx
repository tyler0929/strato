"use client";
import { useState } from "react";
import SelectLiquidityChart from "../charts/selectLiquidityChart";
import ConnectWallet from "../connectWallet/connectWallet";
import { useLiquidityContext } from "../context/LiquidityContext";
import { SwapButton, ZoomInIcon, ZoomOutIcon } from "../icons";
import SettingButton from "../setting/button";
import { Text_14_400, Text_16_600 } from "../typography/Typography";
import CounterPrice from "./counterPrice";
import { useSwapContext } from "../context/SwapContext";

const SetPriceRange = () => {
  const { setLiquidityData } = useLiquidityContext();
  const { inputCurrency  , outputCurrency , setInputCurrency , setOutputCurrency} = useSwapContext();

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
    const input = inputCurrency
    const output = outputCurrency
    setInputCurrency(output)
    setOutputCurrency(input)
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <Text_16_600 text="Set Price Range" />
        <div className=" flex gap-1 items-center">
          <Text_14_400 text="View prices in" />
          <button onClick={handleChangeInputOutputCurrency} className="cursor-pointer hover:opacity-65 transition-all duration-200 ease-linear flex items-center bg-gray-gray2 px-2 rounded-lg text-white py-1 gap-4">
            {inputCurrency?.symbol} <SwapButton width={"20px"} />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center py-4 gap-5 ">
        <p className="text-white text-[12px] font-[400] flex-1 text-end">
          Current Price:0.00982359 POL per STRAT
        </p>
        <div className="flex gap-3">
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
      <div className="h-36">
        <SelectLiquidityChart />
      </div>
      <div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <CounterPrice baseComponent="startIndex" />
          <CounterPrice baseComponent="endIndex" />
        </div>
        <div className="flex justify-between pt-3  pb-3">
          <SettingButton
            onClick={handleChangeLiquidity}
            selected={selectedLiquidity}
            text="5%"
            defaultStyle="!bg-gray-gray2 !px-6  "
          />
          <SettingButton
            onClick={handleChangeLiquidity}
            selected={selectedLiquidity}
            text="10%"
            defaultStyle="!bg-gray-gray2 !px-6  "
          />
          <SettingButton
            onClick={handleChangeLiquidity}
            selected={selectedLiquidity}
            text="20%"
            defaultStyle="!bg-gray-gray2 !px-6"
          />
          <SettingButton
            onClick={handleChangeLiquidity}
            selected={selectedLiquidity}
            text="Full Range"
            defaultStyle="!bg-gray-gray2 !px-6 "
          />
        </div>
        <div className=" hidden lg:grid">
          <ConnectWallet baseComponent="Header" style="w-full !grid" />
        </div>
      </div>
    </div>
  );
};

export default SetPriceRange;
