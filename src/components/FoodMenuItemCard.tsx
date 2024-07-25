import React from 'react'
import { IoAddSharp } from "react-icons/io5";

type Props = {}

function FoodMenuItemCard({}: Props) {
  return (
    <div className="bg-white w-full max-h-42 2xl:max-h-36 2xl:max-w-lg rounded border p-6 overflow-hidden shadow-md shadow-gray-300/40 flex items-center space-x-4 hover:shadow-lg hover:shadow-gray-400/40 hover:shadow-b-2 hover:cursor-pointer">

      <div className="flex flex-col xl:h-28">
        <div className="text-gray-700 font-bold text-md">halloumi & roasted veg salad platter</div>
        <p className="text-gray-500 text-[0.85rem]">
          A feast for 6 people! halloumi with pesto, roasted peppers, ...
        </p>
        <div className="text-gray-500 text-md">£59.99</div>
      </div>

      <div className="flex justify-end">
        <img
          className="object-cover max-w-32 max-h-32 xl:max-w-28"
          src="https://rs-menus-api.roocdn.com/images/491fc50c-93bf-4f7b-85ee-ca56ec982922/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop"
          alt="Halloumi & Roasted Veg Salad Platter"
        />
      </div>

      <div className="xl:h-28">
        <button className="h-[100%] w-10 bg-transparent hover:bg-gray-200 text-gray-800 font-semibold p-2 border border-gray-200 rounded-sm flex justify-center items-center">
        <IoAddSharp className='text-2xl text-gray-400' />
        </button>
      </div>
    </div>
  )
}

export default FoodMenuItemCard