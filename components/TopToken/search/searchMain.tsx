import { useState } from "react"


const TopTokenSearch = () => {
    const [showBackground , setShowBackground] = useState(false)
    const handleShowLayout = () => {
        setShowBackground(true)
    }
    return(
        <div className="">
        <div onClick={() => setShowBackground(false)} className={`${showBackground ? "grid": "hidden"} absolute left-0 top-0 z-10 w-[100vw] h-[100vh] bg-[#000000] opacity-70`}>
        </div>
        <div className="relative z-20">
            <input type="text" onFocus={handleShowLayout}/>
            <div className="absolute">
                data
            </div>
        </div>
        </div>
    )
}

export default TopTokenSearch