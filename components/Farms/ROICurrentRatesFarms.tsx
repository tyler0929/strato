import { useState } from "react";
import { EditIcon, TickIcon } from "../icons";
import { Text_12_600 } from "../typography/Typography";

const ROICurrentRatesFarms = () => {
  const [ratesState, setRatesState] = useState("0.0");
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div
      style={{
        background: "linear-gradient(rgb(83, 222, 233), rgb(118, 69, 217))",
      }}
      className="p-[2px] rounded-3xl"
    >
      <div className=" bg-black-main rounded-3xl px-7 py-7">
        <Text_12_600 text="ROI at current rates" style="uppercase" />
        <div className="flex gap-1 items-center justify-between py-2">
          {!isEdit && (
            <Text_12_600 style="!text-[24px]" text={"$" + ratesState} />
          )}
          {isEdit && (
            <div className="relative">
                <p className="absolute left-2 text-white opacity-55 top-1">$</p>
                <input value={ratesState} onChange={(event:React.ChangeEvent<HTMLInputElement>)=>setRatesState(event?.currentTarget?.value)} className="outline-none w-48 bg-black-light2 rounded-lg h-9 text-[16px] text-white no-spinner pl-6  !font-ipa_font" />
            </div>
          )}
          <button
            onClick={() => setIsEdit(!isEdit)}
            className="hover:opacity-65 text-primary-main transition-all duration-200 ease-linear"
          >
            {!isEdit && <EditIcon width="15px" />}
            {isEdit && <TickIcon width="15px" />}
          </button>
          {/* <Text_12_600 style="!text=[16px] !font-[400] !text-[#cfd1d6]" text="(0.00%)"/> */}
        </div>
          <Text_12_600 style="!text=[16px] !font-[400] !text-[#cfd1d6]" text="(0.00%)"/>
      </div>
    </div>
  );
};
export default ROICurrentRatesFarms;
