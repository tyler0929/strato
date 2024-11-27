'use client'
import AnalyticsAreaCharts from "../charts/AnalyticsAreaChart"
import AnalyticsBarCharts from "../charts/AnalyticsBarChart"
import { Text_16_600, Text_24_600 } from "../typography/Typography"

const AnalyticsComponent = () => {
    return<div>
         <Text_24_600 text="StratoSwap Info & Analytics" style="py-3" />
         <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black-light1 px-6 py-6 rounded-3xl">
                <Text_16_600 text="Liquidity" />
                <Text_24_600 text="$0.0000010"/>
                <div >
                <AnalyticsAreaCharts />
                </div>
            </div>
            <div className="bg-black-light1 px-6 py-6 rounded-3xl">
            <Text_16_600 text="Liquidity" />
                <Text_24_600 text="$0.0000010"/>
                <div >
                <AnalyticsBarCharts />
                </div>
            </div>
         </div>
    </div>
}

export default AnalyticsComponent