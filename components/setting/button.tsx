interface IPropsButton {
  text: string;
  onClick: (event: React.MouseEvent) => void;
  selected: string;
  defaultStyle?:string
}

const SettingButton: React.FC<IPropsButton> = ({ text, onClick, selected , defaultStyle }) => {
  return (
    <button
      onClick={onClick}
      id={text}
      className={`${
        selected === text ? " bg-primary-main" : defaultStyle || "bg-black-light2"
      } text-white   font-[600] text-[16px] rounded-lg px-[1.39rem] py-2 cursor-pointer hover:opacity-65 transition-all duration-200 ease-linear`}
    >
      {text}
    </button>
  );
};
export default SettingButton;
