import React from "react";
import SharedModalLayout from "../../layouts/SharedModalLayout";
import ModalHeader from "../UI/ModalParts/ModalHeader";
import { ModalType } from "../../types";
import CenterModalContainerLayout from "../../layouts/CenterModalContainerLayout";
import { fakeFoodProduct } from "../_testdata/fakeData";
import { IoCloseSharp } from "react-icons/io5";
import FoodAddInOption from "../FoodAddInOption";

type Props = {
  onClose: () => void;
};
function FoodItemModal({ onClose }: Props) {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <SharedModalLayout>
        <CenterModalContainerLayout>
          <div className="modal-header">
            {/* <div className="modal-header border-b h-[60px] bg-white flex justify-center items-center relative">
              <h3 className="text-md font-bold">{"modalTitle"}</h3>
            </div> */}
            <img
              src={fakeFoodProduct.thumbnail}
              alt="Superfood salad"
              className="w-full h-72 object-cover"
            />
          </div>
          
          <button
            onClick={onClose}
            className="bg-white colse absolute right-2 top-2 p-2 cursor-pointer rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-100"
          >
            <IoCloseSharp className="text-3xl text-teal-400" />
          </button>
          
          <div className="modal-body p-4 flex flex-col gap-4">

            <div className="food-info border-b border-gray-200 pb-4">
              <h3 className="text-2xl font-bold pb-2">{fakeFoodProduct.name}</h3>
              <p className="text-md pb-2">{fakeFoodProduct.description}</p>
              <p className="text-md text-gray-700">{fakeFoodProduct.cal}</p>
            </div>

            <div className="ingredients border-b border-gray-200 pb-4">
              <div className="text-sm font-semibold">
                Contains 
                {fakeFoodProduct.ingredients.map((ingredient, index) => (
                  <p className="inline-block" key={index}>{ingredient} {fakeFoodProduct.ingredients.length-1 !== index &&",&nbsp;"}</p>
                ))}
              </div>
                <p className="text-sm text-gray-700">Questions about allergens, ingredients or cooking methods?</p>
                <a href="#" className="text-sm text-teal-400">Please contact the restaurant.</a>
            </div>

            <div className="food-info border-b border-gray-200 pb-4">
              <div className="pb-2">
                <h4 className="text-md font-semibold">AddIn Option Title</h4>
                <p className="text-sm text-gray-700">AddIn Option required flag</p>
              </div>
              <div className="flex flex-col gap-2">
              <FoodAddInOption />
              <FoodAddInOption />
              <FoodAddInOption />
              <FoodAddInOption />
              <FoodAddInOption />
              </div>
            </div>
          </div>

          <div className="modal-footer"></div>
        </CenterModalContainerLayout>
      </SharedModalLayout>
    </>
  );
}

export default FoodItemModal;
