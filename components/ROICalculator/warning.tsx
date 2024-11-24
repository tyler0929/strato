import { WarningIcon } from "../icons"
import { Text_14_400 } from "../typography/Typography"

interface IPropsWarning {
    text:string
}

const Warning:React.FC<IPropsWarning> = ({text}) => {
    return (
        <div className="border border-[#d67e0a] gap-5 rounded-2xl flex text-[#d67e0a] px-5 py-5 bg-[#ffb23719] items-start" >
            <WarningIcon width="40px"/>
            <Text_14_400 text={text} style="text-[#d67e0a]" />
        </div>
    )
}

export  default Warning