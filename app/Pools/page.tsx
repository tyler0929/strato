import SideBarSwapPage from "@/components/Swap/SideBar";

const PoolsPage: React.FC = () => {
  return (
    <div className="section-swap-page max_width_app flex">
      <div>
        <SideBarSwapPage />
      </div>
      <div className="flex-1">
        Pools page
      </div>
    </div>
  );
};

export default PoolsPage;
