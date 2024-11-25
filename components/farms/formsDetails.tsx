import Link from "next/link";
import { LinkIcon } from "../icons";
import { Text_12_600, Text_14_400, Text_16_400, Text_16_600 } from "../typography/Typography";
import ConnectWallet from "../connectWallet/connectWallet";
import Tooltip from "../Tooltip/Tooltip";

const DetailsFarms = () => {
  return (
    <div className="bg-[#3a4560] px-16 py-5 rounded-2xl grid lg:grid-cols-2 gap-5">
      <div className="grid  lg:hidden">
        <div className="border-2 border-[#FFF] px-4 py-4 rounded-2xl" >
            <Text_12_600 text="USDC Earned" style="uppercase"/>
            <div className="flex justify-between items-center pt-2">
                <ConnectWallet />
            </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">

      <div className="grid lg:hidden">
            <Text_16_400 text="Staked Liquidity" />
            <div className="flex justify-between items-center">
              <Text_16_600 text="$0" style="!text-[#666171]" />

              <Tooltip
                content="Total active (in-range) liquidity staked in the farm."
                position="top"
              />
            </div>
          </div>
          <div className="flex lg:hidden flex-col gap-0 items-start justify-start">
            <Text_16_400 text="Multiplier" />
            <div>
              <Text_16_600 text="20X" />
            </div>
          </div>
          <div className=" gap-0 items-start justify-start grid xl:hidden">
            <Text_16_400 text="Available" />
            <Text_16_400 text="0LP" style="!text-[#666171]" />
          </div>
          <div className=" gap-0 items-start justify-start grid xl:hidden">
            <Text_16_400 text="Staked" />
            <Text_16_400 text="0LP" style="!text-[#666171]" />
          </div>
       
        <div className="flex items-center gap-1">
          <Link href={"#"}>
            <Text_16_600 text="Add USDC-POL LP"  style={"hover:underline"}/>
          </Link>
          <LinkIcon width={"20px"}/>
        </div>
        <div className="flex items-center gap-1">
          <Link href={"#"}>
            <Text_16_600 text="See Pair Info"  style={"hover:underline"}/>
          </Link>
          <LinkIcon width={"20px"}/>
        </div>
        <div className="flex items-center gap-1">
          <Link href={"#"}>
            <Text_16_600 text="View Contract" style={"hover:underline"} />
          </Link>
          <LinkIcon width={"20px"}/>
        </div>
      </div>
      <div className="hidden  lg:grid">
        <div className="border-2 border-[#FFF] px-4 py-4 rounded-2xl" >
            <Text_12_600 text="USDC Earned" style="uppercase"/>
            <div className="flex justify-between items-center pt-2">
                <ConnectWallet />
            </div>
        </div>
      </div>
    </div>
  );
};


export default DetailsFarms