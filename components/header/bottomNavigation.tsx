"use client";
import React, { useState } from "react";
import {
  TradeIcon,
  LiquidityIcon,
  PoolsIcon,
  FarmIcon,
  InfoIcon,
} from "@/components/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
const BottomNavigation: React.FC = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(0);

  const navItems = [
    { id: 0, name: "Trade", icon: <TradeIcon /> },
    { id: 1, name: "Liquidity", icon: <LiquidityIcon /> },
    { id: 2, name: "Pools", icon: <PoolsIcon width="20px" /> },
    { id: 3, name: "Farm", icon: <FarmIcon /> },
    { id: 4, name: "Top Token", icon: <InfoIcon /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black-light1 shadow-md">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item: any) => (
          <Link
            key={item.id}
            href={item.name === "Trade" ? "/Swap" : "/"+item?.name?.replace(" " , "")}
            className="flex flex-col flex-1 items-center"
          >
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex flex-col flex-1 items-center  hover:text-primary-main ${
                pathname === "/" + item.name?.replace(" " , "")
                  ? "text-primary-main"
                  : "text-gray-gray1"
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Icon components for demonstration
const HomeIcon: React.FC<{ active: boolean }> = ({ active }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-6 h-6 ${active ? "fill-blue-500" : "fill-none"}`}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 10l7-7m0 0l7 7m-7-7v18"
    />
  </svg>
);

const SearchIcon: React.FC<{ active: boolean }> = ({ active }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-6 h-6 ${active ? "fill-blue-500" : "fill-none"}`}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 16l4 4m0 0l4-4m-4 4V4"
    />
  </svg>
);

const ProfileIcon: React.FC<{ active: boolean }> = ({ active }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-6 h-6 ${active ? "fill-blue-500" : "fill-none"}`}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14v7m4-14l-4 4m0 0L8 7"
    />
  </svg>
);

export default BottomNavigation;
