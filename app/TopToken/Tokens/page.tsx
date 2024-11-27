import SideBarSwapPage from "@/components/Swap/SideBar";

import TopTokenHeader from "@/components/TopToken/TopTokenHeader";
import TopTokensComponent from "@/components/TopToken/TopTokens";
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
         <YourWatchlist text="Saved tokens will appear here"/>
         <TopTokensComponent />
         
        </div>
      </div>
    </div>
  );
};

export default TopTokenPage;
