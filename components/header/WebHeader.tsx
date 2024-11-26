"use client";
import Link from "next/link";
import { Text_14_600 } from "../typography/Typography";
import { usePathname } from "next/navigation";
import React from "react";
import { LanguageIcon } from "../icons";
import SettingComponentHeader from "../setting/SettingHeader";
import SelectNetwork from "./SelectNetwork";
import ConnectWallet from "../connectWallet/connectWallet";
import SidebarDrawer from "../SidebarDrawer/SidebarDrawer";

const WebHeader: React.FC = () => {
  const pathname = usePathname();
  return (
    <div>

    <header className="header-content top-0 w-full fixed z-[100] bg-black-main ">
      <div className="header-content-mobile"></div>
      <div className="header-content-web max_width_app flex justify-between h-24 items-center px-5 md:px-10 ">
        <div >
          <nav className="text-white flex items-center">
            <Link href={"/Swap"} className="pr-5">
              <p>StratoSwap</p>
            </Link>
            <Link
              href={"/Swap"}
              className={`hidden lg:flex h-12  justify-center items-center px-4 rounded-lg hover:${
                pathname === "/Swap" ? "bg-primary-dark" : "bg-black-light1"
              } ${pathname === "/Swap" ? "bg-primary-main" : ""} `}
            >
              <Text_14_600
                text="Trade"
                style={`${
                  pathname === "/Swap" ? "" : "!font-[400] !"
                }`}
              />
            </Link>
            <Link
              href={"/doc"}
              className={`hidden lg:flex h-12  justify-center items-center px-4 rounded-lg hover:${
                pathname === "/doc" ? "bg-primary-dark" : "bg-black-light1"
              } ${pathname === "/doc" ? "bg-primary-main" : ""} `}
            >
              <Text_14_600
                text="Doc"
                style={`${
                  pathname === "/doc" ? "" : "!font-[400] !"
                }`}
              />
            </Link>
            <Link
              href={"/blog"}
              className={`hidden lg:flex h-12  justify-center items-center px-4 rounded-lg hover:${
                pathname === "/blog" ? "bg-primary-dark" : "bg-black-light1"
              } ${pathname === "/blog" ? "bg-primary-main" : ""} `}
            >
              <Text_14_600
                text="Blog"
                style={`${
                  pathname === "/blog" ? "" : "!font-[400] !"
                }`}
              />
            </Link>
            <Link
              href={"/FAQ"}
              className={`hidden lg:flex h-12  justify-center items-center px-4 rounded-lg hover:${
                pathname === "/FAQ" ? "bg-primary-dark" : "bg-black-light1"
              } ${pathname === "/FAQ" ? "bg-primary-main" : ""} `}
            >
              <Text_14_600
                text="FAQ"
                style={`${
                  pathname === "/FAQ" ? "" : "!font-[400] !"
                }`}
              />
            </Link>
          </nav>
        </div>
        <div className="flex gap-4 items-center h-full">
          <div className="hidden lg:flex text-white hover:opacity-70 transition-all duration-200 ease-linear">
            <LanguageIcon />
          </div>
         
          <div className="hidden lg:flex text-white z-50 ">
            <SettingComponentHeader  />
          </div>
          <div className="hidden lg:flex h-full" >
            <SelectNetwork />
          </div>
          <ConnectWallet baseComponent="Header" />
          <div className="flex lg:hidden ">
            <SidebarDrawer />
          </div>
        </div>
      </div>
    </header>

    </div>
  );
};

export default WebHeader;
