import React from "react";

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <label className="flex items-center space-x-3 cursor-pointer">
      {/* Hidden Native Checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer focus:ring-1 focus:ring-[#7645d9] focus:ring-offset-4 focus:ring-offset-[rgba(118,69,217,0.6)] focus:outline-none"
      />

      {/* Custom Checkbox */}
      <div
        className={`w-5 h-5 flex items-center justify-center rounded border-2 transition-all ${
          checked
            ? "bg-primary-main border-primary-main"
            : "bg-black-main border-[#524b63]"
        }`}
      >
        {/* Check Icon */}
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>

      {/* Optional Label */}
      {label && <span className="text-gray-700">{label}</span>}
    </label>
  );
};

export default CustomCheckbox;
