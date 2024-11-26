"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchTokens from "./SearchToken";

const TopTokenHeader = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between ">
      <div className="flex bg-black-light1 rounded-lg">
        <Link href={"/TopToken"}>
          <button
            id="Overview"
            className={` ${pathname === "/TopToken" ? "bg-primary-main" : ""} rounded-lg font-[600] text-[16px] text-white hover:opacity-65 transition-all duration-200 ease-linear px-4 py-1`}
          >
            Overview
          </button>
        </Link>
        <Link href={"/TopToke/Pairs"}>
          <button
            id="Pairs"
            className={` ${pathname === "/TopToke/Pairs" ? "bg-primary-main" : ""} rounded-lg font-[600] text-[16px] text-white hover:opacity-65 transition-all duration-200 ease-linear px-4 py-1`}
          >
            Pairs
          </button>
        </Link>
        <Link href={"/TopToken/Tokens"}>
          <button
            id="Tokens"
            className={` ${pathname === "/TopToken/Tokens" ? "bg-primary-main" : ""} rounded-lg font-[600] text-[16px] text-white hover:opacity-65 transition-all duration-200 ease-linear px-4 py-1`}
          >
            Tokens
          </button>
        </Link>
      </div>
      <div>
        <SearchTokens />
      </div>
    </div>
  );
};
export default TopTokenHeader;
