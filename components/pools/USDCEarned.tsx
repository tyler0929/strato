import { Text_12_600 } from "../typography/Typography"

const USDCEarned = () => {
    return(
        <div className="border-2 border-[#1f2c4a] px-4 py-4 rounded-2xl" >
            <Text_12_600 text="USDC Earned" style="uppercase"/>
            <div className="flex justify-between items-center pt-2">
                <Text_12_600 text="0" style="!text-[20px]"/>
                <button className="text-[#666171] text=[16px] font-[600] bg-[#3c3742] cursor-not-allowed px-3 py-3 rounded-lg">Harvest</button>
            </div>
        </div>
    )
}

export default USDCEarned