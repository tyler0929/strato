"use client";
import { useState } from "react";
import { useSwapContext } from "../context/SwapContext";
import { ComingPriceIcon, SwapButton } from "../icons";
import {
  Text_12_600,
  Text_14_400,
  Text_16_600,
} from "../typography/Typography";
import HistoryPriceChart from "../charts/historyPriceChart";

const HistoryPrice = () => {
  const { inputCurrency, outputCurrency, setInputCurrency, setOutputCurrency } =
    useSwapContext();
  const [selectedFilter, setSelectedFilter] = useState("24H");

  const handleChangeInputOutputCurrency = () => {
    const input = inputCurrency;
    const output = outputCurrency;
    setInputCurrency(output);
    setOutputCurrency(input);
  };

  const handleSelectFilter = (event: React.MouseEvent) => {
    setSelectedFilter(event?.currentTarget?.id);
  };
  return (
    <div>
      <Text_12_600 text="History Price" style="uppercase" />
      <div className="flex justify-end py-2">
        <div className=" flex gap-1 items-center">
          <Text_14_400 text="View prices in" />
          <button
            onClick={handleChangeInputOutputCurrency}
            className="cursor-pointer hover:opacity-65 text-[12px] font-[600] transition-all duration-200 ease-linear flex items-center bg-gray-gray2 px-2 rounded-lg text-white py-1 gap-2"
          >
            {inputCurrency?.symbol} <SwapButton width={"20px"} />
          </button>
        </div>
      </div>
      <div className="flex bg-black-light2 rounded-lg">
        <button
          id="24H"
          onClick={handleSelectFilter}
          className={`${
            selectedFilter === "24H" ? "bg-primary-main" : ""
          } flex flex-1 font-[600] text-[16] text-white  rounded-lg py-1 items-center justify-center hover:opacity-65 transition-all duration-200 ease-linear`}
        >
          24H
        </button>
        <button
          id="7D"
          onClick={handleSelectFilter}
          className={`${
            selectedFilter === "7D" ? "bg-primary-main" : ""
          } flex flex-1 font-[600] text-[16] text-white  rounded-lg py-1 items-center justify-center hover:opacity-65 transition-all duration-200 ease-linear`}
        >
          7D
        </button>
        <button
          id="30D"
          onClick={handleSelectFilter}
          className={`${
            selectedFilter === "30D" ? "bg-primary-main" : ""
          } flex flex-1 font-[600] text-[16] text-white  rounded-lg py-1 items-center justify-center hover:opacity-65 transition-all duration-200 ease-linear`}
        >
          30D
        </button>
        <button
          id="1Y"
          onClick={handleSelectFilter}
          className={`${
            selectedFilter === "1Y" ? "bg-primary-main" : ""
          } flex flex-1 font-[600] text-[16] text-white  rounded-lg py-1 items-center justify-center hover:opacity-65 transition-all duration-200 ease-linear`}
        >
          1Y
        </button>
      </div>
      {(selectedFilter === "24H" || selectedFilter === "7D") && (
        <div className="flex flex-col justify-center gap-3  items-center">
          <div className="h-fit grid justify-center items-center w-fit py-10 gap-5">
            <ComingPriceIcon
              width={"80px"}
              height={"80px"}
              style={{ margin: "0 auto" }}
            />
            <Text_16_600 text="Price will appear here" />
          </div>
        </div>
      )}
      {(selectedFilter === "30D" || selectedFilter === "1Y") && (
        <div className="w-full h-40 mt-5">
          <HistoryPriceChart />
        </div>
      )}
      {(selectedFilter === "30D" || selectedFilter === "1Y") && <div className="flex gap-3 justify-between mt-3">
        <div className="flex flex-1 justify-between bg-black-main rounded-xl py-1 px-2">
          <Text_14_400 text="MIN" />
          <Text_14_400 text="99.3815" />
        </div>
        <div className="flex flex-1 justify-between bg-black-main rounded-xl py-1 px-2">
          <Text_14_400 text="MAX" />
          <Text_14_400 text="101.796" />
        </div>
      </div>}
      {(selectedFilter === "30D" || selectedFilter === "1Y") && <div className="flex gap-3 justify-between mt-3">
        <div className="flex flex-1 justify-between bg-black-main rounded-xl py-1 px-2">
          <Text_14_400 text="Avg" />
          <Text_14_400 text="33.6084" />
        </div>
        <div className="flex flex-1 justify-between bg-black-main rounded-xl py-1 px-2">
          <Text_14_400 text="Current" />
          <Text_14_400 text="101.796" />
        </div>
      </div>}
    </div>
  );
};

export default HistoryPrice;
