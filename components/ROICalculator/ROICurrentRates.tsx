import { Text_12_600 } from "../typography/Typography"


const ROICurrentRates = () => {
    return (
        <div style={{
            background:"linear-gradient(rgb(83, 222, 233), rgb(118, 69, 217))"
        }}
        className="p-[2px] rounded-3xl"
        >
            <div className=" bg-black-main rounded-3xl px-7 py-7">
                <Text_12_600 text="ROI at current rates" style="uppercase"/>
                <div className="flex gap-1 items-center py-2">
                    <Text_12_600 style="!text-[24px]" text="0.00"/>
                    <Text_12_600 style="!text=[16px] !font-[400] !text-[#cfd1d6]" text="(0.00%)"/>
                </div>
            </div>

        </div>
    )
}
export default ROICurrentRates