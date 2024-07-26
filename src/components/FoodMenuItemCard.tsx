import React from 'react'
import { IoAddSharp } from "react-icons/io5";
import { fakeFoodItem } from './_testdata/fakeData';

type Props = {}

function FoodMenuItemCard({}: Props) {
  return (
    <div className="bg-white  w-full min-h-32 md:max-h-42 2xl:max-h-36 2xl:max-w-lg rounded border p-4 md:p-6 overflow-hidden shadow-md shadow-gray-300/40 flex justify-between items-center space-x-4 hover:shadow-lg hover:shadow-gray-400/40 hover:shadow-b-2 hover:cursor-pointer">

      <div className="flex flex-col xl:h-28">
        <div className="text-gray-700 font-bold text-md">{fakeFoodItem.name}</div>
        <p className="text-gray-500 text-[0.85rem]">
          {fakeFoodItem.shortDescription}
        </p>
        <div className="text-gray-500 text-md">{fakeFoodItem.price}</div>
      </div>

      <div className="flex justify-end">
        <img
          className="object-cover max-w-32 max-h-32 xl:max-w-28"
          src={fakeFoodItem.thumbnail}
          alt={fakeFoodItem.name}
        />
      </div>

      <div className="h-full xl:h-28">
        <button className="h-[100%] w-10 bg-transparent hover:bg-gray-200 text-gray-800 font-semibold p-2 border border-gray-200 rounded-sm flex justify-center items-center">
        <IoAddSharp className='text-2xl text-gray-400' />
        </button>
      </div>
    </div>
  )
}

export default FoodMenuItemCard