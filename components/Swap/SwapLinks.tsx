import Link from "next/link";
import { ReactNode } from "react";
import { DolarIcon, FarmIcon, HistoryTransictionIcon, SettingIcon, SwapIcon } from "../icons";

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
    Icon: <SettingIcon />,
    link: "#idThree",
  },
  {
    Icon: <HistoryTransictionIcon />,
    link: "#idFour",
  },
];
const SwapLinks = () => {
  return (
    <div className="flex gap-3">
      {RouteData?.map((item) => (
        <Link href={item?.link} key={item?.link} className="text-white hover:opacity-65 transition-all duration-200 ease-linear">
          {item?.Icon}
        </Link>
      ))}
    </div>
  );
};
export default SwapLinks;
