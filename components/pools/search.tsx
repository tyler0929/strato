import { Text_12_600 } from "../typography/Typography"

const SearchInput = () => {
    return<div>
        <Text_12_600  text="Search" style="uppercase"/>
        <input
              placeholder="Search Pools"
              className="no-spinner px-4 py-2 bg-black-light2 text-start rounded-2xl  text-[#f4eeff] text-[16px] outline-0 w-52 border-none"
            />
    </div>
}

export default SearchInput