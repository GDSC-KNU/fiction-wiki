import { FictionContext } from "@src/context/fictionContext";
import { useContext } from "react";

const WikiDetailFormModal = ({ isOpen, onClose, children }: any) => {
  let fictionContext = useContext(FictionContext);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 pt-24">
      <div className=" max-h-[70vh] overflow-y-auto  rounded-lg bg-white px-8 py-4 text-start shadow-xl">
        {children}
        <button
          className="mt-4  rounded bg-blue-500 px-4 py-2 text-white"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default WikiDetailFormModal;
