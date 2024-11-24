"use client"
import React, { useState } from "react";

interface IProps {
    label?:string
    checked?:boolean,
    onClick:(checked:boolean) =>void
}
const CustomCheckbox:React.FC<IProps> = ({label , checked , onClick}) => {


  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-5 h-5 flex justify-center items-center bg-black-light1 border border-[#524b63] rounded-md cursor-pointer transition-shadow ${
          checked ? "bg-primary-main border-primary-main" : ""
        }`}
        onClick={() => onClick(!checked)}
      >
        {checked && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      {label && <label className="text-[#cfd1d6]  cursor-pointer text-[14px] font-[400]" onClick={() => onClick(!checked)}>
      {label}
      </label>}
    </div>
  );
};

export default CustomCheckbox;
