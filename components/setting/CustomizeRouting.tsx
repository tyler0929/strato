import { useState } from "react";
import ModalComponent from "../modal/Modal";
import { Text_16_600 } from "../typography/Typography";
import SettingSwitch from "./settingSwitch";

const CustomizeRouting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };
  const handleOnToggle = (value: boolean) => {
    setIsOn(value);
  };

  return (
    <div className="flex justify-center items-center w-full h-16">
      <button
        onClick={handleOpenModal}
        className=" py-4 font-[600] text-[16px] text-white transition-all duration-200 ease-linear hover:opacity-65"
      >
        Customize Routing
      </button>
      <ModalComponent
        title="Customize Routing"
        onOpen={handleOpenModal}
        isOpen={isOpen}
        width="!max-w-2xl"
      >
        <div>
          <div className="">
            <Text_16_600 text="Liquidity source" />
          </div>
          <div className="grid gap-5 mt-5">
            <SettingSwitch
              isOn={isOn}
              onToggle={handleOnToggle}
              text="StratoSwap V3"
              tooltipText="V3 offers concentrated liquidity to provide deeper liquidity for traders with the same amount of capital, offering lower slippage and more flexible trading fee tiers."
            />
            <SettingSwitch
              isOn={isOn}
              onToggle={handleOnToggle}
              text="StratoSwap V2"
              tooltipText="The previous V2 exchange is where a number of iconic, popular assets are traded. Recommend leaving this on to ensure backward compatibility."
            />
            
          </div>
          <div className="mt-7">
            <Text_16_600 text="Routing preference" />
          </div>
          <div className="grid gap-5 mt-5">
          <SettingSwitch
              isOn={isOn}
              onToggle={handleOnToggle}
              text="Allow Multihops"
              tooltipText="Multihops enables token swaps through multiple hops between several pools to achieve the best deal. Turning this off will only allow direct swap, which may cause higher slippage or even fund loss."
              isCheckbox
            />
          <SettingSwitch
              isOn={isOn}
              onToggle={handleOnToggle}
              text="Allow Split Routing"
              tooltipText="Split routing enables token swaps to be broken into multiple routes to achieve the best deal. Turning this off will only allow a single route, which may result in low efficiency or higher slippage."
              isCheckbox
            />
          </div>
        </div>
      </ModalComponent>
    </div>
  );
};

export default CustomizeRouting;
