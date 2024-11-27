"use client";
import Link from "next/link";
import { Text_16_400, Text_24_600 } from "../typography/Typography";
import RadioButtonGroup from "./transactionRadioButtons";
import { LinkIcon } from "../icons";
import Pagination from "./Pagination";

const Transactions = () => {
  return (
    <div>
      <Text_24_600 text="StratoSwap Info & Analytics" style="py-3" />

      <RadioButtonGroup />
      <div className="bg-black-light1 px-6 py-6 rounded-3xl">
        <table className="w-full text-white">
          <thead>
            <tr>
              <th className="text-start font-[600] text-[12px]">Action</th>
              <th className="w-32 text-start font-[600] text-[12px] hidden md:table-cell">
                Total Value
              </th>
              <th className="w-32 text-start font-[600] text-[12px] hidden lg:table-cell">
                Token Amount
              </th>
              <th className="w-32 text-start font-[600] text-[12px] hidden xl:table-cell">
                Token Amount
              </th>
              <th className="w-36 text-start font-[600] text-[12px] hidden lg:table-cell">
                Account
              </th>
              <th className="w-24 text-start font-[600] text-[12px]">Time </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" ">
              <td className="flex item-center gap-2 py-5 text-primary-main">
                <Link href={"#"}>
                  <Text_16_400
                    text="Swap STRAT for USDC"
                    style="hover:underline cursor-pointer"
                  />
                </Link>
                <LinkIcon width='20px' className="text-primary-main"/>
              </td>
              <td className="py-5 hidden md:table-cell">
                {" "}
                <Text_16_400 text="$0.00" />
              </td>
              <td className="py-5 hidden lg:table-cell">
                {" "}
                <Text_16_400 text="0.023 USDC" />
              </td>
              <td className="py-5 hidden lg:table-cell">
                {" "}
                <Text_16_400 text="0.50 STRAT" />
              </td>
              <td className="py-5 hidden xl:table-cell  ">
                {" "}
                <div className=" flex items-center">
                <Link href={" "} >
                <Text_16_400
                  text={
                    "0x3a6820efae83e90e2a33cbab58425b6ff18b1acb"?.slice(0, 4) +
                    "..." +
                    "0x3a6820efae83e90e2a33cbab58425b6ff18b1acb"?.slice(-4)
                  }
                  style="!text-primary-main hover:underline"
                />
                </Link>
                <LinkIcon width='20px' className="text-primary-main"/>
                </div>
              </td>
              <td className="py-5">
                {" "}
                <Text_16_400 text="24 days" />
              </td>
            </tr>
            <tr className=" ">
              <td className="flex item-center gap-2 py-5 text-primary-main">
                <Link href={"#"}>
                  <Text_16_400
                    text="Swap STRAT for USDC"
                    style="hover:underline cursor-pointer"
                  />
                </Link>
                <LinkIcon width='20px' className="text-primary-main"/>
              </td>
              <td className="py-5 hidden md:table-cell">
                {" "}
                <Text_16_400 text="$0.00" />
              </td>
              <td className="py-5 hidden lg:table-cell">
                {" "}
                <Text_16_400 text="0.023 USDC" />
              </td>
              <td className="py-5 hidden lg:table-cell">
                {" "}
                <Text_16_400 text="0.50 STRAT" />
              </td>
              <td className="py-5 hidden xl:table-cell  ">
                {" "}
                <div className=" flex items-center">
                <Link href={" "} >
                <Text_16_400
                  text={
                    "0x3a6820efae83e90e2a33cbab58425b6ff18b1acb"?.slice(0, 4) +
                    "..." +
                    "0x3a6820efae83e90e2a33cbab58425b6ff18b1acb"?.slice(-4)
                  }
                  style="!text-primary-main hover:underline"
                />
                </Link>
                <LinkIcon width='20px' className="text-primary-main"/>
                </div>
              </td>
              <td className="py-5">
                {" "}
                <Text_16_400 text="24 days" />
              </td>
            </tr>
            <tr className=" ">
              <td className="flex item-center gap-2 py-5 text-primary-main">
                <Link href={"#"}>
                  <Text_16_400
                    text="Swap STRAT for USDC"
                    style="hover:underline cursor-pointer"
                  />
                </Link>
                <LinkIcon width='20px' className="text-primary-main"/>
              </td>
              <td className="py-5 hidden md:table-cell">
                {" "}
                <Text_16_400 text="$0.00" />
              </td>
              <td className="py-5 hidden lg:table-cell">
                {" "}
                <Text_16_400 text="0.023 USDC" />
              </td>
              <td className="py-5 hidden lg:table-cell">
                {" "}
                <Text_16_400 text="0.50 STRAT" />
              </td>
              <td className="py-5 hidden xl:table-cell  ">
                {" "}
                <div className=" flex items-center">
                <Link href={" "} >
                <Text_16_400
                  text={
                    "0x3a6820efae83e90e2a33cbab58425b6ff18b1acb"?.slice(0, 4) +
                    "..." +
                    "0x3a6820efae83e90e2a33cbab58425b6ff18b1acb"?.slice(-4)
                  }
                  style="!text-primary-main hover:underline"
                />
                </Link>
                <LinkIcon width='20px' className="text-primary-main"/>
                </div>
              </td>
              <td className="py-5">
                {" "}
                <Text_16_400 text="24 days" />
              </td>
            </tr>
            <tr className=" ">
              <td className="flex item-center gap-2 py-5 text-primary-main">
                <Link href={"#"}>
                  <Text_16_400
                    text="Swap STRAT for USDC"
                    style="hover:underline cursor-pointer"
                  />
                </Link>
                <LinkIcon width='20px' className="text-primary-main"/>
              </td>
              <td className="py-5 hidden md:table-cell">
                {" "}
                <Text_16_400 text="$0.00" />
              </td>
              <td className="py-5 hidden lg:table-cell">
                {" "}
                <Text_16_400 text="0.023 USDC" />
              </td>
              <td className="py-5 hidden lg:table-cell">
                {" "}
                <Text_16_400 text="0.50 STRAT" />
              </td>
              <td className="py-5 hidden xl:table-cell  ">
                {" "}
                <div className=" flex items-center">
                <Link href={" "} >
                <Text_16_400
                  text={
                    "0x3a6820efae83e90e2a33cbab58425b6ff18b1acb"?.slice(0, 4) +
                    "..." +
                    "0x3a6820efae83e90e2a33cbab58425b6ff18b1acb"?.slice(-4)
                  }
                  style="!text-primary-main hover:underline"
                />
                </Link>
                <LinkIcon width='20px' className="text-primary-main"/>
                </div>
              </td>
              <td className="py-5">
                {" "}
                <Text_16_400 text="24 days" />
              </td>
            </tr>
 
          </tbody>
        </table>
        <Pagination  end={2} start={1}/>
      </div>
    </div>
  );
};

export default Transactions;
