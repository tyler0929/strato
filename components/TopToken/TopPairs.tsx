import Image from "next/image";
import { Text_16_400, Text_24_600 } from "../typography/Typography";
import USDC from "@/public/assets/images/usdc.png";
import POL from "@/public/assets/images/pol.png";
import Start from "@/public/assets/images/start.png";
import Pagination from "./Pagination";

const TopPairs = () => {
  return (
    <div className="mt-4">
      <Text_24_600 text="Top Pairs" style="py-3" />
      <div className="bg-black-light1 px-6 py-6 rounded-3xl">
        <table className="w-full text-white ">
          <thead>
            <tr>
              <th className="w-8 text-start hidden md:table-cell">#</th>
              <th className="text-start font-[600] text-[12px]">Pair</th>
              <th className="w-28 text-start font-[600] text-[12px] hidden md:table-cell">
                Volume 24H
              </th>
              <th className="w-28 text-start font-[600] text-[12px] hidden xl:table-cell">
                Volume 7D
              </th>
              <th className="w-28 text-start font-[600] text-[12px] hidden lg:table-cell">
                LP reward fees 24H
              </th>
              <th className="w-28 text-start font-[600] text-[12px] hidden xl:table-cell">
                LP reward APR
              </th>
              <th className="w-28 text-start font-[600] text-[12px]">
                Liquidity
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
              <td className="py-6 hidden md:table-cell">1</td>
              <td className="py-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0">
                    <Image src={USDC} alt="usdc" width={20} />
                    <Image src={POL} alt="usdc" width={30} />
                  </div>
                  <Text_16_400 text="USDC/WPOL" />
                </div>
              </td>
              <td className="py-6 hidden md:table-cell">
                <Text_16_400 text="$0.00" />
              </td>
              <td className="py-6 hidden xl:table-cell">
                <Text_16_400 text="$0.00" />
              </td>
              <td className="py-6 hidden lg:table-cell">
                <Text_16_400 text="$0.00" />
              </td>
              <td className="py-6 hidden xl:table-cell">
                <Text_16_400 text="$0.00" />
              </td>
              <td className="py-6">
                <Text_16_400 text="$0.000000002" />
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination end={1} start={1} />
      </div>
    </div>
  );
};

export default TopPairs;
