"use client";
import { useSwapContext } from "../context/SwapContext";
import { Text_16_600 } from "../typography/Typography";

const HoldTokens = () => {
  const { inputCurrency, outputCurrency } = useSwapContext();
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <Text_16_600 text="$100.085" />
          <Text_16_600 text="(0%)" style="!text-[#31d0aa]" />
        </div>
        <div className="text-[14px] font=[400] text-[#cfd1d6] border-2 border-[#cfd1d6] rounded-xl p-1">
          HOLD Tokens
        </div>
      </div>
      <div className="py-3 px-4 rounded-2xl bg-black-light1 mt-3">

      <table className="w-full">
        <thead className="p-3">
          <tr>
            <th className="text-[12px] uppercase text-left">Asset </th>
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
            <td className="text-[#f4eeff] font-[400] text-[14px] text-left  py-3">
              343323
            </td>

            <td className="text-[#f4eeff] font-[400] text-[14px] text-left py-3">
              $50.04
            </td>
          </tr>
          <tr className="my-4">
            <td className="flex items-center gap-1 py-3">
              {outputCurrency?.iconAddress}
              {outputCurrency?.symbol}
            </td>
            <td className="text-[#f4eeff] font-[400] text-[14px] text-left py-3">
              343323
            </td>
            <td className="text-[#f4eeff] font-[400] text-[14px] text-left py-3">
              $50.04
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default HoldTokens;
