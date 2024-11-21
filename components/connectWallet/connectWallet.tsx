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

const ConnectWallet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full grid">
      <button
        onClick={handleOpenModal}
        className="bg-primary-main h-12 font-[600] font-PBold text-[16px] hover:opacity-65 text-white rounded-full transition-all duration-200 ease-linear"
      >
        Connect Wallet
      </button>
      <ModalComponent
        title="Connect Wallet"
        isOpen={isOpen}
        onOpen={handleOpenModal}
        styleHeader="!px-14"
        paddingContent="p-0"
      >
        <div className="">
          <p className="font-[400] font-PLight text-[14px] text-white opacity-65 pt-2 pb-5 px-12">
            Start by connecting with one of the wallets below. Be sure to store
            your private keys or seed phrase securely. Never share them with
            anyone.
          </p>
          <div className="grid grid-cols-3 gap-y-10 justify-around overflow-y-auto max-h-80 px-12">
            <div className="flex flex-col items-center gap-1 justify-center max-w-24  hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
              <Image src={Metamask} alt="Metamask" width={55} />
              <p className="font-[400] text-[12px] text-white font-PLight text-center">
                Metamask
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
              <Image src={Binance} alt="Metamask" width={55} />
              <p className="font-[400] text-[12px] text-white font-PLight text-center">
                Binance Wallet
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
              <Image src={BinanceW3w} alt="Metamask" width={55} />
              <p className="font-[400] text-[12px] text-white font-PLight text-center">
                Binance Web3 Wallet
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
              <Image src={Coinbase} alt="Metamask" width={55} />
              <p className="font-[400] text-[12px] text-white font-PLight text-center">
                Coinbase
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
              <Image src={Trust} alt="Metamask" width={55} />
              <p className="font-[400] text-[12px] text-white font-PLight text-center">
                Trust Wallet
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
              <Image src={WalletConnect} alt="WalletConnect" width={55} />
              <p className="font-[400] text-[12px] text-white font-PLight text-center">
                Wallet Connect
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
              <Image src={Opera} alt="Opera" width={55} />
              <p className="font-[400] text-[12px] text-white font-PLight text-center">
                Opera Wallet
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
              <Image src={Brave} alt="Brave" width={55} />
              <p className="font-[400] text-[12px] text-white font-PLight text-center">
                Brave Wallet
              </p>
            </div>
            {!showMore && (
              <div onClick={()=>setShowMore(true)} className="cursor-pointer hover:opacity-65 transition-all duration-200  ease-linear grid justify-center items-center">
                <div className="w-[50px] h-[50px] bg-[#1e1d20] rounded-xl flex justify-center items-center ">
                  <MoreIcon width="20px" />
                </div>
                <p className="font-[400] text-[12px] text-white font-PLight text-center">
                  More
                </p>
              </div>
            )}
            {showMore && (
              <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
                <Image src={Robby} alt="Robby" width={55} />
                <p className="font-[400] text-[12px] text-white font-PLight text-center">
                Robby Wallet
                </p>
              </div>
            )}
            {showMore && (
              <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
                <Image src={MathWallet} alt="MathWallet" width={55} />
                <p className="font-[400] text-[12px] text-white font-PLight text-center">
                Math Wallet
                </p>
              </div>
            )}
            {showMore && (
              <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
                <Image src={TokenPocket} alt="TokenPocket" width={55} />
                <p className="font-[400] text-[12px] text-white font-PLight text-center">
                Token Pocket
                </p>
              </div>
            )}
            {showMore && (
              <div className="flex flex-col items-center gap-1 justify-center max-w-24 hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
                <Image src={TokenPocket} alt="TokenPocket" width={55} />
                <p className="font-[400] text-[12px] text-white font-PLight text-center">
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
