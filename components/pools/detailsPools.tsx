import Link from "next/link";
import { LinkIcon } from "../icons";
import {
  Text_12_600,
  Text_14_400,
  Text_16_400,
  Text_16_600,
} from "../typography/Typography";
import USDCEarned from "./USDCEarned";
import ConnectWallet from "../connectWallet/connectWallet";
import ARPSetting from "../Farms/ARPSetting";

const DetailsPools = () => {
  return (
    <div className="bg-[#3a4560] px-5 py-5 rounded-2xl grid lg:grid-cols-[30%_65%] gap-5">
      <div className="grid md:grid-cols-2 gap-4 lg:hidden">
        <USDCEarned />
        <div className="border-2 border-[#1f2c4a] px-4 py-4 rounded-2xl">
          <Text_12_600 text="USDC Earned" style="uppercase" />
          <div className="flex justify-between items-center pt-2">
            <ConnectWallet />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-between items-center ">
          <Text_14_400 text="APR:" />
          <div className="flex items-center">
            <ARPSetting label="0.00%"/>
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <Text_14_400 text="Ends in:" />
          <Text_14_400 text="2956 days" />
        </div>
        <div className="flex items-center gap-1">
          <Link href={"#"}>
            <Text_16_600 text="See Token Info" style={"hover:underline"} />
          </Link>
          <LinkIcon width={"20px"} />
        </div>
        <div className="flex items-center gap-1">
          <Link href={"#"}>
            <Text_16_600 text="View Project Site" style={"hover:underline"} />
          </Link>
          <LinkIcon width={"20px"} />
        </div>
        <div className="flex items-center gap-1">
          <Link href={"#"}>
            <Text_16_600 text="View Contract" style={"hover:underline"} />
          </Link>
          <LinkIcon width={"20px"} />
        </div>
      </div>
      <div className="hidden md:grid-cols-2 gap-4 lg:grid">
        <USDCEarned />
        <div className="border-2 border-[#1f2c4a] px-4 py-4 rounded-2xl">
          <Text_12_600 text="USDC Earned" style="uppercase" />
          <div className="flex justify-between items-center pt-2">
            <ConnectWallet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPools;
