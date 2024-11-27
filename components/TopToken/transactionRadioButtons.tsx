import React, { useState } from "react";
import { Text_14_600 } from "../typography/Typography";

type Option = {
  id: string;
  label: string;
};

const RadioButtonGroup: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("All");

  const options: Option[] = [
    { id: "All", label: "All" },
    { id: "Swaps", label: "Swaps" },
    { id: "Adds", label: "Adds" },
    { id: "Removes", label: "Removes" },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex gap-4  items-center py-3">
      {options.map((option) => (
        <label
          key={option.id}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <input
            type="radio"
            name="radio-group"
            value={option.id}
            checked={selectedOption === option.id}
            onChange={handleChange}
            className="peer hidden"
          />
          <div
            className={`w-6 h-6 rounded-full border border-[#524b63] flex items-center justify-center hover:shadow-shadowsFocus transition-all duration-200 ease-linear
            peer-checked:bg-[#31d0aa] peer-checked:border-none`}
          >
            <div
              className={`${
                selectedOption === option?.id
                  ? "w-3 h-3 rounded-full bg-black-light1"
                  : "w-[22px] h-[22px] rounded-full bg-black-light1"
              }`}
            ></div>
          </div>
          <Text_14_600 text={option?.label} />
        </label>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
