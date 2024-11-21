import { useState } from "react"
import SettingButton from "./button"

const TransactionSpeed = () => {
    const [selectedButton , setSelectedButton] = useState("Default")
    const handleClickButton = (event:React.MouseEvent) =>{
        setSelectedButton(event?.currentTarget?.id)
    }
    return<div className="flex gap-3 my-5">
        <SettingButton text="Default" onClick={handleClickButton}  selected={selectedButton}/>
        <SettingButton text="Standard (3)" onClick={handleClickButton}  selected={selectedButton}/>
        <SettingButton text="Fast (4)" onClick={handleClickButton}  selected={selectedButton}/>
        <SettingButton text="Instant (5)" onClick={handleClickButton}  selected={selectedButton}/>
    </div>
}

export default TransactionSpeed