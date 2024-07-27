import React from "react";
import RadioAddIn from "./UI/AddInItems/RadioAddIn";

type Props = {};

function FoodItemAddIn({}: Props) {
  return (
    <>
      <div className="pb-1">
        <h4 className="text-md font-semibold">AddIn Option Title</h4>
        <p className="text-sm text-gray-700">AddIn Option required flag</p>
      </div>
      <div className="w-full flex flex-col text-gray-900 justify-center items-center">
        <RadioAddIn />
      </div>
    </>
  );
}

export default FoodItemAddIn;
