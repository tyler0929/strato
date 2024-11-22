import { useState } from "react"
import SettingButton from "./button"

const SlippageTolerance = () => {
    const [selectedButton , setSelectedButton] = useState("0.1%")
    const handleClickButton = (event:React.MouseEvent) =>{
        setSelectedButton(event?.currentTarget?.id)
    }
    return<div className="flex gap-3 my-5 items-center">
        <SettingButton text="0.1%" onClick={handleClickButton}  selected={selectedButton}/>
        <SettingButton text="0.5%" onClick={handleClickButton}  selected={selectedButton}/>
        <SettingButton text="1.0%" onClick={handleClickButton}  selected={selectedButton}/>
        <div className="flex items-center">

        <input
            placeholder="0"
            className="bg-black-light2 he-full rounded-lg   font-[600] text-[16px]  px-5 py-2 text-gray-gray1   outline-0  w-20 border-none"
          />
          <p className="   font-[600] text-[16px] text-white">%</p>
        </div>
        
    </div>
}

export default SlippageTolerance