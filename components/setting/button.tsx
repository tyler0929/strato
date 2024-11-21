interface IPropsButton {
  text: string;
  onClick: (event: React.MouseEvent) => void;
  selected: string;
}

const SettingButton: React.FC<IPropsButton> = ({ text, onClick, selected }) => {
  return (
    <button
      onClick={onClick}
      id={text}
      className={`${
        selected === text ? " bg-primary-main" : "bg-black-light2"
      } text-white font-PBold  font-[600] text-[16px] rounded-lg px-5 py-2 cursor-pointer hover:opacity-65 transition-all duration-200 ease-linear`}
    >
      {text}
    </button>
  );
};
export default SettingButton;
