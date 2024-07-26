import React from "react";

type Props = {
    placeholder?:string
};

function InputBlinnkingCursor({placeholder}: Props) {
  return (
    <>
      <div className="cursor relative ml-8 mr-2 w-[80%]">
        <input placeholder={`Search ${placeholder}`} type="text" className="p-2 w-full" />
        <i className="bg-teal-400"></i>
      </div>
    </>
  );
}

export default InputBlinnkingCursor;
