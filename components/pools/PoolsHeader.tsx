import CustomSwitcher from "../checkbox/CustomSwitcher";
import FarmTypes from "../farms/FarmTypes";
import FilterButton from "./filterButton";
import SearchInput from "./search";
import CustomSelectBox from "./selecteBox";

interface IPropsPoolsHeader {
  baseComponent:"Pools"| "Farms"
}

const PoolsHeader:React.FC<IPropsPoolsHeader> = ({baseComponent}) => {
  return (
    <div className="grid gap-3 lg:flex justify-between items-center pt-7 pb-3">
      <div className=" flex gap-2 items-center">
        <FilterButton />
        {baseComponent ==="Farms" && <FarmTypes />}
        <CustomSwitcher
          positionLabel="End"
          label="Staked only"
          containerStyle="!w-14 !h-6"
          circleStyle="!h-4 !w-4"
          labelStyle="!text-[#FFF]"
        />
      </div>
      <div className="flex gap-5 items-center">
        <CustomSelectBox />
        <SearchInput />
      </div>
    </div>
  );
};
export default PoolsHeader;
