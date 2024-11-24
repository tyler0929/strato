import React, { ReactNode, useState, useRef, useEffect } from "react";
import { TooltipIcon } from "../icons";

interface TooltipProps {
  content?: string;
  position?: "top" | "bottom" | "left" | "right"; // Optional position prop
  width?:string,
  children?:ReactNode,
  widthIcon?:string
  styleContainer?:string,
  styleArrow?:string,
  container?:ReactNode
}

const Tooltip: React.FC<TooltipProps> = ({ content, position , width= "w-80" , widthIcon= "15px", children  , styleContainer , styleArrow , container}) => {
  const [calculatedPosition, setCalculatedPosition] = useState("top");
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && !position && tooltipRef.current && triggerRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Calculate position dynamically if no position prop is provided
      if (triggerRect.top > tooltipRect.height) {
        setCalculatedPosition("top");
      } else if (viewportHeight - triggerRect.bottom > tooltipRect.height) {
        setCalculatedPosition("bottom");
      } else if (triggerRect.left > tooltipRect.width) {
        setCalculatedPosition("left");
      } else if (viewportWidth - triggerRect.right > tooltipRect.width) {
        setCalculatedPosition("right");
      } else {
        setCalculatedPosition("top"); // Default to top if no space
      }
    }
  }, [isVisible, position]);

  const activePosition = position || calculatedPosition;

  return (
    <div
      className="relative inline-block"
      ref={triggerRef}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {/* Tooltip Content */}
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`absolute z-50 bg-white text-black-light1  text-sm px-7  font-[400] text-[16px] leading-6 py-5 rounded-xl shadow-lg transition-opacity ${width} ${
            activePosition === "top"
              ? `${styleContainer || "left-1/2 transform -translate-x-1/2" }  bottom-full mb-2 `
              : activePosition === "bottom"
              ? `${styleContainer || "left-1/2 transform -translate-x-1/2"} top-full mt-2 `
              : activePosition === "left"
              ? `${styleContainer || "top-1/2 transform -translate-y-1/2"} right-full mr-2 `
              : `${styleContainer || "top-1/2 transform -translate-y-1/2"} left-full ml-2 `
          }`}
        >
          {content}
          {container}
          {/* Tooltip Arrow */}
          <div
            className={`absolute w-3 h-3 bg-white transform rotate-45 ${
              activePosition === "top"
                ? `${styleArrow || "left-1/2 -translate-x-1/2 -translate-y-[6px]"} top-full `
                : activePosition === "bottom"
                ? `${styleArrow || "left-1/2 -translate-x-1/2 translate-y-[6px]"} bottom-full `
                : activePosition === "left"
                ? `${styleArrow || "top-1/2 -translate-y-1/2"} left-full `
                : `${styleArrow || "top-1/2 -translate-y-1/2"} right-full `
            }`}
          ></div>
        </div>
      )}

      {/* Tooltip Trigger */}
      <div className="hover:opacity-65 cursor-pointer transition-all duration-200 ease-linear">
        {children || <TooltipIcon width={widthIcon} />}
      </div>
    </div>
  );
};

export default Tooltip;
