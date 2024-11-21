"use client";
import { ReactNode, useState } from "react";
import { ArrowDown, ArrowUp } from "../icons";

interface IPropsCollapse {
  children: ReactNode;
  title: string;
}
const Collapse: React.FC<IPropsCollapse> = ({ children, title }) => {
  const [show, setShow] = useState(false);

  const handleShowDetails = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="flex gap-4">
        <p className="flex-1 text-[16px] font-[500] text-white">{title}</p>
        <div
          onClick={handleShowDetails}
          className="w-fit flex gap-2 items-center text-white cursor-pointer hover:opacity-65 transition-all duration-200 ease-linear"
        >
          <p className="font-[600] text-[16px]">{show ? "Hide" : "Details"}</p>
          {show ? <ArrowUp width={"20px"} /> : <ArrowDown width={"20px"} />}
        </div>
      </div>
      {show && <div>{children}</div>}
    </div>
  );
};

export default Collapse;
