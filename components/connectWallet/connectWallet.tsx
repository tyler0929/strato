"use client";
import { useState } from "react";
import ModalComponent from "../modal/Modal";
import Image from "next/image";

import Metamask from "@/public/assets/images/wallet/metamask.png";
import BinanceW3w from "@/public/assets/images/wallet/binance-w3w.png";
import Binance from "@/public/assets/images/wallet/binance.png";
import Coinbase from "@/public/assets/images/wallet/coinbase.png";
import Trust from "@/public/assets/images/wallet/trust.png";
import WalletConnect from "@/public/assets/images/wallet/walletconnect.png";
import Opera from "@/public/assets/images/wallet/opera.png";
import Brave from "@/public/assets/images/wallet/brave.png";
import Robby from "@/public/assets/images/wallet/rabby.png";
import MathWallet from "@/public/assets/images/wallet/mathwallet.png";
import TokenPocket from "@/public/assets/images/wallet/tokenpocket.png";
import { MoreIcon } from "../icons";

interface IPropsConnectNetwork {
  baseComponent?: "Header" | "Swap";
  style?:string
}
const ConnectWallet: React.FC<IPropsConnectNetwork> = ({
  baseComponent = "Swap",
  style
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={` ${baseComponent === "Header" ? style :"w-full"} grid`}>
      {baseComponent === "Swap" && (
        <button
          onClick={handleOpenModal}
          className="bg-primary-main h-12 font-[600]  text-[16px] hover:opacity-65  text-white rounded-full transition-all duration-200 ease-linear"
        >
          Connect Wallet
        </button>
      )}
      {baseComponent === "Header" && (
        <button  onClick={handleOpenModal} className="rounded-full w-full text-[16px] text-center hidden lg:grid font-[600] text-white border hover:opacity-70 transition-all duration-200 ease-linear border-primary-main px-7 py-3">
          Connect Wallet
        </button>
      )}
      {baseComponent === "Header" && (
        <button  onClick={handleOpenModal} className="rounded-full text-[16px] lg:hidden text-center font-[600] text-white border hover:opacity-70 transition-all duration-200 ease-linear border-primary-main px-7 py-3">
          Connect
        </button>
      )}
      <ModalComponent
        title="Connect Wallet"
        isOpen={isOpen}
        onOpen={handleOpenModal}
        styleHeader="!px-12 !pt-7"
        paddingContent="p-0"
      >
        <div className="">
          <p className="font-[400]  text-[14px] text-white opacity-65 pt-2 pb-5 px-12">
            Start by connecting with one of the wallets below. Be sure to store
            your private keys or seed phrase securely. Never share them with
            anyone.
          </p>
          <div className="grid grid-cols-3 gap-y-10 justify-around overflow-y-auto max-h-80 px-12">
            <div className="flex flex-col items-center gap-1 justify-center max-w-24  hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
              <Image src={Metamask} alt="Metamask" width={55} />
              <p className="font-[400] text-[12px] text-white  text-center">
                Metamask
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
              <Image src={Binance} alt="Metamask" width={55} />
              <p className="font-[400] text-[12px] text-white  text-center">
                Binance Wallet
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
              <Image src={BinanceW3w} alt="Metamask" width={55} />
              <p className="font-[400] text-[12px] text-white  text-center">
                Binance Web3 Wallet
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
              <Image src={Coinbase} alt="Metamask" width={55} />
              <p className="font-[400] text-[12px] text-white  text-center">
                Coinbase
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
              <Image src={Trust} alt="Metamask" width={55} />
              <p className="font-[400] text-[12px] text-white  text-center">
                Trust Wallet
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
              <Image src={WalletConnect} alt="WalletConnect" width={55} />
              <p className="font-[400] text-[12px] text-white  text-center">
                Wallet Connect
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
              <Image src={Opera} alt="Opera" width={55} />
              <p className="font-[400] text-[12px] text-white  text-center">
                Opera Wallet
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
              <Image src={Brave} alt="Brave" width={55} />
              <p className="font-[400] text-[12px] text-white  text-center">
                Brave Wallet
              </p>
            </div>
            {!showMore && (
              <div
                onClick={() => setShowMore(true)}
                className="cursor-pointer flex flex-col max-w-24 hover:opacity-65 transition-all duration-200  ease-linear justify-center items-center"
              >
                <div className="w-[55px] h-[55px] bg-[#1e1d20] rounded-xl flex justify-center items-center ">
                  <MoreIcon width="20px" />
                </div>
                <p className="font-[400] text-[12px] text-white  text-center">
                  More
                </p>
              </div>
            )}
            {showMore && (
              <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
                <Image src={Robby} alt="Robby" width={55} />
                <p className="font-[400] text-[12px] text-white  text-center">
                  Robby Wallet
                </p>
              </div>
            )}
            {showMore && (
              <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
                <Image src={MathWallet} alt="MathWallet" width={55} />
                <p className="font-[400] text-[12px] text-white  text-center">
                  Math Wallet
                </p>
              </div>
            )}
            {showMore && (
              <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
                <Image src={TokenPocket} alt="TokenPocket" width={55} />
                <p className="font-[400] text-[12px] text-white  text-center">
                  Token Pocket
                </p>
              </div>
            )}
            {showMore && (
              <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
                <Image src={TokenPocket} alt="TokenPocket" width={55} />
                <p className="font-[400] text-[12px] text-white  text-center">
                  Token Pocket
                </p>
              </div>
            )}
          </div>
        </div>
      </ModalComponent>
    </div>
  );
};
export default ConnectWallet;
