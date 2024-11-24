"use client";
import { ReactNode, useState } from "react";
import {
  ArrowDown,
  ArrowLeftIcon,
  ArrowUp,
  CalculatorIcon,
  CloseIcon,
} from "../icons";
import Warning from "./warning";
import DepositAmount from "./DepositAmount";
import FooterDetails from "./footerDetails";

interface IPropsModal {
  children: ReactNode;
}

const CalculatorModal: React.FC<IPropsModal> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [footerDetails, setFooterDetails] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };
  const handleShowDetailsFooter = () => {
    setFooterDetails(!footerDetails);
  };
  return (
    <div>
      <button
        className="hover:opacity-65 transition-all duration-200 ease-linear"
        onClick={handleOpenModal}
      >
        <CalculatorIcon width="30px" />
      </button>
      {isOpen && (
        <div
          className="fixed modal-backdrop inset-0 z-[999] flex items-center justify-center bg-white bg-opacity-65"
          onClick={handleOpenModal}
        >
          <div
            className={`modal-content bg-black-light1 rounded-lg shadow-lg  w-[860px]  animate-fade-in  z-[1000] h-[98vh] `}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={` flex justify-between  p-6 px-7 rounded-t-lg h-[8vh]`}
            >
              <div className="flex justify-start gap-4 items-center">
                <h2 className="text-[20px] font-[600] text-white">ROI Calculator</h2>
              </div>
              <div
                className="text-white hover:opacity-70 transition-all duration-200 ease-linear cursor-pointer"
                onClick={handleOpenModal}
              >
                <CloseIcon width={"20px"} />
              </div>
            </div>
            <div
              className={` ${
                footerDetails ? "h-[55vh]" : "h-[82vh]"
              } overflow-y-auto`}
            >
              <div className="h-[100vh] py-3 px-5">{children}</div>
            </div>

            <div
              className={`grid rounded-2xl ${
                footerDetails ? "h-[35vh]" : "h-[8vh]"
              }  bg-black-main`}
            >
              <div className="flex justify-center h-16 items-center">
                {!footerDetails && (
                  <button
                    onClick={handleShowDetailsFooter}
                    className="flex items-center gap-2 hover:opacity-65 transition-all duration-200 ease-linear"
                  >
                    Details <ArrowUp width="20px" />
                  </button>
                )}
                {footerDetails && (
                  <button
                    onClick={handleShowDetailsFooter}
                    className="flex items-center gap-2 hover:opacity-65 transition-all duration-200 ease-linear"
                  >
                    Hide <ArrowDown width="20px"/>
                  </button>
                )}
              </div>
              <FooterDetails />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorModal;
