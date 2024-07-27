import React from "react";

type Props = {
    heading: string
};

function ModalHeading({heading}: Props) {
  return (
    <div className="text-xl font-bold bg-gray-100 p-4">
      <h2>{heading}</h2>
    </div>
  );
}

export default ModalHeading;
