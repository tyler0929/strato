import Collapse from "@/components/collapse/Collapse";
import ConnectWallet from "@/components/connectWallet/connectWallet";
import { LinkIcon } from "@/components/icons";
import SelectToken from "@/components/selectToken/SelectToken";
import {
  Text_14_400,
  Text_16_400,
  Text_20_600,
} from "@/components/typography/Typography";
import Link from "next/link";

const BuyCryptoPage = () => {
  return (
    <div>
      <div className="bg-black-light1 max-w-96 mt-5 mx-auto px-5 py-7 rounded-2xl">
        <div className="grid gap-2">
          <Text_20_600 text="Buy Crypto" />
          <Text_14_400 text="Buy crypto in just a few clicks" />
          <Text_16_400 text="I want to spend" />
        </div>
        <div className="flex gap-5  mt-3  bg-black-main border border-[#262130] items-center px-4 py-4 rounded-xl">
          <input
            className="outline-none font-[500]  text-white text-[40px] bg-black-main h-12 max-w-44 border-r-2 border-[#262130]"
            placeholder="0.0"
          />
          <SelectToken baseComponent="inputCurrency" buyCrypto />
        </div>
        <div className="mt-7">
          <Text_16_400 text="I want to buy" />
        </div>
        <div className="flex gap-5  mt-3  bg-black-main border border-[#262130] items-center px-4 py-4 rounded-xl">
          <input
            className="outline-none font-[500]  text-white text-[40px] bg-black-main h-12 max-w-44 border-r-2 border-[#262130]"
            placeholder="0.0"
          />
          <SelectToken baseComponent="inputCurrency" buyCrypto />
        </div>
        <div className="my-7">
          <Text_14_400 text="Proceed to get live aggregated quotes from a variety of different fiat onramp providers." />
        </div>
        <div>
          <ConnectWallet />
        </div>
      </div>
      <div className="bg-black-light1 max-w-96 mt-5 mx-auto rounded-2xl">
        <div className=" px-5 py-7 bg-black-light2 rounded-t-2xl">
          <Text_20_600 text="FAQ" />
        </div>
        <div className=" px-7 py-7 grid gap-5">
          <Collapse title="Why can’t I see quotes from providers?">
            <div className="pt-2 pb-4 opacity-70">
              <Text_14_400 text="Some providers might not operate in your region or support the currency/token exchange requested" />
            </div>
          </Collapse>
          <Collapse title="What fiat currencies are supported?">
            <div className="pt-2 pb-4 opacity-70">
              <p className="text-[14px] font-[400] text-white">
                Different providers will support different currencies and
                payment methods in your region. Please refer to our{" "}
                <Link
                  href="https://ryuswap-help.gitbook.io/ryuswap-document"
                  className="text-primary-main hover:underline"
                >
                  documentation{" "}
                </Link>{" "}
                or{" "}
                <Link
                  href="https://help.mercuryo.io/en/articles/6122838-on-and-off-ramps"
                  className="text-primary-main hover:underline flex"
                >
                  partners documentation
                  <LinkIcon width={"18px"} />
                </Link>
                for more info.
              </p>
            </div>
          </Collapse>
          <Collapse title="Where can find more information on the Buy Crypto feature?">
            <div className="pt-2 pb-4 opacity-70 flex gap-1">
              <p className="text-[14px] font-[400] text-white">
                Please refer to our documentation
              </p>{" "}
              <Link
                href="https://ryuswap-help.gitbook.io/ryuswap-document"
                className="text-primary-main hover:underline"
              >
                {" "}
                hear.
              </Link>
            </div>
          </Collapse>
          <Collapse title="Why do i receive different USDC tokens on Arbitrum?">
            <div className="pt-2 pb-4 opacity-70 ">
              <Text_14_400 text="In the case of Arbitrum, there's a bridged version of USDC known as USDC.e that has been bridged from Ethereum to Arbitrum, and native USDC, known as USDC. Depending on providers, we support both USDC.e and USDC. Please check your wallet balances for both tokens" />
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default BuyCryptoPage;
