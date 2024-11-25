import { CircleCalculateModal } from "../icons";
import CompoundingEvent from "../ROICalculator/CompoundingEvery";
import StakedFor from "../ROICalculator/Stakedfor";
import ARPModal from "./ARPModal";
import ROICurrentRatesFarms from "./ROICurrentRatesFarms";
import StartUsdcLPStaked from "./StartUSDCLPStaked";

const ARPSetting = () => {
  return (
    <div>
      <ARPModal>
      <StartUsdcLPStaked />
        <StakedFor />
        <CompoundingEvent />
        <div className="flex justify-center py-6 ">
          <CircleCalculateModal width={"35px"} />
        </div>
        <ROICurrentRatesFarms />
      </ARPModal>
    </div>
  );
};

export default ARPSetting;
