"use client";
import Link from "next/link";
import { Text_14_600 } from "../typography/Typography";
import { usePathname } from "next/navigation";
import { LiquidityIcon, SwapIcon } from "../icons";
import { ReactNode } from "react";
 
export type IPropsSideBar = {
    Icon:ReactNode,
    text:string
}

const SideBarSwapPage = () => {
  const pathname = usePathname();
  const sidebarData:IPropsSideBar[] = [
    {
        Icon:<SwapIcon />,
        text:"Swap"
    },
    {
        Icon:<LiquidityIcon />,
        text:"Liquidity"
    }
]
  return (
    <div className=" w-36 pt-6">
        {sidebarData?.map((item) => <Link
        key={item?.text}
        href={`/${item?.text}`}
        className={`h-10 flex justify-start text-white gap-3 items-center px-4 rounded-lg hover:bg-black-light1 ${pathname === "/"+item?.text ? "bg-primary-main" : ""} `}
      >
       {item?.Icon}
        <Text_14_600
          text={item?.text}
          style={`${pathname === "/"+item?.text ? "" : "!font-[400] !font-PLight"}`}
        />
      </Link>)}
    </div>
  );
};

export default SideBarSwapPage;
