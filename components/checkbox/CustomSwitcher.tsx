"use client"
import React, { useState } from "react";

interface IPropsCustomSwitcher  {
onChange?:(checked:boolean) => void,
label?:string
positionLabel?:"Start" | "End",
labelStyle?:string
containerStyle?:string,
circleStyle?:string
}

const CustomSwitcher: React.FC<IPropsCustomSwitcher> = ({onChange , label , positionLabel , labelStyle , containerStyle , circleStyle}) => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggleSwitch = (): void => {
    
      if (onChange) onChange(!isOn)
    setIsOn(!isOn)
  };

  return (
    <div className="flex gap-2 items-center">
        {positionLabel=== "Start" && <label className={labelStyle}>{label}</label>}
    <div
      onClick={toggleSwitch}
      className={`${containerStyle} w-16 h-8 flex items-center rounded-full cursor-pointer px-1 ${
        isOn ? "bg-primary-main" : "bg-black-light2"
      }`}
    >
      <div
        className={`${circleStyle} w-6 h-6 bg-black-main rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? "translate-x-8" : "translate-x-0"
        }`}
      ></div>
    </div>
    {positionLabel=== "End" && <label className={labelStyle}>{label}</label>}
    </div>
  );
};

export default CustomSwitcher;
