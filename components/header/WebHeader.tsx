"use client"
import Link from "next/link"
import { Text_14_600 } from "../typography/Typography"
import { usePathname, useRouter } from "next/navigation";
import React from 'react'
import { LanguageIcon, SettingIcon } from "../icons";

const WebHeader:React.FC = () => {
    const pathname = usePathname(); 
    console.log("router" ,pathname)
    return(
        <header className="header-content top-0 w-full fixed">
            <div className="header-content-mobile"></div>
            <div className="header-content-web max_width_app flex justify-between py-5 px-10 ">
                <div>
                    <nav className="text-white flex items-center">
                        <Link href={"/Swap"} className="pr-5">
                        <p>StratoSwap</p>
                        </Link>
                        <Link href={"/Swap"} className={`h-12 flex justify-center items-center px-4 rounded-lg hover:${pathname === "/Swap" ? "bg-primary-dark" : "bg-black-light1"} ${pathname === "/Swap" ?"bg-primary-main" :""} `}>
                        <Text_14_600 text="Trade" style={`${pathname === "/Swap" ? "" :"!font-[400] !font-PLight"}`}/>
                        </Link>
                        <Link href={"/doc"} className={`h-12 flex justify-center items-center px-4 rounded-lg hover:${pathname === "/doc" ? "bg-primary-dark" : "bg-black-light1"} ${pathname === "/doc" ?"bg-primary-main" :""} `}>
                        <Text_14_600 text="Doc" style={`${pathname === "/doc" ? "" :"!font-[400] !font-PLight"}`}/>
                        </Link>
                        <Link href={"/blog"} className={`h-12 flex justify-center items-center px-4 rounded-lg hover:${pathname === "/blog" ? "bg-primary-dark" : "bg-black-light1"} ${pathname === "/blog" ?"bg-primary-main" :""} `}>
                        <Text_14_600 text="Blog" style={`${pathname === "/blog" ? "" :"!font-[400] !font-PLight"}`}/>
                        </Link>
                        <Link href={"/FAQ"} className={`h-12 flex justify-center items-center px-4 rounded-lg hover:${pathname === "/FAQ" ? "bg-primary-dark" : "bg-black-light1"} ${pathname === "/FAQ" ?"bg-primary-main" :""} `}>
                        <Text_14_600 text="FAQ" style={`${pathname === "/FAQ" ? "" :"!font-[400] !font-PLight"}`}/>
                        </Link>
                    </nav>
                </div>
                <div className="flex gap-4 items-center">
                    <LanguageIcon />
                    <SettingIcon />
                    <button className="rounded-full text-[16px] font-[600] text-white border border-primary-main px-7 py-3">Connect Wallet</button>
                </div>
            </div>
        </header>
    )
}

export default WebHeader