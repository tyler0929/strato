import SideBarSwapPage from "@/components/Swap/SideBar";
import AnalyticsComponent from "@/components/TopToken/Analytics";
import TopTokenHeader from "@/components/TopToken/TopTokenHeader";
import { Text_12_400, Text_24_600 } from "@/components/typography/Typography";

const TopTokenPage: React.FC = () => {
  return (
    <div className="section-swap-page max_width_app flex">
      <div>
        <SideBarSwapPage />
      </div>
      <div className="flex-1">
      <div className="max-w-[1100px] mx-auto px-5 py-7  mt-7">
        <div className="section-header">
          <TopTokenHeader />
        </div>
         <AnalyticsComponent />
        </div>
      </div>
    </div>
  );
};

export default TopTokenPage;
