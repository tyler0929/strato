import { useState } from "react";
import CustomSwitcher from "../checkbox/CustomSwitcher";
import { Text_12_600 } from "../typography/Typography";
import CalculateImpermanent from "./CalculateImpermanent";
import ProjectedResults from "./ProjectedResults";



const CalculateImpermanentLoss = () => {
    const [showDetails ,setShowDetails] = useState(false)
  return (
    <div className="bg-black-main px-4 py-4 rounded-2xl">
      <Text_12_600 text="Calculate impermanent loss" style="uppercase" />
      <div className=" pt-4">
        <CustomSwitcher onChange={() => setShowDetails(!showDetails)}/>
      </div>
      {showDetails && <div className="grid lg:grid-cols-2 gap-4">
        <CalculateImpermanent title="Entry price"/>
        <CalculateImpermanent  title="Exit price"/>
      </div>}
      {showDetails && <div className="grid ">
        <ProjectedResults />
      </div>}
    </div>
  );
};

export default CalculateImpermanentLoss;
