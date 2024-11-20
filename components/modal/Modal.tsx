import { ReactNode } from "react";
import { ArrowLeftIcon, CloseIcon } from "../icons";

interface IPropsModal {
  isOpen: boolean;
  onOpen: () => void;
  title: string;
  children: ReactNode;
  Footer?: ReactNode;
  isBack?: boolean;
  backFunction?:() => void
}

const ModalComponent: React.FC<IPropsModal> = ({
  isOpen,
  onOpen,
  title,
  children,
  Footer,
  isBack,
  backFunction
}) => {

  const handleBackFunction = () => {
    if(backFunction)backFunction()
  }
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-65"
          onClick={onOpen}
        >
          <div
            className="bg-black-light1 rounded-lg shadow-lg max-w-md w-full p-6 animate-fade-in px-7 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between pt-2">
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
            <div>{children}</div>

            <div className="mt-6 flex justify-end">{Footer}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
