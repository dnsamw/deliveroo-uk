import React from "react";

type Props = {
  text: string;
};

function ModalText({ text }: Props) {
  return <div className="p-4 text-sm border">{text}</div>;
}

export default ModalText;
