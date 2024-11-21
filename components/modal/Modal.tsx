import { ReactNode } from "react";
import { ArrowLeftIcon, CloseIcon } from "../icons";

interface IPropsModal {
  isOpen: boolean;
  onOpen: () => void;
  title: string;
  children: ReactNode;
  Footer?: ReactNode;
  isBack?: boolean;
  backFunction?:() => void,
  styleHeader?:string,
  width?:string,
  paddingContent?:string
}

const ModalComponent: React.FC<IPropsModal> = ({
  isOpen,
  onOpen,
  title,
  children,
  Footer,
  isBack,
  backFunction,
  styleHeader,
  width,
  paddingContent
}) => {

  const handleBackFunction = () => {
    if(backFunction)backFunction()
  }
  return (
    <>
      {isOpen && (
        <div
          className="fixed modal-backdrop inset-0 z-[999] flex items-center justify-center bg-white bg-opacity-65"
          onClick={onOpen}
        >
          <div
            className={`modal-content bg-black-light1 rounded-lg shadow-lg max-w-md w-full  animate-fade-in  z-[1000]  ${width}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`${styleHeader} flex justify-between  p-6 px-7 rounded-t-lg`}>
              <div className="flex justify-start gap-4 items-center">
                {isBack && (
                  <div
                    className="text-white hover:opacity-70 transition-all duration-200 ease-linear cursor-pointer"
                    onClick={handleBackFunction}
                  >
                    <ArrowLeftIcon width="25px" />
                  </div>
                )}
                <h2 className="text-xl font-bold text-white">{title}</h2>
              </div>
              <div
                className="text-white hover:opacity-70 transition-all duration-200 ease-linear cursor-pointer"
                onClick={onOpen}
              >
                <CloseIcon width={"20px"} />
              </div>
            </div>
            <div className={ paddingContent || `px-7`}>{children}</div>

            <div className="mt-6 flex justify-end">{Footer}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
