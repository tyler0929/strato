import SideBarSwapPage from "@/components/Swap/SideBar";
import AnalyticsComponent from "@/components/TopToken/Analytics";
import TopPairs from "@/components/TopToken/TopPairs";
import TopTokenHeader from "@/components/TopToken/TopTokenHeader";
import Transactions from "@/components/TopToken/Transactions";
import YourWatchlist from "@/components/TopToken/YourWatchlist";


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
        <YourWatchlist text="Saved pairs will appear here" />
         <TopPairs />
        </div>
      </div>
    </div>
  );
};

export default TopTokenPage;
