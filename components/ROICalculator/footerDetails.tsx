import { Text_14_400, Text_14_600 } from "../typography/Typography";

const FooterDetails = () => {
  return (
    <div className="px-6 py-5">
      <div className="flex justify-between items-center mt-2">
        <Text_14_400 text="Yield" />
        <Text_14_600 text="$0.00" />
      </div>
      <div className="flex justify-between items-center pl-3 mt-2">
        <Text_14_400 text="LP Fee Yield" />
        <Text_14_400 text="$0.00" style="text-[#cfd1d6]" />
      </div>
      <div className="flex justify-between items-center mt-2">
        <Text_14_400 text="APR" />
        <Text_14_600 text="$0" />
      </div>
      <div className="flex justify-between items-center pl-3 mt-2">
        <Text_14_400 text="LP Fee APR" />
        <Text_14_400 text="$0" style="text-[#cfd1d6]" />
      </div>
      <div className="flex justify-between items-center mt-2">
        <Text_14_400 text="APY (1x monthly compound)" />
        <Text_14_600 text="$0" />
      </div>
      <ul className="mt-2">
        <li>
          <Text_14_400
            style="!text-[12px]"
            text="•  Yields and rewards are calculated at the current rates and subject to change based on various external variables."
          />
        </li>
        <li>
          <Text_14_400
            style="!text-[12px]"
            text="•  LP Fee Rewards: 0.01% ~ 1% per trade according to the specific fee tier of the trading pair, claimed and compounded manually."
          />
        </li>
        <li>
          <Text_14_400
            style="!text-[12px]"
            text="•  LP Fee APR figures are calculated using Subgraph and may subject to indexing delays. For more accurate LP Fee APR, please visit the Info Page."
          />
        </li>
        <li>
          <Text_14_400
            style="!text-[12px]"
            text="•  All figures are estimates provided for your convenience only, and by no means represent guaranteed returns."
          />
        </li>
      </ul>
    </div>
  );
};

export default FooterDetails;
