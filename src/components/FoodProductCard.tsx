import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import { fakeFoodProduct } from "./_testdata/fakeData";
import FoodProductModal from "./modals/FoodProductModal";
type Props = {};

function FoodProductCard({}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="min-w-[130px] rounded overflow-hidden shadow-lg bg-white hover:cursor-pointer"
      >
        <img
          src={fakeFoodProduct.thumbnail}
          alt={fakeFoodProduct.name}
          className="w-full h-32 object-cover"
        />
        <div className="px-4 py-2">
          <h2 className="text-md font-semibold">{fakeFoodProduct.name}</h2>
          <p className="text-sm text-gray-500">{fakeFoodProduct.cal}</p>
          <p className="text-sm text-gray-700">{fakeFoodProduct.price}</p>
          <button className="mt-4 w-full bg-transparent hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded-sm flex justify-center items-center">
            <IoAddSharp className="text-2xl text-teal-400" />
          </button>
        </div>
      </div>
      {isModalOpen && <FoodProductModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default FoodProductCard;
