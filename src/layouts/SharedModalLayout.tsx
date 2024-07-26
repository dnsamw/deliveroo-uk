import React from 'react'
import ModalHeader from '../components/UI/ModalParts/ModalHeader';
import { ModalExitType, ModalType } from '../types';
type Props = {
    onClose: () => void;
    modalType:ModalType | null;
}

function SharedModalLayout({onClose,modalType}: Props) {

    const handleClose = () => {
        onClose()
    }   

    const getModalExitType = (modalType:ModalType | null) => {
        switch (modalType) {
            case ModalType.MobileSearch:
                return ModalExitType.Back
            default:
                return ModalExitType.Close
        }
    }

  return (
    <div className='animate-fade bg-black bg-opacity-70 w-full h-screen fixed top-0 left-0 flex justify-center items-center z-[9999]'>

        <div className='animate-zoom w-[600px] bg-gray-100 h-screen xl:max-h-[90%] max-w[85%] overflow-x-scroll rounded flex flex-col'>
            <ModalHeader modalType={modalType} exitType={getModalExitType(modalType)} onClose={handleClose} modalTitle='Test Title' />
            <div className="modal-body">

            </div>
            <div className="modal-footer"></div>
        </div>

    </div>
  )
}

export default SharedModalLayout