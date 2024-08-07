import React from "react";
import SharedModalLayout from "../../layouts/SharedModalLayout";
import ModalHeader from "../UI/ModalParts/ModalHeader";
import { ModalType } from "../../types";
import { fakeFoodMenu } from "../_testdata/fakeData";

type Props = {
  onClose: () => void;
};

function MobileSearchModal({ onClose }: Props) {
  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <SharedModalLayout>
        <div className="animate-zoom w-[600px] bg-gray-100 h-screen xl:max-h-[90%] max-w[85%] overflow-x-scroll rounded flex flex-col">
          <ModalHeader
            modalType={ModalType.MobileSearch}
            onClose={handleClose}
            modalTitle="Test Title"
          />
          <div className="modal-body"></div>
          <div className="modal-footer"></div>
        </div>
      </SharedModalLayout>
    </>
  );
}

export default MobileSearchModal;
