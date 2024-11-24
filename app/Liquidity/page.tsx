"use client"
import CustomCheckbox from "@/components/checkbox/customCheckbox";
import { HistoryTransictionIcon } from "@/components/icons";
import SettingComponent from "@/components/setting/setting";
import SideBarSwapPage from "@/components/Swap/SideBar";
import { Text_14_400, Text_20_600 } from "@/components/typography/Typography";
import Link from "next/link";

const LiquidityPage: React.FC = () => {
  return (
    <div className="section-swap-page max_width_app flex">
      <div>
        <SideBarSwapPage />
      </div>
      <div className="flex-1 pt-6 h-[80vh]">
        <div className=" max-w-[854px] bg-black-light1 mx-auto px-7 py-9 rounded-3xl">
          <div className="flex justify-between items-center pb-2">
            <Text_20_600 text="Your Liquidity" />
            <div className="flex text-white gap-4 ">
              <HistoryTransictionIcon />
              <SettingComponent baseComponent="HeaderSetting" />
            </div>
          </div>
          <Text_14_400 text="List of your liquidity positions" />
          <div className="flex justify-between items-center pt-7">
            <div>
              <button className="text-white bg-primary-main px-5 py-1 rounded-lg font-[600] text-[16px] hover:opacity-65 transition-all duration-200 ease-linear">
                All
              </button>
            </div>
            <CustomCheckbox label="Hide closed positions" onClick={() => {}}/>
          </div>
          <div className="grid mt-20">
            <Link href={"/Add-Liquidity"} className="w-full grid">
            <button className="text-white text-[16px] font-[600] h-12 rounded-full hover:opacity-65 bg-primary-main transition-all duration-200 ease-linear ">Add Liquidity</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidityPage;
