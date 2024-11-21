"use client";
import { useState } from "react";
import { EditIcon, SettingIcon } from "../icons";
import ModalComponent from "../modal/Modal";
import { Text_16_400, Text_16_600 } from "../typography/Typography";
import Tooltip from "../Tooltip/Tooltip";
import TransactionSpeed from "./transactionSpeed";
import SlippageTolerance from "./slippageTolerance";
import SettingSwitch from "./settingSwitch";
import CustomizeRouting from "./CustomizeRouting";

interface IPropsSetting {
  baseComponent?: "HeaderSetting" | "SwapSetting";
}
const SettingComponent: React.FC<IPropsSetting> = ({
  baseComponent = "SwapSetting",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };
  const handleOnToggle = (value: boolean) => {
    setIsOn(value);
  };
  return (
    <div>
      {baseComponent === "SwapSetting" && (
        <div className=" flex justify-between items-center px-5">
          <div className="flex gap-4">
            <p className="text-white font-[600]  text-[12px]">
              Slippage Tolerance
            </p>
            <div
              onClick={handleOpenModal}
              className="hover:opacity-65 text-primary-main cursor-pointer transition-all duration-200 ease-linear"
            >
              <EditIcon width={"11px"} />
            </div>
          </div>
          <p className="text-primary-main font-[600]  text-[12px] ">0.5%</p>
        </div>
      )}
      {baseComponent === "HeaderSetting" && (
        <div
          onClick={handleOpenModal}
          className="cursor-pointer hover:opacity-65 transition-all duration-200 ease-linear "
        >
          <SettingIcon />
        </div>
      )}
      <ModalComponent
        title="Settings"
        isOpen={isOpen}
        onOpen={handleOpenModal}
        styleHeader="bg-black-light2"
        width="max-w-xl"
        Footer={<CustomizeRouting />}
      >
        <div className="py-7 ">
          <Text_16_600 text="Swaps & Liquidity" />
          <div className="flex items-center gap-2">
            <Text_16_400
              text="Default Transaction Speed (GWEI)"
              style="opacity-70"
            />
            <Tooltip
              width="w-80"
              content="Adjusts the gas price (transaction fee) for your transaction. Higher GWEI = higher speed = higher fees.
Choose “Default” to use the settings from your current blockchain RPC node."
              position="top"
            />
          </div>
          <div>
            <TransactionSpeed />
          </div>
          <div className="flex items-center gap-2">
            <Text_16_400 text="Slippage Tolerance" style="opacity-70" />
            <Tooltip
              width="w-80"
              content="Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution."
              position="top"
            />
          </div>
          <div>
            <SlippageTolerance />
          </div>
          <div className="grid gap-6 mt-5">
            <SettingSwitch
              isOn={isOn}
              onToggle={handleOnToggle}
              text="Tx deadline (mins)"
              tooltipText="Your transaction will revert if it is left confirming for longer than this time."
              isInput
            />
            <SettingSwitch
              isOn={isOn}
              onToggle={handleOnToggle}
              text="Expert Mode"
              tooltipText="Bypasses confirmation modals and allows high slippage trades. Use at your own risk."
            />
            <SettingSwitch
              isOn={isOn}
              onToggle={handleOnToggle}
              text="Flippy sounds"
              tooltipText="Fun sounds to make a truly immersive pancake-flipping trading experience"
            />
          </div>
        </div>
      </ModalComponent>
    </div>
  );
};

export default SettingComponent;
