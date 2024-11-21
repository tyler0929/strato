import SelectToken from "@/components/selectToken/SelectToken"
import { Text_14_400, Text_16_400, Text_20_600 } from "@/components/typography/Typography"


const BuyCryptoPage = () => {
    return (
        <div>
            <div className="bg-black-light1 max-w-96 mt-5 mx-auto px-5 py-7 rounded-2xl">
                <div className="grid gap-2">
                <Text_20_600 text="Buy Crypto" />
                <Text_14_400 text="Buy crypto in just a few clicks"/>
                <Text_16_400 text="I want to spend"/>
                </div>
                <div className="flex gap-5  bg-black-main border border-[#262130] items-center">
                    <input className="outline-none bg-black-main h-12 max-w-32" placeholder="0.0"  />
                    <SelectToken baseComponent="inputCurrency" buyCrypto />
                </div>
            </div>
        </div>
    )
}

export default BuyCryptoPage