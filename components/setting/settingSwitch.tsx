import Tooltip from "../Tooltip/Tooltip";
import { Text_14_600 } from "../typography/Typography";
import CustomCheckbox from "./CustomCheckbox";

interface SwitchProps {
  isOn: boolean;
  onToggle: (value: boolean) => void;
  text:string,
  tooltipText:string,
  isInput?:boolean,
  isCheckbox?:boolean
}
const SettingSwitch: React.FC<SwitchProps> = ({
  isOn,
  onToggle,
  text,
  tooltipText,
  isInput= false,
  isCheckbox
 
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Text_14_600 text={text} />
        <Tooltip content={tooltipText} position="top" />
      </div>
      <div className="w-fit h-fit">
        {!isInput && !isCheckbox &&<div
          className={`relative w-12 h-6 flex items-center rounded-full cursor-pointer transition-colors ${
            isOn ? "bg-primary-main" : "bg-black-light2"
          }`}
          onClick={() => onToggle(!isOn)}
        >
        
          {/* Circle */}
          <div
            className={`w-5 h-5 bg-black-main rounded-full shadow-md transform transition-transform ${
              isOn ? "translate-x-6" : "translate-x-1"
            }`}
          ></div>
        </div>}
        {
            isInput && <input
            placeholder="0"
            className="bg-black-light2 he-full rounded-lg font-PBold  font-[600] text-[16px]  px-3 py-2 text-gray-gray1   outline-0  w-16 border-none"
          />
        }
        {
            isCheckbox && <CustomCheckbox
            checked={isOn}
            onChange={() => onToggle(!isOn)}
            label=""
          />
        }
      </div>
    </div>
  );
};

export default SettingSwitch;
