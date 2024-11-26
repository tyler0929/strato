'use client'
import AnalyticsAreaCharts from "../charts/AnalyticsAreaChart"
import { Text_16_600, Text_24_600 } from "../typography/Typography"

const AnalyticsComponent = () => {
    return<div>
         <Text_24_600 text="StratoSwap Info & Analytics" style="py-3" />
         <div className="grid grid-cols-2 gap-3">
            <div className="bg-black-light1 px-6 py-6 rounded-2xl">
                <Text_16_600 text="Liquidity" />
                <Text_24_600 text="$0.0000010"/>
                <div className="h-60">
                <AnalyticsAreaCharts />
                </div>
            </div>
            <div></div>
         </div>
    </div>
}

export default AnalyticsComponent