import React from "react";
import { IoBasketOutline } from "react-icons/io5";
type Props = {};

function BasketPreview({}: Props) {
  return (
    <div className="sticky top-[210px] left-0 right-0 flex flex-col items-center justify-between border border-gray-200 rounded-lg p-8 w-full h-[calc(100vh-230px)] mx-auto bg-white">
      <div></div>

      <div className="no-items flex flex-col justify-center items-center">
        <div className="text-gray-300 mb-4">
          <IoBasketOutline className="text-8xl" />
        </div>
        <p className="text-gray-400 text-2xl mb-8">Your basket is empty</p>
      </div>

      <button className="bg-gray-200 text-xl text-gray-400 font-semibold border px-4 py-3 rounded-md w-full cursor-not-allowed">
        Go to checkout
      </button>
    </div>
  );
}

export default BasketPreview;
