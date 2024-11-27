 "use client"
 import { useState } from "react";
import {
  ArrowTableLeft,
  ArrowTableRight,
} from "../icons";

interface IPropsPagination {
  start?: number;
  end: number;
}

const Pagination: React.FC<IPropsPagination> = ({ start = 1, end }) => {
  const [currentPage, setCurrentPage] = useState(start);

  const handleChangePage = (event: React.MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget?.id;
    if (id === "down" && start === currentPage) return;

    if (id === "up" && end === currentPage) return;

    return setCurrentPage(id === "down" ? currentPage - 1 : currentPage + 1)
  };
  return (
    <div className="flex justify-center items-center py-2">
      <div className="flex items-center gap-6">
        <div
          id="down"
          className={`${currentPage === 1 ?"text-[#666171]" : "text-primary-main cursor-pointer"} `}
          onClick={handleChangePage}
        >
          <ArrowTableLeft width={20} />
        </div>
        <div className="font-[400] text-[16] text-white ">Page&nbsp; {currentPage} &nbsp;of &nbsp;{end}</div>
        <div
          id="up"
          className={`${currentPage === end ?"text-[#666171]" : "text-primary-main cursor-pointer"} `}
          onClick={handleChangePage}
        >
          <ArrowTableRight width={20} />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
