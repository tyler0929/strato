import SideBarSwapPage from "@/components/Swap/SideBar";

const TopTokenPage: React.FC = () => {
  return (
    <div className="section-swap-page max_width_app flex">
      <div>
        <SideBarSwapPage />
      </div>
      <div className="flex-1">
        Top token page
      </div>
    </div>
  );
};

export default TopTokenPage;
