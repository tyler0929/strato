import Link from "next/link";
import { ReactNode } from "react";
import {
  CircleArrow,
  DolarIcon,
  FarmIcon,
  HistoryTransictionIcon,
  SettingIcon,
  SwapIcon,
} from "../icons";
import SettingComponent from "../setting/setting";

type RouterData = {
  Icon: ReactNode;
  link: string;
};

const RouteData: RouterData[] = [
  {
    Icon: <DolarIcon />,
    link: "#id0",
  },
  {
    Icon: <SwapIcon />,
    link: "#idOne",
  },
  {
    Icon: <FarmIcon />,
    link: "#idTwo",
  },
  {
    Icon: <SettingComponent baseComponent="HeaderSetting" />,
    link: "#idThree",
  },
  {
    Icon: <HistoryTransictionIcon />,
    link: "#idFour",
  },
  {
    Icon: <CircleArrow width={"22px"} />,
    link: "#idFive",
  },
];
const SwapLinks = () => {
  return (
    <div className="flex gap-3">
      <div className="text-white  transition-all duration-200 ease-linear">
        <DolarIcon />
      </div>
      <div className="text-white hover:opacity-65 transition-all duration-200 ease-linear">
        <SwapIcon />
      </div>
      <div className="text-white hover:opacity-65 transition-all duration-200 ease-linear">
        <FarmIcon />
      </div>
      <div className="text-white  transition-all duration-200 ease-linear">
        <SettingComponent baseComponent="HeaderSetting" />
      </div>
      <div className="text-white hover:opacity-65 transition-all duration-200 ease-linear">
        <HistoryTransictionIcon />
      </div>
      <div className="text-white hover:opacity-65 transition-all duration-200 ease-linear">
        <CircleArrow width={"22px"} />
      </div>
      {/* {RouteData?.map((item) => (
        <Link href={item?.link} key={item?.link}>
          {item?.Icon}
        </Link>
      ))} */}
    </div>
  );
};
export default SwapLinks;
