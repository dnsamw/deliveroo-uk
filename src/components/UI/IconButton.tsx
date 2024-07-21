import React from "react";
import {
  IoHomeOutline,
  IoPeopleOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { IconButtonTypes } from "../../config";

type Props = {
  type: IconButtonTypes;
  text: string;
};

function IconButton({ type, text }: Props) {
  const renderIcon = (type: IconButtonTypes) => {
    switch (type) {
      case IconButtonTypes.SIGNUP_LOGIN:
        return <IoHomeOutline className="text-3xl" />;
      case IconButtonTypes.ACCOUNT:
        return <IoPersonOutline className="text-3xl" />;
      case IconButtonTypes.GROUP_ORDER:
        return <IoPeopleOutline className="text-3xl" />;
      default:
        return;
    }
  };

  return (
    <button className="flex text-xl items-center gap-2 border px-4 py-2 rounded-md hover:border-gray-300">
      <div>{renderIcon(type)}</div>
      <div>{text}</div>
    </button>
  );
}

export default IconButton;
