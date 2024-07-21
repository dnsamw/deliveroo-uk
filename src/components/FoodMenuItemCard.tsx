import React from 'react'
import { IoAddSharp } from "react-icons/io5";

type Props = {}

function FoodMenuItemCard({}: Props) {
  return (
    <div className="bg-white max-w-lg rounded border p-6 overflow-hidden shadow-md shadow-gray-300/40 flex items-center space-x-4 hover:shadow-lg hover:shadow-gray-400/40 hover:shadow-b-2 hover:cursor-pointer">

      <div className="">
        <div className="text-gray-600 font-bold text-xl mb-2">halloumi & roasted veg salad platter</div>
        <p className="text-gray-400 text-xl">
          A feast for 6 people! halloumi with pesto, roasted peppers, ...
        </p>
        <div className="text-gray-500 text-xl font-semibold mt-2">£59.99</div>
      </div>

      <div className="h-[100%] w-[100%]">
        <img
          className="object-cover w-[100%] h-[100%]"
          src="https://rs-menus-api.roocdn.com/images/491fc50c-93bf-4f7b-85ee-ca56ec982922/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop"
          alt="Halloumi & Roasted Veg Salad Platter"
        />
      </div>

      <div className="h-[100%]">
        <button className="h-[100%] w-full bg-transparent hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded-sm flex justify-center items-center">
        <IoAddSharp className='text-2xl text-gray-400' />
        </button>
      </div>
    </div>
  )
}

export default FoodMenuItemCard