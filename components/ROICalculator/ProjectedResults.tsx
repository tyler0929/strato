import { Text_12_600 } from "../typography/Typography";
import HoldTokens from "./HoldTokens";
import ProvideLiquidity from "./ProvideLiquidity";

const ProjectedResults = () => {
  return (
    <div>
      <Text_12_600 text="Projected results" style="uppercase py-4" />
      <div className=" grid lg:grid-cols-2 gap-4">
        <HoldTokens />
        <ProvideLiquidity />
      </div>
    </div>
  );
};
export default ProjectedResults;
