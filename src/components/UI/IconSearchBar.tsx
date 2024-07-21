import React from 'react'
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

type Props = {}

function IconSearchBar({}: Props) {
  return (
    <div className='relative'>
    <span className='absolute inset-y-0 left-0 flex items-center pl-3'><IoSearchOutline className='text-2xl text-gray-400'/></span>
    <span className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'><IoCloseOutline className='text-3xl text-gray-400'/></span>
    <input className='border rounded-md text-2xl px-4 py-2 pl-12 w-full' type="text" placeholder="Tossed - St Martin's Lane" />
    </div>
  )
}

export default IconSearchBar