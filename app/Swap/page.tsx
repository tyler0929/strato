
import SideBarSwapPage from "@/components/Swap/SideBar";
import SwapLinks from "@/components/Swap/SwapLinks";
import { Text_14_400, Text_20_600 } from "@/components/typography/Typography";

const SwapPage: React.FC = () => {
  return (
    <div className="section-swap-page max_width_app flex">
      <div>
        <SideBarSwapPage />
      </div>
      <div className="flex-1 pt-5">
        <div className="max-w-96 bg-black-light1 mx-auto pt-6 px-3 rounded-2xl">
            <div className="grid px-4 gap-3">
            <Text_20_600 text="Swap" />
            <Text_14_400  text="Trade tokens in an instant" style="!text-gray-gray1"/>
                <SwapLinks />
            </div>
            <div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SwapPage;
