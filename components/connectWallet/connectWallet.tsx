import { useState } from "react";
import ModalComponent from "../modal/Modal";
import Image from "next/image";

import Metamask from '@/public/assets/images/wallet/metamask.png'
import BinanceW3w from '@/public/assets/images/wallet/binance-w3w.png'
import Binance from '@/public/assets/images/wallet/binance.png'
import Coinbase from '@/public/assets/images/wallet/coinbase.png'
import Trust from '@/public/assets/images/wallet/trust.png'

const ConnectWallet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full grid">
      <button onClick={handleOpenModal} className="bg-primary-main h-12 font-[600] font-PBold text-[16px] hover:opacity-65 text-white rounded-full transition-all duration-200 ease-linear">
        Connect Wallet
      </button>
      <ModalComponent
        title="Connect Wallet"
        isOpen={isOpen}
        onOpen={handleOpenModal}
      >
        <div>
          <p className="font-[400] font-PLight text-[14px] text-white opacity-65 pt-6 pb-8">
            Start by connecting with one of the wallets below. Be sure to store
            your private keys or seed phrase securely. Never share them with
            anyone.
          </p>
          <div className="grid grid-cols-3 gap-y-10 justify-around">
            <div className="flex flex-col items-center gap-1 justify-center max-w-24 ">
                <Image src={Metamask} alt="Metamask" width={55}/>
                <p className="font-[400] text-[12px] text-white font-PLight text-center">Metamask</p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center max-w-24">
                <Image src={Binance} alt="Metamask" width={55}/>
                <p className="font-[400] text-[12px] text-white font-PLight text-center">Binance Wallet</p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center max-w-24">
                <Image src={BinanceW3w} alt="Metamask" width={55}/>
                <p className="font-[400] text-[12px] text-white font-PLight text-center">Binance Web3 Wallet</p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center max-w-24">
                <Image src={Coinbase} alt="Metamask" width={55}/>
                <p className="font-[400] text-[12px] text-white font-PLight text-center">Coinbase</p>
            </div>
            <div className="flex flex-col items-center gap-1 justify-center max-w-24">
                <Image src={Trust} alt="Metamask" width={55}/>
                <p className="font-[400] text-[12px] text-white font-PLight text-center">Trust Wallet</p>
            </div>
          </div>
        </div>
      </ModalComponent>
    </div>
  );
};
export default ConnectWallet;
