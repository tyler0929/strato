"use client";
import Link from "next/link";
import { Text_14_600 } from "../typography/Typography";
import { usePathname } from "next/navigation";
import { FarmIcon, LiquidityIcon, PoolsIcon, SwapIcon } from "../icons";
import { ReactNode } from "react";

export type IPropsSideBar = {
  Icon: ReactNode;
  text: string;
};

const SideBarSwapPage:React.FC<{onClick?:()=>void}> = ({onClick}) => {
  const pathname = usePathname();
  const sidebarData: IPropsSideBar[] = [
    {
      Icon: <SwapIcon />,
      text: "Swap",
    },
    {
      Icon: <LiquidityIcon />,
      text: "Liquidity",
    },
    {
      Icon: <PoolsIcon width="25px" />,
      text: "Pools",
    },
    {
      Icon: <FarmIcon width="25px" />,
      text: "Farm",
    },
    {
      Icon: <FarmIcon width="25px" />,
      text: "Top Token",
    },
  ];
  
  return (
    <div className=" w-36 pt-6">
      {sidebarData?.map((item) => (
        <Link
        onClick={onClick}
          key={item?.text}
          href={`/${item?.text?.replace(" ", "") }`}
          className={`h-10 flex justify-start text-white gap-3 items-center transition-all duration-200 ease-linear px-4 rounded-lg hover:bg-black-light1 ${
            pathname === "/" + item?.text ? "bg-primary-main" : ""
          } `}
        >
          {item?.Icon}
          <Text_14_600
            text={item?.text}
            style={`${pathname === "/" + item?.text?.replace(" ","") ? "" : "!font-[400] !"}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default SideBarSwapPage;
