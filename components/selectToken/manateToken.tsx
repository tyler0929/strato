import { useState } from "react";

import  Thump from "@/public/assets/images/thumb.png"
import Image from "next/image";

const ManageToken = () => {
  const [selectedTap, setSelectedTap] = useState("Lists");
  const handleSelectTab = (event: React.MouseEvent) => {
    setSelectedTap(event.currentTarget?.id);
  };
  return (
    <div>
      <div className="manage-header grid grid-cols-2 h-9 bg-black-light2 rounded-md">
        <div
          id="Lists"
          onClick={handleSelectTab}
          className={`text-center font-[600] font-PBold  flex items-center justify-center cursor-pointer hover:opacity-70 transition-all duration-200 ease-linear text-[16px] ${
            selectedTap === "Lists" ? "bg-white rounded-md " : "text-white"
          }`}
        >
          Lists
        </div>
        <div
          id="Tokens"
          onClick={handleSelectTab}
          className={`text-center font-[600] font-PBold  flex items-center justify-center cursor-pointer hover:opacity-70 transition-all duration-200 ease-linear text-[16px] ${
            selectedTap === "Tokens" ? "bg-white rounded-md " : "text-white"
          }`}
        >
          Lists
        </div>
      </div>
      {selectedTap === "Lists" && (
        <div className="mt-4">
          <input
            placeholder="https:// or ipfs://"
            className="bg-black-light2 mb-4 rounded-lg text-gray-gray1 text-[16px] h-12 outline-0 px-4 w-full border-none"
          />
          <div className="flex gap-3 mt-2 opacity-60">
            <Image src={Thump} alt="thump" width={45} />
            <div>
                <p className="font-PBold font-[600] text-white text-[16px]">CoinGecko</p>
                <p className="font-PLight font-[400] text-white text-[12px]">1108 Tokens</p>
            </div>
            </div>
        </div>
      )}
      {selectedTap === "Tokens" && (
        <div className="mt-4">
          <input
            placeholder="0x0000"
            className="bg-black-light2 mb-4 rounded-lg text-gray-gray1 text-[16px] h-12 outline-0 px-4 w-full border-none"
          />
          <div className="flex mt-2 text-[16px] font-PBold text-gray-gray1">
          0 Imported Tokens
            </div>
        </div>
      )}
    </div>
  );
};

export default ManageToken;
