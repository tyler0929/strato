const Text_16_600 = ({ text, style }: { text: string; style?: string }) => {
  return (
    <p className={`${style}   font-[600] text-[16px] text-white`}>
      {text}
    </p>
  );
};
const Text_14_600 = ({ text, style }: { text: string; style?: string }) => {
  return (
    <p className={`${style}  font-[600] text-[14px] text-white`}>
      {text}
    </p>
  );
};
const Text_20_600 = ({ text, style }: { text: string; style?: string }) => {
  return (
    <p className={`${style}  font-[600] text-[20px] text-white`}>
      {text}
    </p>
  );
};
const Text_12_600 = ({ text, style }: { text: string; style?: string }) => {
  return (
    <p className={`${style}  font-[600] text-[12px] text-white`}>
      {text}
    </p>
  );
};
const Text_14_400 = ({ text, style }: { text: string; style?: string }) => {
  return (
    <p className={`${style}  font-[400] text-[14px]  text-white`}>
      {text}
    </p>
  );
};
const Text_16_400 = ({ text, style }: { text: string; style?: string }) => {
  return (
    <p className={`${style}  font-[400] text-[16px] text-white`}>
      {text}
    </p>
  );
};



export { Text_14_600 , Text_20_600 , Text_14_400 , Text_16_600 , Text_16_400 , Text_12_600};
