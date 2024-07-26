import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
type Props = {
    onClose: () => void
}

function SharedModalLayout({onClose}: Props) {

    const handleClose = () => {
        onClose()
    }   

  return (
    <div className='animate-fade bg-black bg-opacity-50 w-full h-screen fixed top-0 left-0 flex justify-center items-center z-[9999]'>
        <div className='w-[600px] bg-gray-100 min-h-[50%] max-w[85%] overflow-x-scroll rounded flex flex-col'>
            <div className="modal-header border-b h-[60px] bg-white flex justify-center items-center relative">
                <h3 className="text-md font-bold">Modal Title</h3>
                <button onClick={handleClose} className="colse absolute right-4 cursor-pointer p- rounded focus:outline-none focus:ring-2 focus:ring-teal-100">
                    <IoCloseSharp className='text-3xl text-teal-400'/>
                </button>
            </div>
            <div className="modal-body">

            </div>
            <div className="modal-footer"></div>
        </div>
    </div>
  )
}

export default SharedModalLayout