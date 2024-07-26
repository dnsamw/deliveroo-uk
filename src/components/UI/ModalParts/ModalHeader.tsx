import React from 'react'
import { ModalExitType } from '../../../types'
import { IoArrowBack, IoArrowForward, IoCloseSharp } from "react-icons/io5";

type Props = {
    exitType:ModalExitType;
    onClose: () => void;
    modalTitle: string
}

function ModalHeader({exitType, onClose, modalTitle}: Props) {

    const renderExitIcon = (exitType:ModalExitType) => {
        switch (exitType) {
            case ModalExitType.Close:
                return <IoCloseSharp className='text-3xl text-teal-400'/>
            case ModalExitType.Back:
                return <IoArrowBack className='text-3xl text-teal-400'/>
            case ModalExitType.Continue:
                return <IoArrowForward className='text-3xl text-teal-400'/>
            default:
                return <IoCloseSharp className='text-3xl text-teal-400'/>
        }
    }

  return (
    <>
    <div className="modal-header border-b h-[60px] bg-white flex justify-center items-center relative">
                <h3 className="text-md font-bold">{modalTitle}</h3>
                <button onClick={onClose} className="colse absolute right-4 cursor-pointer p- rounded focus:outline-none focus:ring-2 focus:ring-teal-100">
                    {renderExitIcon(exitType)}
                </button>
            </div>
    </>
  )
}

export default ModalHeader