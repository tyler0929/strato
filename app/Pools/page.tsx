import PoolsHeader from "@/components/pools/PoolsHeader";
import PoolsMainComponent from "@/components/pools/poolsMain";
import SideBarSwapPage from "@/components/Swap/SideBar";
import { Text_14_600, Text_20_600 } from "@/components/typography/Typography";

const PoolsPage: React.FC = () => {
  return (
    <div className="section-swap-page max_width_app flex">
      <div className="hidden lg:flex">
        <SideBarSwapPage />
      </div>
      <div className="flex-1">
        <div className="max-w-[1100px] mx-auto px-5 py-7 min-h-[90vh] rounded-xl bg-black-light1 mt-7">
          <div>
          <Text_20_600 text="Pools" style="text-[24px]" />
          <Text_14_600 text="Earn Yield On Trading Fees By Providing Liquidity" style="pt-3"/>
          </div>
          <div className="px-10 lg:px-16">
            <PoolsHeader baseComponent="Pools"/>
          </div>
          <div>
            <PoolsMainComponent />
            <PoolsMainComponent />
            <PoolsMainComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolsPage;
