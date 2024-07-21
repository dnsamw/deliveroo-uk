import React from "react";
import {
  IoHomeOutline,
  IoPeopleOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { IconButtonTypes } from "../../Config";

type Props = {
  type: IconButtonTypes;
  text: string;
};

function IconButton({ type, text }: Props) {
  const renderIcon = (type: IconButtonTypes) => {
    const btnClasses = "text-3xl text-teal-400"
    switch (type) {
      case IconButtonTypes.SIGNUP_LOGIN:
        return <IoHomeOutline className={btnClasses} />;
      case IconButtonTypes.ACCOUNT:
        return <IoPersonOutline className={btnClasses} />;
      case IconButtonTypes.GROUP_ORDER:
        return <IoPeopleOutline className={btnClasses} />;
      default:
        return;
    }
  };

  return (
    <button className="flex text-xl items-center gap-2 border px-4 py-3 rounded-md hover:border-gray-300">
      <div>{renderIcon(type)}</div>
      <div>{text}</div>
    </button>
  );
}

export default IconButton;
