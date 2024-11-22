import Link from "next/link"
import { DiscordIcon, InstagramIcon, TelegramIcon, TwitterIcon } from "../icons"
import { Text_14_600, Text_16_600 } from "../typography/Typography"


const FooterComponent = () => {
    return(
        <footer className="footer-content pt-24 pb-16 grid lg:grid-cols-2">
               <div className=" flex-col gap-3 flex items-start pb-16  lg:hidden">
                <Text_16_600 text="TOOLS"/>
                <Link href={"/Swap"} >
                <Text_16_600 text="Swap"  style="hover:underline !font-[500]"/>
                </Link>
                <Link href={"/Liquidity"}>
                <Text_16_600 text="Liquidity" style="hover:underline !font-[500]"/>
                </Link>
                <Link href={"/Pools"}>
                <Text_16_600 text="Pools" style="hover:underline !font-[500]"/>
                </Link>
                <Link href={"/Farm"}>
                <Text_16_600 text="Farm" style="hover:underline !font-[500]"/>
                </Link>
                <Link href={"/TopToken"}>
                <Text_16_600 text="Staking" style="hover:underline !font-[500]"/>
                </Link>
            </div>
            <div className="flex gap-6 flex-col items-center">
                <Text_14_600 text="StratoSwap"/>
                <Text_14_600 text="© 2024 StratoSwap. All rights reserved."/>
                <Text_14_600 text="Privacy Policy | Cookies Policy"/>
                <div className="flex gap-5 ">
                    <TelegramIcon  width={"20px"}/> <TwitterIcon width={"20px"}/> <DiscordIcon width={"20px"} /> <InstagramIcon width={"20px"}/>
                </div>
            </div>
            <div className=" flex-col gap-3 items-center hidden lg:flex">
                <Text_16_600 text="TOOLS"/>
                <Link href={"/Swap"} >
                <Text_16_600 text="Swap" style="hover:underline !font-[500]"/>
                </Link>
                <Link href={"/Liquidity"}>
                <Text_16_600 text="Liquidity" style="hover:underline !font-[500]"/>
                </Link>
                <Link href={"/Pools"}>
                <Text_16_600 text="Pools" style="hover:underline !font-[500]"/>
                </Link>
                <Link href={"/Farm"}>
                <Text_16_600 text="Farm" style="hover:underline !font-[500]"/>
                </Link>
                <Link href={"/TopToken"}>
                <Text_16_600 text="Staking" style="hover:underline !font-[500]"/>
                </Link>
            </div>
        </footer>
    )
}

export default FooterComponent