import { CircleCalculateModal } from "../icons";
import CalculateImpermanentLoss from "./CalculateImpermanentloss";
import CalculatorModal from "./CalculatorModal";
import CompoundingEvent from "./CompoundingEvery";
import DepositAmount from "./DepositAmount";
import HistoryPrice from "./HistoryPrice";
import ROICurrentRates from "./ROICurrentRates";
import SetPriceRangeROI from "./SetPriceRange";
import StakedFor from "./Stakedfor";
import Warning from "./warning";

const ROICalculatorMain = () => {
  return (
    <div>
      <CalculatorModal>
        <Warning text="We are in the early stage of V3 deployment. Due to a lack of historical data, numbers and estimates may be inaccurate." />
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <DepositAmount />
            <HistoryPrice />
          </div>
          <div>
            <StakedFor />
            <CompoundingEvent />
            <SetPriceRangeROI />
          </div>
        </div>

        <CalculateImpermanentLoss />
        <div className="flex justify-center py-6 ">
          <CircleCalculateModal width={"35px"} />
        </div>
        <ROICurrentRates />
        <div className="grid pt-2 pb-5">
          <button className="text-[16px] font-[600] bg-primary-main rounded-xl h-12 hover:opacity-65 transition-all duration-200 ease-linear ">
            Apply Settings
          </button>
        </div>
      </CalculatorModal>
    </div>
  );
};
export default ROICalculatorMain;
