import SideBarSwapPage from "@/components/Swap/SideBar";

const LiquidityPage: React.FC = () => {
  return (
    <div className="section-swap-page max_width_app flex">
      <div>
        <SideBarSwapPage />
      </div>
      <div className="flex-1">
        Liquidity page
      </div>
    </div>
  );
};

export default LiquidityPage;
