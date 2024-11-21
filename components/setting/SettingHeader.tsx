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

interface IPropsSetting {}
const SettingComponentHeader: React.FC<IPropsSetting> = ({}) => {
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
      <div
        onClick={handleOpenModal}
        className="cursor-pointer hover:opacity-65 transition-all duration-200 ease-linear "
      >
        <SettingIcon />
      </div>

      <ModalComponent
        title="Settings"
        isOpen={isOpen}
        onOpen={handleOpenModal}
        styleHeader="bg-black-light2"
        width="max-w-xl"
        
      >
        <div className="py-7 ">
          <Text_16_600 text="Global" />

          <div className="grid gap-6 mt-5">
            <SettingSwitch
              isOn={isOn}
              onToggle={handleOnToggle}
              text="Subgraph Health Indicator"
              tooltipText="Turn on subgraph health indicator all the time. Default is to show the indicator only when the network is delayed"
            />
            <SettingSwitch
              isOn={isOn}
              onToggle={handleOnToggle}
              text="Show username"
              tooltipText="Shows username of wallet instead of bunnies"
            />
            <SettingSwitch
              isOn={isOn}
              onToggle={handleOnToggle}
              text="Allow notifications"
              tooltipText="Enables the web notifications feature. if turned off you will be automatically unsubscribed and the notification bell will not be visible"
            />
            <SettingSwitch
              isOn={isOn}
              onToggle={handleOnToggle}
              text="Token Risk Scanning"
              tooltipText="Automatic risk scanning for the selected token. This scanning result is for reference only, and should NOT be taken as investment advice.
Provided byHashDit
Learn More"
            />
          </div>

          <div className="flex items-center gap-2 mt-7">
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

        </div>
      </ModalComponent>
    </div>
  );
};

export default SettingComponentHeader;
