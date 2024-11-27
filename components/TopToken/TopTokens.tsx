
import { Text_16_400, Text_24_600 } from "../typography/Typography"

import Pagination from "./Pagination"


const TopTokensComponent = () => {
    return(
        <div className="mt-4">
            <Text_24_600 text="Top Tookens" style="py-3"/>
            <div className="bg-black-light1 px-6 py-6 rounded-3xl">
                <table className="w-full text-white">
                    <thead>
                        <tr>
                            <th className="w-8 text-start hidden md:table-cell ">#</th>
                            <th className="text-start font-[600] text-[12px]">Name</th>
                            <th className="w-28 text-start font-[600] text-[12px] hidden md:table-cell ">Price</th>
                            <th className="w-28 text-start font-[600] text-[12px] hidden lg:table-cell">Price Change</th>
                            <th className="w-28 text-start font-[600] text-[12px] hidden lg:table-cell">Volume 24H </th>
                            <th className="w-28 text-start font-[600] text-[12px]">Liquidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:opacity-65  cursor-pointer transition-all duration-200 ease-linear">
                            <td className="py-6 hidden md:table-cell ">1</td>
                            <td className="flex item-center gap-2 py-6">
                                
                                <Text_16_400 text="USDC/WPOL"/>
                            </td >
                            <td className="py-6 hidden md:table-cell"> <Text_16_400 text="$0.00"/></td>
                            <td className="py-6 hidden lg:table-cell"> <Text_16_400 text="$0.00"/></td>
                            <td className="py-6 hidden lg:table-cell"> <Text_16_400 text="$0.00"/></td>
                            <td className="py-6"> <Text_16_400 text="$0.00"/></td>

                        </tr>
                        <tr className="hover:opacity-65  cursor-pointer transition-all duration-200 ease-linear">
                            <td className="py-6 hidden md:table-cell ">1</td>
                            <td className="flex item-center gap-2 py-6">
                                
                                <Text_16_400 text="USDC/WPOL"/>
                            </td >
                            <td className="py-6 hidden md:table-cell"> <Text_16_400 text="$0.00"/></td>
                            <td className="py-6 hidden lg:table-cell"> <Text_16_400 text="$0.00"/></td>
                            <td className="py-6 hidden lg:table-cell"> <Text_16_400 text="$0.00"/></td>
                            <td className="py-6"> <Text_16_400 text="$0.00"/></td>

                        </tr>
                    </tbody>
                </table>
                <Pagination  end={1} start={1}/>
            </div>
        </div>
    )
}

export default TopTokensComponent