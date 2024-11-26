"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  CalculatorIcon,
  CloseIcon,
} from "../icons";
import FooterDetails from "../ROICalculator/footerDetails";
interface IPropsModal {
  children: ReactNode
  label?:string
}

const ARPModal: React.FC<IPropsModal> = ({ children , label}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [footerDetails, setFooterDetails] = useState(false);

  const [contentHeight, setContentHeight] = useState("0px");
  const modalRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };
  const handleShowDetailsFooter = () => {
    setFooterDetails(!footerDetails);
  };

  useEffect(() => {
    if (modalRef.current && footerRef.current) {
      // Calculate available height for content
      const modalHeight = modalRef.current.offsetHeight;
      const footerHeight = footerRef.current.offsetHeight;
      const availableHeight = modalHeight - footerHeight - 64; // Subtract footer height and padding
      setContentHeight(`${availableHeight}px`);
    }
  }, [footerDetails, isOpen]);

  return (
    <div>
      <button
        className="hover:opacity-65 transition-all duration-200 ease-linear font-[400] text-[16px] text-white flex items-center gap-1"
        onClick={handleOpenModal}
      >
        {label}
        <CalculatorIcon width="20px" />
      </button>
      {isOpen && (
        <div
          className="fixed modal-backdrop inset-0 z-[999] flex items-center justify-center bg-white bg-opacity-65"
          onClick={handleOpenModal}
        >
          <div
            className={`modal-content bg-black-light1 rounded-lg shadow-lg  w-[460px]  animate-fade-in  z-[1000] h-[90vh] `}
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
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
              className={`overflow-y-auto`}
              style={{ height: contentHeight }}
            >
              <div className="h-[70vh] py-3 px-5">{children}</div>
            </div>

            <div
            ref={footerRef}
              className={`grid rounded-2xl ${
                footerDetails ? "h-fit bottom-0" : "h-[8vh]"
              }  bg-black-main`}
            >
              <div className="flex justify-center h-16 items-center">
                {!footerDetails && (
                  <button
                    onClick={handleShowDetailsFooter}
                    className="text-white flex items-center gap-2 hover:opacity-65 transition-all duration-200 ease-linear"
                  >
                    Details <ArrowDown width="20px"/>
                    
                  </button>
                )}
                {footerDetails && (
                  <button
                    onClick={handleShowDetailsFooter}
                    className=" text-white flex items-center gap-2 hover:opacity-65 transition-all duration-200 ease-linear"
                  >
                    Hide <ArrowUp width="20px" />
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

export default ARPModal;
