"use client";
import {
  LiquidityPoint,
  useLiquidityContext,
} from "../context/LiquidityContext";
import { AddIcon, MinusIcon } from "../icons";
import { Text_16_600 } from "../typography/Typography";

interface IPropsCounterPrice {
  baseComponent: "startIndex" | "endIndex";
  layoutStyle?:string,
  buttonsStyle?:string,
  inputStyle?:string,
  iconWidth?:number
}

const CounterPrice: React.FC<IPropsCounterPrice> = ({ baseComponent , layoutStyle  , buttonsStyle , inputStyle , iconWidth = 20}) => {
  const { liquidityPoints, setLiquidityPoints } = useLiquidityContext();

  const handleChangePoints = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLiquidityPoints((prevState:LiquidityPoint)=>({
        ...prevState,
      [baseComponent]: parseInt(event.currentTarget?.value),
    }));
  };

  const handleClickCounter = (event: React.MouseEvent) => {
    const id = event.currentTarget?.id;
    setLiquidityPoints((prevState: LiquidityPoint) => ({
        ...prevState,
      [baseComponent]:
        id === "minus"
          ? prevState?.[baseComponent] - 1
          : prevState?.[baseComponent] + 1,
    }));
  };
  return (
    <div className={`${layoutStyle} bg-black-light2 rounded-2xl py-3`}>
      <div className="px-4 pb-2 flex justify-center">
        <Text_16_600 text="Min Price" style={"!font-[400]"} />
      </div>
      <div className="flex items-center justify-between">
        <button
          id="minus"
          onClick={handleClickCounter}
          className={`${buttonsStyle} hover:opacity-65 w-9 h-9 flex justify-start items-start transition-all duration-200 ease-linear`}
        >
          <MinusIcon width={ "20px"} />
        </button>
        <input
          onChange={handleChangePoints}
          type="number"
          placeholder="0.0"
          value={
            baseComponent === "startIndex"
              ? liquidityPoints?.startIndex
              : liquidityPoints?.endIndex
          }
          className={`${inputStyle} no-spinner bg-black-light2 !font-ipa_font text-center rounded-lg font-[400]  text-[#f4eeff] text-[16px] h-12 outline-0  flex flex-1 border-none`}
        />
        <button
          id="add"
          onClick={handleClickCounter}
          className={`${buttonsStyle} hover:opacity-65 w-7 h-7 flex justify-center items-start transition-all duration-200 ease-linear`}
        >
          <AddIcon width={ "20px"} />
        </button>
      </div>
      <Text_16_600 text="POL Per STRAT" style="!font-[400] text-center" />
    </div>
  );
};

export default CounterPrice;
