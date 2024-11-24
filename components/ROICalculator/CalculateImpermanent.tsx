"use client"
import { useSwapContext } from "../context/SwapContext";
import { Text_12_600 } from "../typography/Typography";

interface IPropsCalculateImpermanent {
    title:string
 }
const CalculateImpermanent:React.FC<IPropsCalculateImpermanent> = ({title}) => {
    const {inputCurrency , outputCurrency} = useSwapContext()
  return (
    <div>
      <div className="flex justify-between items-center py-3">
        <Text_12_600 text={title} />
        <div className="flex justify-center items-center gap-2">
          <button className="hover:opacity-65 bg-black-light2 text-white text-[12px] font-[600] uppercase px-3 py-[2px] rounded-lg ">
            Edit
          </button>
          <button className="hover:opacity-65 bg-black-light2 text-white text-[12px] font-[600] uppercase px-3 py-[2px] rounded-lg ">
            Reset
          </button>
        </div>
      </div>
      <div className="bg-black-light1 py-3 px-4 rounded-2xl">
        <table className="w-full">
          <thead className="p-3">
            <tr>
              <th className="text-[12px] uppercase text-left">Asset </th>
              <th className="text-[12px] uppercase text-left">Price</th>
              <th className="text-[12px] uppercase text-left">Balance</th>
              <th className="text-[12px] uppercase text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="my-4">
                <td className="flex items-center gap-1 py-3">
                    {inputCurrency?.iconAddress}
                    {inputCurrency?.symbol}
                </td>
                <td className="text-[#f4eeff] font-[400] text-[14px] text-left  py-3">343323</td>
                <td className="text-[#f4eeff] font-[400] text-[14px] text-left py-3">9.96</td>
                <td className="text-[#f4eeff] font-[400] text-[14px] text-left py-3">$50.04</td>
            </tr>
            <tr className="my-4">
                <td className="flex items-center gap-1 py-3">
                    {outputCurrency?.iconAddress}
                    {outputCurrency?.symbol}
                </td>
                <td className="text-[#f4eeff] font-[400] text-[14px] text-left py-3">343323</td>
                <td className="text-[#f4eeff] font-[400] text-[14px] text-left py-3">9.96</td>
                <td className="text-[#f4eeff] font-[400] text-[14px] text-left py-3">$50.04</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalculateImpermanent