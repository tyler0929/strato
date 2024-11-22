import { ReactNode, useState } from "react";
import Pol from "@/public/assets/images/pol.png";
import Image from "next/image";
import { ArrowDown } from "../icons";

type Network = {
  icon: ReactNode;
  name: string;
  id: string;
  symbol:string
};
const SelectNetwork = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<Network>({
    icon: <Image src={Pol} alt="pol" width={30} />,
    name: "Polygon Testnet",
    id: "1",
    symbol:"POL"
  });
  return (
    <div className="relative group  h-full flex items-center">
      <div className="flex gap-2 items-center bg-black-light1 px-2 py-2 rounded-full cursor-pointer hover:opacity-65">
        {selectedNetwork?.icon}
        <p className="font-[600] text-[15px] text-white hidden lg:flex">
          {selectedNetwork?.name}
        </p>
        <p className="font-[600] text-[15px] text-white lg:hidden">
          {selectedNetwork?.symbol}
        </p>
        <ArrowDown width={25} />
      </div>
      <div className="absolute top-24 -left-7 bg-[#1a243e] border border-[#1a243e] rounded-2xl pt-1 w-72 z-[1001] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
        <p className="font-[400] text-[14px] text-white opacity-70 px-3 py-4">
          Select a Network
        </p>
        <div className="my-2">
          <div className="px-3 hover:bg-black-light2 cursor-pointer flex gap-4 py-3">
            {selectedNetwork?.icon}
            <p className="font-[600] text-[16px] text-white ">
              {selectedNetwork?.name}
            </p>
          </div>
          {/* <div className="px-3 hover:bg-black-light2 cursor-pointer flex gap-4 py-3">
            {selectedNetwork?.icon}
            <p className="font-[600] text-[16px] text-white">
              {selectedNetwork?.name}
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default SelectNetwork;
