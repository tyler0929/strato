"use client";
import { ArrowRightIcon, ArrowSelect, CopyIcon } from "../icons";
import { Text_14_400, Text_16_600 } from "../typography/Typography";
import { useState } from "react";
import ModalComponent from "../modal/Modal";
import { Token, useSwapContext } from "../context/SwapContext";
import ManageToken from "./manateToken";

interface IPropsSelectToken {
  baseComponent: "inputCurrency" | "outputCurrency";
}
const SelectToken: React.FC<IPropsSelectToken> = ({
  baseComponent = "inputCurrency",
}) => {
  const {
    tokens,
    inputCurrency,
    outputCurrency,
    setInputCurrency,
    setOutputCurrency,
  } = useSwapContext();
  const [isOpen, setIsOpen] = useState(false);
  const [showManageToken , setShowManageToken] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
    setShowManageToken(false)
  };
  const handleSelectToken = (event: React.MouseEvent) => {
    const selectedId = event.currentTarget?.id;
    if (baseComponent === "inputCurrency" && selectedId === inputCurrency?.id)
      return;
    if (baseComponent === "outputCurrency" && selectedId === outputCurrency?.id)
      return;
    const selectToken = tokens?.filter(
      (item: Token) => item?.id === selectedId
    );
    if (baseComponent === "inputCurrency") {
      setInputCurrency(selectToken?.[0]);
    }
    if (baseComponent === "outputCurrency") {
      setOutputCurrency(selectToken?.[0]);
    }
    setIsOpen(!isOpen);
  };
  const handleShowManageToken = () => {
    setShowManageToken(!showManageToken)
  }
  return (
    <div className="flex gap-2 items-center">
      <div
        onClick={handleOpenModal}
        className="flex w-fit text-white gap-2 h-5 items-center hover:opacity-70 transition-all duration-200 ease-linear cursor-pointer"
      >
        {baseComponent === "inputCurrency" && inputCurrency?.iconAddress}
        {baseComponent === "outputCurrency" && outputCurrency?.iconAddress}
        <Text_16_600
          text={
            baseComponent === "inputCurrency"
              ? inputCurrency?.symbol
              : outputCurrency?.symbol
          }
        />
        <ArrowSelect width="30px" />
      </div>
        <div className="hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
        <CopyIcon width={"15px"}/>
        </div>
      {/* Modal */}
      <ModalComponent
        title={ showManageToken ? "Manage" : "Select Token"}
        isOpen={isOpen}
        isBack={showManageToken}
        onOpen={handleOpenModal}
        paddingContent="0px"
        backFunction={()=> setShowManageToken(false)}
        Footer={
          !showManageToken && <button 
          onClick={handleShowManageToken}
          className="m-auto py-5 font-PBold font-[600] text-[16px] text-primary-main hover:opacity-65 transition-all duration-200 ease-linear">
            Manage Tokens
          </button>
        }
      >
        {!showManageToken && <div className="mt-10 ">
          <div className="px-7">

          <input
            placeholder="Search name or paste address"
            className="bg-black-light2 mb-4 rounded-lg text-gray-gray1 text-[16px] h-12 outline-0 px-4 w-full border-none"
          />
          <Text_14_400 text="Common tokens" />
          </div>
          <div className=" flex gap-5 mt-4 px-7">
            {tokens?.map((item: Token) => {
              if (item.id === "3") return;
              return (
                <div
                  key={item?.id}
                  id={item?.id}
                  onClick={handleSelectToken}
                  className={`flex gap-2 border border-black-main rounded-lg px-2 py-2 ${
                    inputCurrency?.id === item?.id ||
                    outputCurrency?.id === item?.id
                      ? "opacity-55"
                      : "cursor-pointer hover:bg-black-main "
                  }`}
                >
                  {item?.iconAddress}
                  <p className="font-[400] text-[16px] text-white font-PBold">
                    {item?.symbol}
                  </p>
                </div>
              );
            })}
          </div>
          <div className=" grid mt-5">
            {tokens?.map((item: Token) => {
              return (
                <div
                  key={item?.id}
                  id={item?.id}
                  onClick={handleSelectToken}
                  className={`flex gap-2  rounded-lg px-7 py-1 items-center ${
                    inputCurrency?.id === item?.id ||
                    outputCurrency?.id === item?.id
                      ? "opacity-55"
                      : "cursor-pointer hover:bg-black-main "
                  }`}
                >
                  <div>{item?.iconAddress}</div>
                  <div className="flex justify-between items-center flex-1 text-white">
                    <div>
                      <p className="font-[400] text-[16px] text-white font-PBold">
                        {item?.symbol}
                      </p>
                      <p className="text-gray-gray1">{item?.name}</p>
                    </div>
                    <ArrowRightIcon width={"25px"} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-40"></div>
        </div>}
        {showManageToken && <div className="manage-token mt-10 px-7">
          <ManageToken />
        </div>}
      </ModalComponent>
    </div>
  );
};

export default SelectToken;
