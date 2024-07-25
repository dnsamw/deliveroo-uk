import React from 'react'
import { IoAddSharp } from "react-icons/io5";
type Props = {}

function FoodItemCard({}: Props) {
  return (
    <div className="min-w-[130px] rounded overflow-hidden shadow-lg bg-white">
      <img src="https://rs-menus-api.roocdn.com/images/491fc50c-93bf-4f7b-85ee-ca56ec982922/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop" alt="Superfood salad" className="w-full h-32 object-cover" />
      <div className="px-4 py-2">
        <h2 className="text-md font-semibold">Superfood salad</h2>
        <p className="text-sm text-gray-500">367 kcal</p>
        <p className="text-sm text-gray-700">£11.49</p>
        <button className="mt-4 w-full bg-transparent hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded-sm flex justify-center items-center">
        <IoAddSharp className='text-2xl text-teal-400' />
        </button>
      </div>
    </div>
  )
}

export default FoodItemCard