import React from "react";
import SharedModalLayout from "../../layouts/SharedModalLayout";
import CenterMobileBottomModalContainerLayout from "../../layouts/CenterMobileBottomModalContainerLayout";
import { IoCloseSharp } from "react-icons/io5";

type Props = {
  onClose: () => void;
};


function LocationChangerModal({ onClose }: Props) {
    const handleClose = () => {
      onClose();
    };
  return (
    <>
      <SharedModalLayout>
        <CenterMobileBottomModalContainerLayout>
          <div className="animate-zoom mb-32 mt-[60px] w-full xl:w-[600px] bg-white h-full xl:max-h-[90%] max-w[85%] rounded flex flex-col">
            <div className="modal-body p-4">
                
            </div>
            <div className="modal-footer absolute bottom-0 w-full xl:w-[600px] min-h-32 bg-white p-4 flex justify-center items-center border-t">
              <button className="bg-teal-400 hover:bg-teal-500 text-lg text-white font-semibold border px-4 py-3 rounded-md w-full cursor-pointer">
                Confirm
              </button>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="bg-white colse absolute right-4 top-2 p-2 cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-teal-100"
          >
            <IoCloseSharp className="text-3xl text-teal-400" />
          </button>
        </CenterMobileBottomModalContainerLayout>
      </SharedModalLayout>
    </>
  );
}

export default LocationChangerModal;
