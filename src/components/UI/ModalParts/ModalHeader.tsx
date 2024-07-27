import React from "react";
import { ModalExitType, ModalType } from "../../../types";
import { IoArrowBack, IoArrowForward, IoCloseSharp } from "react-icons/io5";
import InputBlinnkingCursor from "../InputBlinnkingCursor";

type Props = {
  modalType: ModalType | null;
  onClose: () => void;
  modalTitle?: string;
};

function ModalHeader({ onClose, modalTitle, modalType }: Props) {
  const getModalExitType = (modalType: ModalType | null) => {
    switch (modalType) {
      case ModalType.MobileSearch:
        return ModalExitType.Back;
      default:
        return ModalExitType.Close;
    }
  };

  const renderExitIcon = (exitType: ModalExitType) => {
    switch (exitType) {
      case ModalExitType.Close:
        return <IoCloseSharp className="text-3xl text-teal-400" />;
      case ModalExitType.Back:
        return <IoArrowBack className="text-3xl text-teal-400" />;
      case ModalExitType.Continue:
        return <IoArrowForward className="text-3xl text-teal-400" />;
      default:
        return <IoCloseSharp className="text-3xl text-teal-400" />;
    }
  };

  return (
    
      <div className="modal-header border-b h-[60px] bg-white flex justify-center items-center absolute top-0 w-full xl:w-[600px]">
        {modalTitle && modalType !== ModalType.MobileSearch && (
          <h3 className="text-md font-bold">{modalTitle}</h3>
        )}
        {modalType === ModalType.MobileSearch && (
          <InputBlinnkingCursor placeholder={modalTitle} />
        )}
        <button
          onClick={onClose}
          className={`colse absolute ${
            getModalExitType(modalType) === ModalExitType.Back
              ? "left-4"
              : "right-4"
          } cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-teal-100`}
        >
          {renderExitIcon(getModalExitType(modalType))}
        </button>
      </div>
    
  );
}

export default ModalHeader;
