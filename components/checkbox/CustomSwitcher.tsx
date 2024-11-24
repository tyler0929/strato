import React, { useState } from "react";

interface IPropsCustomSwitcher  {
onChange?:(checked:boolean) => void
}

const CustomSwitcher: React.FC<IPropsCustomSwitcher> = ({onChange}) => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggleSwitch = (): void => {
    
      if (onChange) onChange(!isOn)
    setIsOn(!isOn)
  };

  return (
    <div
      onClick={toggleSwitch}
      className={`w-16 h-8 flex items-center rounded-full cursor-pointer px-1 ${
        isOn ? "bg-primary-main" : "bg-black-light2"
      }`}
    >
      <div
        className={`w-6 h-6 bg-black-main rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? "translate-x-8" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default CustomSwitcher;
