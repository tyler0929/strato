
import { Text_16_400, Text_24_600 } from "../typography/Typography"


interface IPropsYourWatchlist {
    text:string
}

const YourWatchlist:React.FC<IPropsYourWatchlist> = ({text}) => {
    return(
        <div className="mt-4">
            <Text_24_600 text="Your Watchlist" style="py-3"/>
            <div className="bg-black-light1 px-6 py-5 rounded-3xl">
               <Text_16_400 text={text}/>
            </div>
        </div>
    )
}

export default YourWatchlist