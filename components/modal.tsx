import { ReactNode } from "react";
import "twin.macro";

type PropTypes = {
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const Modal = ({ onClose, title, children }: PropTypes) => {
  return (
    <>
      <div
        tw="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={onClose}
      >
        <div tw="relative w-auto my-6 mx-auto max-w-3xl">
          <div tw="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div tw="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 tw="text-3xl font-semibold">{title}</h3>
              <button
                tw="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <span tw="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div tw="relative p-6 flex-auto">
              <p tw="my-4 text-gray-600 text-lg leading-relaxed">{children}</p>
            </div>
          </div>
        </div>
      </div>
      <div tw="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
