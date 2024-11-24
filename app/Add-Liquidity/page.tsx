"use client";
import { ArrowLeftIcon } from "@/components/icons";
import SettingComponent from "@/components/setting/setting";
import SideBarSwapPage from "@/components/Swap/SideBar";
import { Text_16_400 } from "@/components/typography/Typography";
import Link from "next/link";
import ChooseToken from "@/components/liquidity/ChooseToken";
import SetPriceRange from "@/components/liquidity/SetPriceRange";
import Tooltip from "@/components/Tooltip/Tooltip";
import ROICalculatorMain from "@/components/ROICalculator/ROICalculatorMain";

const LiquidityPage: React.FC = () => {
  return (
    <div className="section-swap-page max_width_app flex">
      <div className="hidden lg:flex">
        <SideBarSwapPage />
      </div>
      <div className="flex-1 pt-6">
        <div className=" max-w-[600px] lg:max-w-[854px] bg-black-light1 mx-auto px-7 py-9 rounded-3xl">
          <div className="flex justify-between items-center pb-2">
            <div className="flex items-center gap-4">
              <Link
                href="/Liquidity"
                className="hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear"
              >
                <ArrowLeftIcon width={"30px"} />
              </Link>
              <Text_16_400 text="Add Liquidity" />
            </div>
            <div className="flex text-white gap-4 ">
              <ROICalculatorMain />
              <Tooltip widthIcon="25px" content="Calculated at the current rates with historical trading volume data, and subject to change based on various external variables. This figure is provided for your convenience only, and by no means represents guaranteed returns." />
              <SettingComponent baseComponent="HeaderSetting" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-8">
            <ChooseToken />
            <div className="hidden lg:grid grid-cols-1">
              <SetPriceRange />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidityPage;
